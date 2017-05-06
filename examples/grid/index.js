var Hypercalc;
if(typeof(require)==="function") Hypercalc = require("../../index.js");

const hc = new Hypercalc(),
	summary = new hc.Space("Summary"),
	tab1 = new hc.Sheet("Tab1",{columns:{A:{},B:{},C:{}}}),
	tab2 = new hc.Sheet("Tab2",{columns:{A:{},B:{},C:{}}}),
	tab3 = new hc.Sheet("Tab3",{columns:{A:{},B:{},C:{}}});

summary.createCell("Sum Tab 1 Row 1","=sum($('Tab1.*.1'))");
summary.createCell("Sum Tab 1 Row 1 and 2","=sum($('Tab1.*.1:2'))");
summary.createCell("Sum Tab 1","=sum($('Tab1.*.*'))");
summary.createCell("Sum Tab 1 or Tab 3 Column A","=sum($('Tab1|Tab3.A.*'))");
summary.createCell("Sum All Tabs Column A","=sum($('*.A.*'))");
summary.createCell("Sum All Tabs Row 1","=sum($('*.*.1'))");
summary.createCell("Sum Cube","=sum($('*.*.*'))");
summary.createCell("Dot Product","=dotProduct($('Tab2.*.1'),$('Tab3.*.1'))");

tab1.import([
	[1,1,1],
	[1,1,1]
]);
tab2.import([
	[2,2,2],
	[2,2,2]
]);
tab3.import([
	[3,3,3],
	[3,3,3]
]);
hc.oncalculated = engine => console.log(JSON.stringify(summary.export()));
