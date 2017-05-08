const hc = new Hypercalc(),
  summary = new hc.Sheet("Summary"),
  tab1 = new hc.Sheet("Tab1",{columns:{A:{},B:{},C:{}}}),
  tab2 = new hc.Sheet("Tab2",{columns:{A:{},B:{},C:{}}}),
  tab3 = new hc.Sheet("Tab3",{columns:{A:{},B:{},C:{}}});
summary.createCell("1.1","=extend(['','A',''],['','B',''],['','C',''])");
summary.createCell("1.2", "=extend(['min','avg','max'],['min','avg','max'],['min','avg','max'])");
summary.createCell("1.3","=extend($summary('*.A.*'),$summary('*.B.*'),$summary('*.C.*'))");
tab1.import([[8,4,6],[2,6,4]]);
tab2.import([[4,8,2],[6,2,2]]);
tab3.import([[8,2,8],[2,8,8]]);
hc.oncalculated = engine => {
  const rows = summary.export({rows:true}).rows;
  let html = "<table>";
  for(let row=0;row<rows.length;row++) {
    html += "<tr>";
    for(let col=0;col<rows[row].length;col++) {
        const value = rows[row][col],
              content = (row>0 && col>0 && typeof(value)==="number"
                        ? value.toPrecision(2) : value);
        html += "<td>" + content + "</td>";
    }
    html += "</tr>";
  }
  html += "</table>";
  document.getElementById("output").innerHTML = html;
}
