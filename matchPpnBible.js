{
	"translatorID": "2edf7a1b-eded-48d7-ae11-7126fd1c1b07dfsdf12aa",
	"label": "matchPpnBiblekim",
	"creator": "",
	"target": "txt",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 2,
	"browserSupport": "gcs",
	"lastUpdated": "2017-06-29 09:01:00"
}
// Da alles asynchron ablaufen kann:
//Jede Lookup einer AutorIn zählt 1 zu count
//und nach Erledigung wieder 1 weg. Der
//Startwert ist 1 und nach Erledigung aller
//anderen Zeilen wird 1 subtrahiert. Erst
//bei 0 wird die Ausgabe aus outputText erzeugt.
var count = 1;
var outputText = "";

function doExport() {
	var item;
	
	while (item = Zotero.nextItem()) { 
	/*if (item.ISSN){
		writeLine("", insertText);
	}*/
	var i = 0, title;
	
	
	while (item.Title.length>0) {
			title = item.Title.shift();
					if (i === 0){
					// bei 3010-Export ohne writeLine("\", \"3000 ", content+ "\", false, false);");
					writeLine("\", \"4000 ", title+ "\\n");
					
				} 	
				i++;
			}
		outputText;
	}
	count--;
	if (count === 0) {
		Zotero.write(outputText);
	}
// Da alles asynchron ablaufen kann:
//Jede Lookup einer AutorIn zählt 1 zu count
//und nach Erledigung wieder 1 weg. Der
//Startwert ist 1 und nach Erledigung aller
//anderen Zeilen wird 1 subtrahiert. Erst
//bei 0 wird die Ausgabe aus outputText erzeugt.

function writeLine(code, line) {
	ppn = "application.activeWindow.command(\"f ppn " + item.language+ "\", false);\n";
	a = item.Title;
	// hier auch zuerst 3000 und dann 3010
	outputText += ppn + "application.activeWindow.command(\"k\", false);\napplication.activeWindow.title.replaceAll (\"3000 " + a + code + line + "\", false, false);\napplication.activeWindow.pressButton(\"Enter\");\n\n";
	// 
	
	//Lookup für Autoren
	//hier einzeln exportieren. nur code == "\", \"3000" und dann code == "\", \"3010"
	if ((code == "\", \"4000 ") && line[0] != "!") {
		count++;
		var title = line.substring(0,line.indexOf("\\n"));
		/*
		var lookupUrl = "http://swb.bsz-bw.de/DB=2.104/SET=70/TTL=1/CMD?SGE=&ACT=SRCHM&MATCFILTER=Y&MATCSET=Y&NOSCAN=Y&PARSE_MNEMONICS=N&PARSE_OPWORDS=N&PARSE_OLDSETS=N&IMPLAND=Y&NOABS=Y&ACT0=SRCHA&SHRTST=50&IKT0=1&TRM0=" + authorName +"&ACT1=*&IKT1=2057&TRM1=*&ACT2=*&IKT2=8977&TRM2=(theolog*|neutestament*|alttestament*|judais*|archäol*|kirchenhist*)&ACT3=-&IKT3=8978-&TRM3=1[1%2C2%2C3%2C4%2C5%2C6%2C7%2C8][0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9][0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9]?"
		*/
		var lookupUrl = "http://swb.bsz-bw.de/DB=2.104/SET=70/TTL=1/CMD?SGE=&ACT=SRCHM&MATCFILTER=Y&MATCSET=Y&NOSCAN=Y&PARSE_MNEMONICS=N&PARSE_OPWORDS=N&PARSE_OLDSETS=N&IMPLAND=Y&NOABS=Y&ACT0=SRCHA&SHRTST=50&IKT0=2072&TRM0=" + authorName"
		ZU.processDocuments([lookupUrl], function(doc, url){
			var ppn = ZU.xpathText(doc, '//small[a[img]]');
			if (ppn) {
				outputText = outputText.replace(line, "!" + ppn.trim() + "! \\n8910 $aixzom$bAutor maschinell zugeordnet\\n").replace(", undefined", "");
				} 
		}, function() {
			count--;
			if (count === 0) {
				Zotero.write(outputText);
				}
			});
		}
	}	
}
