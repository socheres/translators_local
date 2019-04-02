{
	"translatorID": "938ccabb-e297-4092-aa15-22b6511bbd0f",
	"label": "Dialnet",
	"creator": "Philipp Zumstein",
	"target": "^https?://dialnet\\.unirioja\\.es/",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsibv",
	"lastUpdated": "2018-03-28 21:36:40"
}

/*
	***** BEGIN LICENSE BLOCK *****

	Copyright © 2016 Philipp Zumstein

	This file is part of Zotero.

	Zotero is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	Zotero is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with Zotero. If not, see <http://www.gnu.org/licenses/>.

	***** END LICENSE BLOCK *****
*/


function detectWeb(doc, url) {
	if (url.indexOf('/servlet/articulo')>-1) {
		return "journalArticle";
	} else if (url.indexOf('/servlet/libro')>-1) {
		return "book";
	} else if (url.indexOf('/servlet/tesis')>-1) {
		return "thesis";
	} else if (getSearchResults(doc, true)) {
		return "multiple";
	}
}

function getSearchResults(doc, checkOnly) {
	var items = {};
	var found = false;
	var rows = ZU.xpath(doc, '//p/span[@class="titulo"]/a');
	for (var i=0; i<rows.length; i++) {
		var href = rows[i].href;
		var title = ZU.trimInternal(rows[i].textContent);
		if (!href || !title) continue;
		if (checkOnly) return true;
		found = true;
		items[href] = title;
	}
	return found ? items : false;
}


function doWeb(doc, url) {
	if (detectWeb(doc, url) == "multiple") {
		Zotero.selectItems(getSearchResults(doc, false), function (items) {
			if (!items) {
				return true;
			}
			var articles = [];
			for (var i in items) {
				articles.push(i);
			}
			ZU.processDocuments(articles, scrape);
		});
	} else {
		scrape(doc, url);
	}
}

