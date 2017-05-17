if(typeof(module)==="object") {
	Hypercalc = require("../../index.js");
}

const hc = new Hypercalc(),
	tab1 = new hc.Sheet("Tab1",{columns:{A:{type:"number"},B:{type:"number"},C:{type:"number"}}}),
	tab2 = new hc.Sheet("Tab2",{columns:{A:{type:"number"},B:{type:"number"}}}),
	tab3 = new hc.Sheet("Tab3",{columnCount:10}),
	tab4 = new hc.Sheet("Tab4"),
	tab5 = new hc.Sheet("Tab5");

tab3.createRow(null,["A","B","C"]);
tab5.import([[1,2,3],[4,5,6]]);

const row1 = tab1.createRow(1,{A:0,B:1,C:1}),
	row2 = tab1.createRow(2,{A:1,B:1,C:1}),
	row3 = tab1.createRow(3,{A:1,B:1,C:1}),
	row4 = tab1.createRow(4,{A:1,B:1,C:1}),
	row5 = tab2.createRow(1,{A:1});


hc.Cell("Tab1.A.1").value = 1;

hc.Cell("Test2","=Statistics.sum(...$('Tab1.A.*'))",{oncalculated:cell => console.log("Test2",cell.value,4)});
hc.Cell("Test3","=Statistics.sum(...$('Tab1.*.1'))",{oncalculated:cell => console.log("Test3",cell.value,3)});
hc.Cell("Test4","=Statistics.sum(...$('Tab1.*.*'))",{oncalculated:cell => console.log("Test4",cell.value,12)});
hc.Cell("Test5","=Statistics.sum(...$('Tab1.*:B.1'))",{oncalculated:cell => console.log("Test5",cell.value,2)});
hc.Cell("Test6","=Statistics.sum(...$('Tab1.A.2:3'))",{oncalculated:cell => console.log("Test6",cell.value,2)});
//hc.Cell("Test7","=Statistics.sum(...$('Tab1|Tab2.A.1'))",{oncalculated:cell => console.log("Test7",cell.value,2)});
//hc.Cell("Test8","=Statistics.sum(...$('Tab1|Tab2.*.1'))",{oncalculated:cell => console.log("Test8",cell.value,4)});
//hc.Cell("Test9","=Statistics.average(...$('Tab1.*.*'),{if:(item) => item===1})",{oncalculated:cell => console.log("Test9",cell.value,1)});
hc.Cell("Test10","=Statistics.sum(...$('Tab1.A|C.*'))",{oncalculated:cell => console.log("Test10",cell.value,8)});
//hc.Cell("Test11","=maxa(...$('Tab1|Tab2.*.*'))",{oncalculated:cell => console.log("Test11",cell.value,1)});
hc.Cell("Test12","=Math.max(0,1,2,3,4)",{oncalculated:cell => console.log("Test12",cell.value,4)});
hc.Cell("Test13","=Statistics.min(0,1,2,3,4)",{oncalculated:cell => console.log("Test13",cell.value,0)});
//hc.Cell("Test14","=maxa(0,1,true,3,4)",{oncalculated:cell => console.log("Test14",cell.value,4)});
//hc.Cell("Test15","=mina(0,1,false,3,4)",{oncalculated:cell => console.log("Test15",cell.value,0)});
//hc.Cell("Test16","=averagea(false,true,1)",{oncalculated:cell => console.log("Test16",cell.value,2/3)});
hc.Cell("Test17","=Statistics.product(1,2,3)",{oncalculated:cell => console.log("Test17",cell.value,1*2*3)});
//hc.Cell("Test18","=producta(1,2,3,true,false)",{oncalculated:cell => console.log("Test18",cell.value,0)});
//hc.Cell("Test19","=suma(1,2,3,true,false)",{oncalculated:cell => console.log("Test19",cell.value,1+2+3+1+0)});
hc.Cell("Test20","=Statistics.median(1,3,4,5,2)",{oncalculated:cell => console.log("Test20",cell.value,3)});
hc.Cell("Test21","=Statistics.median(1,3,4,2)",{oncalculated:cell => console.log("Test21",cell.value,2.5)});
hc.Cell("Test22","=Statistics.product(...$('Tab1.A.*'))",{oncalculated:cell => console.log("Test22",cell.value,1)});
hc.Cell("Test23","=Statistics.product(...$('Tab1.*.1'))",{oncalculated:cell => console.log("Test23",cell.value,1)});
hc.Cell("Test24","=Statistics.product(...$('Tab1.*.*'))",{oncalculated:cell => console.log("Test24",cell.value,1)});
hc.Cell("Test25","=Statistics.product(...$('Tab1.*:B.1'))",{oncalculated:cell => console.log("Test25",cell.value,1)});
hc.Cell("Test26","=Statistics.product(...$('Tab1.A.2:3'))",{oncalculated:cell => console.log("Test26",cell.value,1)});
hc.Cell("Test27","=Statistics.product(...$('*.A.1'))",{oncalculated:cell => console.log("Test27",cell.value,1)});
//hc.Cell("Test28","=Statistics.product(...$('Tab1|Tab2.*.1'))",{oncalculated:cell => console.log("Test28",cell.value,1)});
hc.Cell("Test29","=Statistics.count(varg($('*.*')))",{oncalculated:cell => console.log("Test29",cell.value,100)});
//hc.Cell("Test30","=maxa(4,...$('Tab1|Tab2.*.*'))",{oncalculated:cell => console.log("Test30",cell.value,4)});
hc.Cell("Test31","=Math.max(0,1,2,3,4)",{oncalculated:cell => console.log("Test31",cell.value,4)});
hc.Cell("Test32","=Statistics.product([[9, 5], [6, 1]], [[3, 2], [5, 2]])",{oncalculated:cell => console.log("Test32",JSON.stringify(cell.value))});
//hc.Cell("Test33","=Vector.dotProduct([[9, 5], [6, 1]], [[3, 2], [5, 2]])",{oncalculated:cell => console.log("Test33",JSON.stringify(cell.value))});
//hc.Cell("Test34","=Statistics.quotient([[9, 5], [6, 1]], [[3, 2], [5, 2]])",{oncalculated:cell => console.log("Test34",JSON.stringify(cell.value))});
hc.Cell("Test35","=Statistics.product([[9, 5], [6, 1]], [[3, 2], [5, 2]])",{oncalculated:cell => console.log("Test35",JSON.stringify(cell.value))});
//hc.Cell("Test36","=$a('Tab1|Tab2.*.1')",{oncalculated:cell => console.log("Test36",JSON.stringify(cell.value))});
hc.Cell("Test37","=Statistics.product($a('Tab1|Tab2.*.1'),$a('Tab1|Tab2.*.1'))",{oncalculated:cell => console.log("Test37",JSON.stringify(cell.value))});
//hc.Cell("Test38","=Vector.dotProduct($a('Tab1|Tab2.*.1'),$a('Tab1|Tab2.*.1'))",{oncalculated:cell => console.log("Test38",JSON.stringify(cell.value))});
hc.Cell("Tab4.1.1","=extend([[9, 5], [6, 1],[3, 2], [5, 2]])",{oncalculated:cell => console.log("Tab4.1.1",JSON.stringify(cell.value))}); // options: {transpose:true}
//hc.Cell("Test39","=Vector.intersection([1,2,3],[2,3,4])",{oncalculated:cell => console.log("Test39",JSON.stringify(cell.value))}); 
hc.Cell("Test40","=Math.cos(1)",{oncalculated:cell => console.log("Test40",JSON.stringify(cell.value),Math.cos(1))});
hc.Cell("Test44","=Statistics.product([1,2,3],2)",{oncalculated:cell => console.log("Test44",JSON.stringify(cell.value),[2,4,6])});
hc.Cell("Test45","=Statistics.product([1,2,3],[1,2,3])",{oncalculated:cell => console.log("Test45",JSON.stringify(cell.value),[1,4,9])});
hc.Cell("Test46","=Statistics.product([1,2,3],[1,2,3],2)",{oncalculated:cell => console.log("Test46",JSON.stringify(cell.value),[2,8,18])});
hc.Cell("Test47","=Statistics.product([[2, 0], [-1, 3]],[[7, 1], [-2, 3]])",{oncalculated:cell => console.log("Test47",JSON.stringify(cell.value),[[14, 2], [-13, 8]])});
//hc.Cell("Test48","=gridMultiply([[2, 0], [-1, 3]],[[7, 1], [-2, 3]])",{oncalculated:cell => console.log("Test48",JSON.stringify(cell.value),[[14, 0], [2, 9]])});
hc.Cell("Test49","=Statistics.sum([1,2,3],1)",{oncalculated:cell => console.log("Test49",JSON.stringify(cell.value),[2,3,4])});
hc.Cell("Test50","=Statistics.sum([1,2,3],[1,2,3])",{oncalculated:cell => console.log("Test50",JSON.stringify(cell.value),[2,4,6])});
hc.Cell("Test51","=Statistics.sum([1,2,3],[1,2,3],1)",{oncalculated:cell => console.log("Test51",JSON.stringify(cell.value),[3,5,7])});
hc.Cell("Test52","=Statistics.average([1,2,3,4,5,6])",{oncalculated:cell => console.log("Test52",JSON.stringify(cell.value),3.5)});
hc.Cell("Test53","=Statistics.sum([1,2,3,4,5,6])",{oncalculated:cell => console.log("Test53",JSON.stringify(cell.value),21)});



//--stack_size

const total = hc.Cell("Total","=sum($('0:999.0:999'))"), //Statistics.
	time = {
		now: hc.Cell("Now","=interval(1000,() => new Date(Date.now()).toLocaleTimeString())")
	};
if(typeof(fete)!=="undefined") {
	fete.mvc(total,"#total",null);
	fete.mvc(time,"#time",null);
}
console.time("build");
const dim = 100;
for(let col=0;col<dim;col++) {
	for(let row=0;row<dim;row++) {
		hc.Cell([col,row].join("."),1);
	}
}
console.timeEnd("build");
console.time("calc");
setTimeout(() => { 
	console.timeEnd("calc"); 
	console.log(hc.Cell("Total").value);
});

const space = new hc.Space("TimeAndSpace",{sparse:true,dimensions:{time:{type:"number"},x:{type:"number"},y:{type:"number"},z:{type:"number"}}});
space.createVector({time:Date.now(),x:1,y:1,z:1},{planeid:1});
space.createVector({time:Date.now(),x:2,y:2,z:2},{planeid:2});
