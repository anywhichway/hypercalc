(function() {
	module.exports = traverse = (array,callback) => {
		for(let i=0;i<array.length;i++) {
			const item = array[i];
			if(Array.isArray(item)) traverse(item,callback);
			else callback(item,i,array);
		}
	}
}).call(this);