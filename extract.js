var colCount = document.getElementById('thead').childElementCount
var rowCount = document.getElementById('tbody').childElementCount
var colNames =[]
for (i=0;i<colCount;i++){
	colNames.push(document.getElementById('thead').children[i].innerHTML)
}

forJson = []
for (i=0;i<rowCount;i++){
	row={}
	for (j=0;j<colCount;j++){
		row[colNames[j]] = document.getElementById('tbody').children[i].children[j].innerHTML
		// .push(document.getElementById('tbody').children[i].children[j].innerHTML)
	}
	forJson.push(row)
	// forjsn['colNames'] = colNames
}
function getJson() {
	var filename = window.location.pathname.split('/')
	filename = filename[filename.length-1].replace('html','json')
    var blob = new Blob([JSON.stringify(forJson,false,2)],
        { type: "application/json;charset=utf-8" });
    saveAs(blob, filename);
}