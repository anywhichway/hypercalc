(function() {
'use strict'

const genId = () => (Math.random()+"").substring(2),
	restoreEntities = html => html.replace(/&gt;/g,">").replace(/&lt;/g,"<"),
	toBoolean = value => {
		const lookup = {
			true: true,
			false: false,
			yes: true,
			no: false,
			Yes: true,
			No: false,
			"1": true,
			"0": false,
			y: true,
			n: false,
			Y: true,
			N: false
		}
		return !!lookup[value];
	},
	HTMLElementToJSON = (e) => {
		const result = {};
		for(let i=0;i<e.attributes.length;i++) {
			result[e.attributes[i].name] = e.attributes[i].value;
		}
		return result;
	},
	parser = `function(tag,$={},model={}) {
		function parse($,model) { with(model) {
			try { return tag_src_; }
			catch(e) { 
				if(e instanceof ReferenceError) {
					var key = e.message.trim().replace(/'/g,'').split(' ')[0];
					model[key] = (typeof(value)!=='undefined' ? value : '');
					return parse($,model);
				} else throw(e); } } }
		return parse($,model);
	}`,
	activateProperty = (object,property) => {
		const viewmap = object.__views__;
		if(!viewmap) { activate(object); return; }
		const getter =  function() {
			const value = (desc.get ? desc.get.call(object) : desc.value);
			if( typeof(value)!=="function") {
				let views = viewmap.get(property);
				if(!views) {
					views = new Set();
					viewmap.set(property,views)
				}
				views.add(CURRENTVIEW);
			}
			return value;
		}
		getter.feteActivated = true;
		const desc = Object.getOwnPropertyDescriptor(object,property);
		if(desc.get && desc.get.feteAcivated) return;
		Object.defineProperty(object,property,{
			enumerable:desc.enumerable,
			get: getter,
			set: function(value) {
				const me = this;
				value = activate(value);
				if(desc.set) desc.set.call(object,value);
				else if(desc.writable) desc.value = value;
				const views = viewmap.get(property);
				!views || views.forEach((view) => {
					if(view && (view.parentElement || view.ownerElement)) {
						view.model || view.use(me);
						view.render();
					}
					else views.delete(view); // garbage collect
				});
				return true;
			}
		});
	},
	activate = object => {
		if(typeof(object)!=="object" || !object || object.__views__) return object;
		if(Array.isArray(object)) {
			//for(let i=0;i<object.length;i++) object[i] = activate(item[i]);
			// elements are activated on get for performance reasons
			// should we return a Proxy here that will support trapping of new elements and activating??
		}
		else {
			const viewmap = new Map();
			Object.defineProperty(object,"__views__",{enumerable:false,get:function() { return viewmap; },set: function() {}});
			Object.keys(object).forEach(property => { 
				object[property] = activate(object[property]);
				activateProperty(object,property);
			});
		}
		return object;
	},
	router = (event,next) => {
		const target = event.currentTarget,
			controller = target.controller;
		if(controller) {
			const controllertype = typeof(controller),
				model = target.model || {};
			if(controllertype==="function") controller(event,target.model,target.property,target.normalizedValue);
			else if(controllertype==="object") {
				let some;
				if(Object.keys(controller).every(key => {
					let state, 
						rslt = false;
					const test = controller[key].test,
						view = (controller[key].selector ? document.querySelector(controller[key].selector) : target);
					if(event.target.hash) state = event.target.hash.substring(1);
					else if(typeof(test)==="function") rslt = test(event,view,model,state);
					if(rslt || (state && new RegExp(key).test(state))) {
						event.type==="popstate" || rslt || history.pushState({href:target.href,view:target.id},controller[key].title||state);
						if(typeof(controller[key].sideffect)==="function") controller[key].sideffect(event,view,model);
						some = true;
						return controller[key].cascade;
					}
					return true;
				}) && some) {
					event.preventDefault();
					event.stopPropagation();
				};
			}
		}
		!next || next();
	},
	onchange = event => {
		const lazy = event.target.getAttribute("lazy"),
			focused = document.activeElement
		if(["keyup","paste","cut"].includes(event.type) && (lazy==true || lazy==="") && event.target===focused && ![9,13,14].includes(event.keyCode)) return;
		const target = event.target,
			model = target.model,
			property = target.property;
		let value;
		if(model && property) {
			if(target.type==="radio") {
				if(target.checked && model[property]!=target.value) value=target.value;
			} else {
				value = (target.type==="select-multiple" ? [] : ("checkbox"===target.type  ? (target.value = target.checked) : target.value));
				if(target.type==="select-multiple") for(let i=0;target[i];i++) if(target[i].selected) value.push(target[i].value);
			}
			if(["",true,"true"].includes(target.getAttribute("data-two-way")) || fete.options.reactive) model[property] = value;
			target.normalizedValue = value;
		}
		if(focused) {
			focused.focus();
			typeof(focused.selectionStart)!=="number" || (focused.selectionStart = focused.selectionEnd = focused.value.length);
		}
		router(event);
	},
	isPropertyName = name => {
		const match = /[a-zA-Z_$][0-9a-zA-Z_$]*/.exec(name);
		return match && match[0]===name && Function("try { eval('var "+name+"'); return true; } catch(e) { return false; }")();
	};
	
document.addEventListener("change",onchange);
for(let type of ["keyup","paste","cut"]) document.addEventListener(type,onchange);

function templateAsValue() {
	let result = [];
	arguments[0][0]==="" || result.push(arguments[0][0]);
	for(let i=1;i<arguments.length;i++) {
		result.push(arguments[i]);
		arguments[0][i]==="" || result.push(arguments[0][i]);
	}
	return (result.length===1 ? result[0] : result);
}
function templateAsText() {
	let result = [arguments[0][0]];
	for(let i=1;i<arguments.length;i++) {
		result.push(arguments[i]);
		result.push(arguments[0][i]);
	}
	return result.join("");
}

function include(selector,model) {
	const view = document.createElement("include"),
		template = document.querySelector(selector);
	view.innerHTML = template.innerHTML;
	model || (model = CURRENTVIEW.model);
	view.use(model);
	return view.compile().render();
}

function element(tagName,attributes={},model) {
	const view = document.createElement(tagName);
	for(let key in attributes) view[key] = attributes[key];
	model || (model = CURRENTVIEW.model);
	view.compile();
	return function(modelOrView) {
		if(modelOrView instanceof Node) view.appendChild(modelOrview);
		else if(Array.isArray(modelOrView)) {
			modelOrView.forEach(child => {
				child instanceof Node || (child = document.createTextNode(child));
				view.appendChild(child);
			});
		} else view.innerText = modelOrView;
		view.use(model);
		return view.render();
	}
}

let CURRENTVIEW;

const IMPORTS = {
		include,
		element
	},
	RENDERERS = new Map();
	
class Fete {
	constructor(options={reactive:true}) {
		const fete = this;
		fete.options = Object.assign({},options);
		fete.customElements = [];
		
		Object.defineProperty(Node.prototype,"model",{configurable:true,get: function() {
				const model = this.__model__;
				if(!model && this.parentNode) return this.parentNode.model;
				if(!model && this.ownerElement) return this.ownerElement.model;
				return model;
			},
			set: function(model) {
				this.__model__ = model;
				return true;
			}
		});
	
		Node.prototype.use = function(object,controller) {
			const model = activate(object);
			this.model = model;
			!controller || (this.controller = controller);
			return model;
		}
		Node.prototype.render = function(imports) {
			const renderer = RENDERERS.get(this.id);
			if(renderer) return renderer.call(this,imports);
			return this;
		}
	
		Attr.prototype.compile = function() {
			const me = this,
				value = me.value,
				start = value.indexOf("${");
			let property;
			if(start===0) {
				const end = value.lastIndexOf("}");
				if(end>=3) {
					const name = value.substring(2,end);
					if(isPropertyName(name)) property = name;
				}
			}
			if(start>=0) {
				const interpolate = Function("return " + parser.replace("_src_","`"+value.trim()+"`"))(),
					owner = me.ownerElement,
					render = function(imports) {
						const current = CURRENTVIEW; 
						const owner = CURRENTVIEW = this.ownerElement,
							result = interpolate(templateAsValue,(imports ? Object.assign(imports,IMPORTS) : IMPORTS),this.model);
						if(property) owner.property = property;
						if(this.name==="bind") owner.use(result);
						else if(this.name==="checked" && owner.type==="radio") {
							 if(owner.value==result) owner.checked || (owner.checked=true); 
						} else if(owner.type==="checkbox" && this.name==="value")  {
							if(owner.value!=result) {
								owner.value = result;
								owner.checked = toBoolean(result);
							}
						} else if(owner.type && owner.type.indexOf("select")===0 && this.name==="value") {
							const values = (Array.isArray(result) ? result : [result]);
							for(let i=0;values.length>0 && owner[i];i++) {
								if(values.includes(owner[i].value)) owner[i].selected || (owner[i].selected = true);
								else owner[i].selected = false;
							}
						} else {
							owner[this.name]==result || (owner[this.name] = result);
							if(!["if","foreach"].includes(this.name)) this.value=result;
						}
						CURRENTVIEW = current;
						return this;
					};
				me.id || (me.id = genId());
				RENDERERS.set(me.id,render);
				owner.interpolated || (owner.interpolated = {});
				owner.interpolated[this.name] || (owner.interpolated[me.name] = {});
				owner.interpolated[this.name].attribute = this;
				if(["if","foreach"].includes(this.name)) {
					const children = owner.interpolated[me.name].children = [];
					for(let i=0;i<owner.childNodes.length;i++) {
						const child = owner.childNodes[i];
						children.push(child.compile());
					}
				}
			}
			return me;
		}
		Text.prototype.compile = function() {
			const me = this,
				value = me.textContent,
				start = value.indexOf("${");
			let property;
			if(start===0) {
				const end = value.lastIndexOf("}");
				if(end>=3) {
					const name = value.substring(2,end);
					if(isPropertyName(name)) property = name;
				}
			}
			if(start>=0) {
				const replacement = document.createElement("interpolation"),
					interpolate = Function("return " + parser.replace("_src_","`"+value.trim()+"`"))();
				const render = function(imports) {
						const current = CURRENTVIEW,
							model = this.model;
						!property || (this.property = property);
						CURRENTVIEW = this;
						if(property) {
							if(property==="model") this.innerHTML = model;
							else replacement.innerHTML = model[property];
						} else {
							replacement.innerHTML = "";
							const result = interpolate(templateAsValue,(imports ? Object.assign({},IMPORTS,imports) : IMPORTS),model);
							if(result instanceof Node) replacement.appendChild(result);
							else if(Array.isArray(result)) {
								for(let i=0;i<result.length;i++) {
									const value = result[i];
									if(value instanceof Node) replacement.appendChild(value);
									else replacement.appendChild(document.createTextNode(value));
								}
							} else replacement.innerHTML = result;
						}
						CURRENTVIEW = current;
						return replacement;
					};
				replacement.render = render;
				me.parentElement.replaceChild(replacement,me);
				return replacement;
			}
			return me;
		}
		HTMLElement.prototype.compile = function(twoway) {
			let me = this,
				tagname = me.tagName.toLowerCase();
			const custom = fete.customElements[tagname];
			if(custom && custom.options) {
				 !custom.options.transform || (me = custom.options.transform(me));
				 !custom.options.classNames || custom.options.classNames.forEach(className => { if(!me.classNames) { me.class=className } else { me.classNames.add(className) }});
				 !custom.options.controller || (me.controller = custom.options.controller);
			}
			if(me!==this) this.parentElement.replaceChild(me.compile(twoway),this);
			if(me.outerHTML.indexOf("${")>=0) {
				for(let i=0;i<me.attributes.length;i++) {
					const attribute = me.attributes[i];
					attribute.compile();
				}
				for(let i=0;i<me.childNodes.length;i++) {
					const child = me.childNodes[i];
					if(child instanceof Text) {
						const txt = child.textContent;
						if(txt.length===0) {
							me.removeChild(child);
							i--;
							continue;
						}
						if(txt.trim().length===0) {
							me.replaceChild(document.createTextNode(" "),child);
							continue;
						}
					} else if(child instanceof HTMLInputElement && twoway) child.setAttribute("data-two-way",true);
					child.compile(twoway);
				}
			}
			return me;
		}
		HTMLElement.prototype.render = function(imports) {
			const me = this,
				current = CURRENTVIEW; 
			CURRENTVIEW = me;
			const model = me.model;
			for(let i=0;i<me.attributes.length;i++) me.attributes[i].render(imports);
			// initialize model, perhaps do everything here and just have onchange drive a render update??
			if(model && me.property && (["",true,"true"].includes(me.getAttribute("data-two-way")) || fete.options.reactive)) {
				let value = model[me.property],
					type = (value==="" ? "undefined" : typeof(value));
				if(type==="undefined") {
					if(me.type==="radio" || me.type==="checkbox") {
						model[me.property] = toBoolean(me.value);
					} else if(me.type==="select-one") {
						model[me.property] = me.value;
					} else if(me.type==="select-multiple") {
						model[me.property]=[];
					}
					// since the property may have been undefined, activate it (no-op if already activated)
					activateProperty(model,me.property);
				}
			}
			if(me.interpolated) {
				const attributes = me.interpolated;
				if(attributes.if) {
					if(!me.if) {
						me.innerHTML = "";
						CURRENTVIEW = current;
						return me;
					}
					if(!attributes.foreach) {
						const iff = attributes.if,
							children = iff.children;
						me.innerHTML = "";
						for(let j=0;j<children.length;j++) {
							const child = children[j];
							child.use(value);
							me.appendChild(child.render({this:target,key:i}).cloneNode(true))
						}
						CURRENTVIEW = current;
						return me;
					}
				}
				if(me.foreach) {
					const foreach = attributes.foreach,
						children = foreach.children;
					let target = me.foreach;
					me.innerHTML = "";
					if(!Array.isArray(target)) {
						const object = target;
						target = [];
						for(let key in object) target.push(object[key]);
					}
					for(let i=0;i<target.length;i++) {
						const value = target[i];
						for(let j=0;j<children.length;j++) {
							const child = children[j];
							child.use(value);
							me.appendChild(child.render({this:target,key:i}).cloneNode(true))
						}
					}
					CURRENTVIEW = current;
					return me;
				}
			} 
			const children = [];
			for(let i=0;i<me.children.length;i++) children.push(me.children[i]);
			for(let i=0;i<children.length;i++) children[i].render(imports);
			CURRENTVIEW = current;
			return me;
		}
	}
	activate(object) {
		return activate(object);
	}
	createComponent(name,html,controller,options={reactive:true}) {
		const fete = this,
			componentTemplate = `class _nm_ extends e {
				constructor(m) { const args = [].slice.call(arguments,1); super(...arguments); this.model = m; this.html = h; this.controller = ctrlr; }
				render(v,m,c) {	o = Object.assign({},o); o.html = this.html; return f.mvc(m||this.model,v,c||this.controller,o); }
			}`;
		let extend = options.extends || options.extend;
		typeof(extend)==="function" || (extend = function() { Object.assign(this,extend||{}); });
		return new Function("f","e","h","ctrlr","o","return " + componentTemplate.replace("_nm_",name))(fete,extend,html,controller,options);
	}
	define(name,options={reactive:true}) {
		this.customElements[name] = {
			options: Object.assign({},options)
		}
	}
	interpolate(string,scope) {
		const interpolator = Function("return " + parser.replace("_src_","`"+string+"`"))();
		!(scope instanceof HTMLElement) || (scope = HTMLElementToJSON(scope));
		return interpolator(templateAsText,{},scope);
	}
	mvc(model,view,controller,options={reactive:true}) {
		view instanceof HTMLElement || (view=document.querySelector(view));
		if(!view) { throw new Error("Fete.mvc: 'view' undefined"); }
		let innerHTML,
			template = options.template;
		if(template) {
			template instanceof HTMLElement || (template=document.querySelector(template));
			if(!template) { throw new Error("Fete.mvc: 'options.template' not found " + options.template); }
			if(options.transform) view.appendChild(options.transform(template.innerHTML));
			else innerHTML = (options.transform ? options.transform(template.innerHTML) : template.innerHTML);
		} else if(options.html) innerHTML =  (options.transform ? options.transform(options.html) : options.html);
		if(innerHTML) {
			view.innerHTML = innerHTML;
			if(options.html) {
				let viewsource = restoreEntities(view.innerHTML),
				templatesource = restoreEntities(options.html);
				if(!options.transform && viewsource !== templatesource) console.log("Warning: Template and view HTML mismatch. May contain invalid HTML or fragment outside a div. Rendering may be incorrect.");
			}
		}
	  	model = view.compile(options.reactive).use(model,controller);
	  	if(options.initialize) options.initialize(view);
	  	view.render().onclick = this.route;
	  	return model;
	}
	route(event) {
		return router(event);
	}
}

if(typeof(exports)==="object") module.exports = Fete;
else if(typeof(window)==="object") window.Fete = Fete;
else this.Fete = Fete;

}).call(this);