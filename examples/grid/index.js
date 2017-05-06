var Hypercalc;
if(typeof(require)==="function") Hypercalc = require("../../index.js");

const hc = new Hypercalc({oncalculated: space => {
		console.log(JSON.stringify(tab1.export()));
		console.log(JSON.stringify(tab2.export()));
		console.log(JSON.stringify(summary.export()));
	}}),
	summary = new hc.Space("Summary"),
	tab1 = new hc.Sheet("Tab1",{columns:{A:{},B:{},C:{}}}),
	tab2 = new hc.Sheet("Tab2",{columns:{A:{},B:{},C:{}}}),
	tab3 = new hc.Sheet("Tab3",{columns:{A:{},B:{},C:{}}});

summary.createCell("Total Tab 1 Row 1","=sum($('Tab1.*.1'))");
summary.createCell("Total Tab 1 Row 1 and 2","=sum($('Tab1.*.1;2'))");
summary.createCell("Total Tab 1","=sum($('Tab1.*.*'))");
summary.createCell("Total Tab 1 or Tab 2 Column A","=sum($('Tab1|Tab3.A.*'))");
summary.createCell("Total All Tabs Column A","=sum($('*.A.*'))");
summary.createCell("Total All Tabs Row 1","=sum($('*.*.1'))");
summary.createCell("Total Cube","=sum($('*.*.*'))");

tab1.import([
	[1,1,1],
	[1,1,1]
]);
tab2.import([
	[1,1,1],
	[1,1,1]
]);
tab3.import([
	[1,1,1],
	[1,1,1]
]);