function scrape(doc, url) {
	var translator = Zotero.loadTranslator('web');
	// Embedded Metadata
	translator.setTranslator('951c027d-74ac-47d4-a107-9c3069ab7b48');
	translator.setHandler('itemDone', function (obj, item) {
		item.url = url;
		// Delete generic abstract as "Información del artículo <title>"
		if (item.abstractNote && item.abstractNote.includes(item.title) && item.abstractNote.length<item.title.length+30) {
			delete item.abstractNote;
		}
		// in case of double issue e.g. "3-4" wrong issue number in Embedded Metadata e,g. "3"
		// clean issue number in case of multiple download
		var issue = ZU.xpathText(doc, '//*[@id="informacion"]//a[contains(text(), "Nº.")]');
		if (issue) {
			// e.g. Vol. 89, Nº. 3-4, 2012
			item.issue = issue.split('Nº.')[1].split(',')[0];
		}

		// restrict issues to just numbers
		if (item.issue) {
			var matchedIssue = item.issue.trim().match(/^([0-9]+).*/);
			if (matchedIssue)
				item.issue = matchedIssue[1];
		}

		// clear language if multiple
		if (item.language && item.language === "mul")
			item.language = "";

 		// Delete generic keywords
 		if (item.tags);
			 delete item.tags;

		// sometimes, the embedded metadata inverts the volume and issue information
		// we need to check the DOM to see if there's information to the contrary and revert if necessary
		var domVolume = ZU.xpathText(doc, '//*[@id="informacion"]//a[contains(@href, "ejemplar")]');
		if (domVolume) {
			var match = domVolume.match(/^Vol\.? (\d+)/i)
			if (match) {
				domVolume = match[1];
				if (domVolume != item.volume && domVolume == item.issue) {
					var temp = item.volume;
					item.volume = item.issue;
					item.issue = temp;
				}
			}
		}

		// get alternate titles and abstracts
		var alternateTitle = ZU.xpathText(doc, '//strong[@class="concepto" and text()="Títulos paralelos:"]/../ul/li');
		if (alternateTitle)
			item.shortTitle = alternateTitle;

		var abstracts = ZU.xpath(doc, '//ul[@id="resumen"]//li//p');
		if (abstracts && abstracts.length > 0) {
			var combinedAbstract = "";
			for (var i in abstracts)
				combinedAbstract += abstracts[i].textContent + "\n\n";
			item.abstractNote = combinedAbstract.trim();
		}

		item.complete();
	});
	translator.getTranslatorObject(function(trans) {
		// Remove Facebook's OpenGraph meta tags from the document before sending it to the Embedded Metadata handler
		// Those break the aforementioned translator for some reason
		var metaTags = doc.head.getElementsByTagName("meta");
		var ogTags = [];
		for (var i=0; i < metaTags.length; i++) {
			var metaTag = metaTags[i];
			var tags = metaTag.getAttribute("name");
			if (!tags) tags = metaTag.getAttribute("property");
			if(!tags) continue;

			if (tags.startsWith("og:"))
				ogTags.push(metaTag);
		}

		for (var i=0; i < ogTags.length; i++) {
			var ogTag = ogTags[i];
			ogTag.parentNode.removeChild(ogTag);
		}

		trans.doWeb(doc, url);
	});
}
/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "https://dialnet.unirioja.es/servlet/libro?codigo=293780",
		"items": [
			{
				"itemType": "book",
				"title": "Libres, buenos y justos como miembros de un mismo cuerpo: lecciones de teoría del derecho y de derecho natural",
				"creators": [
					{
						"firstName": "Julián Vara",
						"lastName": "Martín",
						"creatorType": "author"
					}
				],
				"date": "2007",
				"ISBN": "9788430945450",
				"language": "spa",
				"libraryCatalog": "dialnet.unirioja.es",
				"publisher": "Tecnos",
				"shortTitle": "Libres, buenos y justos como miembros de un mismo cuerpo",
				"url": "https://dialnet.unirioja.es/servlet/libro?codigo=293780",
				"attachments": [
					{
						"title": "Snapshot"
					}
				],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://dialnet.unirioja.es/servlet/articulo?codigo=3661304",
		"items": [
			{
				"itemType": "journalArticle",
				"title": "Juicios, discursos y acción política en grupos de jóvenes estudiantes universitarios de Bogotá",
				"creators": [
					{
						"firstName": "Martha Cecilia Lozano",
						"lastName": "Ardila",
						"creatorType": "author"
					},
					{
						"firstName": "Sara Victoria Alvarado",
						"lastName": "Salgado",
						"creatorType": "author"
					}
				],
				"date": "2011",
				"ISSN": "1692-715X",
				"abstractNote": "This article presents the outcome of research conducted between 2006 and 2009 on speeches\nand policy action in seven groups of young university students in Bogotá.\nTheoretical, epistemological and methodological research was supported by the approach of Hannah Arendt\n(2001a, 2001b), were supplemented by the insights of Kohn (2005), Brunet (2007), Sánchez (2003), Rosenthal\n(2006) and Fraser (1997, 2008).\nThe research was developed from four main categories: conceptions of political citizenship; constraints of\npolitics, democracy and citizenship; trigger political action by young people and forms of political action by\nyoung people. It concludes with the need for education for political participation and ethics in Colombia\nreconfiguration.",
				"issue": "1",
				"language": "spa",
				"libraryCatalog": "dialnet.unirioja.es",
				"pages": "101-113",
				"publicationTitle": "Revista Latinoamericana de Ciencias Sociales, Niñez y Juventud",
				"url": "https://dialnet.unirioja.es/servlet/articulo?codigo=3661304",
				"volume": "9",
				"attachments": [
					{
						"title": "Full Text PDF",
						"mimeType": "application/pdf"
					},
					{
						"title": "Snapshot"
					}
				],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "http://dialnet.unirioja.es/buscar/documentos?querysDismax.DOCUMENTAL_TODO=politica",
		"items": "multiple"
	},
	{
		"type": "web",
		"url": "https://dialnet.unirioja.es/ejemplar/381860",
		"items": "multiple"
	},
	{
		"type": "web",
		"url": "https://dialnet.unirioja.es/servlet/articulo?codigo=4251373",
		"items": [
			{
				"itemType": "journalArticle",
				"title": "Secularisation as a challenge for a contemporary order theology International Theological Symposium as part of the research project \"Transmission of Faith in social and Religious Transformation Processes\".",
				"creators": [
					{
						"firstName": "Ulrich",
						"lastName": "Engel",
						"creatorType": "author"
					}
				],
				"date": "2012",
				"ISSN": "1123-5772",
				"issue": "3-4",
				"language": "mul",
				"libraryCatalog": "dialnet.unirioja.es",
				"pages": "659-666",
				"publicationTitle": "Angelicum",
				"url": "https://dialnet.unirioja.es/servlet/articulo?codigo=4251373",
				"volume": "89",
				"attachments": [
					{
						"title": "Snapshot"
					}
				],
				"notes": [],
				"seeAlso": []
			}
		]
	}
]
/** END TEST CASES **/
