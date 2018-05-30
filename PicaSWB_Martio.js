{
	"translatorID": "2edf7a1b-eded-48d7-ae11-7126fd1c1b07mt",
	"label": "PicaSWBMario",
	"creator": "Philipp Zumstein, Timotheus Kim, Mario Trojan",
	"target": "txt",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 2,
	"browserSupport": "gcs",
	"lastUpdated": "2017-10-26 09:01:00"
}


// Zotero Export Translator für das Pica Intern Format
// (wie es im SWB Verbund benutzt wird)

/*
    ***** BEGIN LICENSE BLOCK *****
    Copyright � 2016 Philipp Zumstein
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

var journalMapping = {
	"0021-9231" : "!121739872!", // Journal of Biblical Literature 
	"0021-9231" : "!121739872!", // Journal of Biblical Literature 
	"00219231" : "!121739872!", // Journal of Biblical Literature 
	"1934-3876" : "!121739872!", // Journal of Biblical Literature //ESSN +EPPN
	"0591-2385" : "!090854799!", // Zygon
	"1467-9744" : "!090854799!", // Zygon
    "0891-5881" : "!023125381!", // Dialogue and alliance
	"0884-5379" : "!341092975!", // fides et historia
	"08845379" : "!341092975!", // fides et historia
	"1474-6700" : "!261325019!", // Theology and science  
	"1462-2459" : "!260351768!", // Reformation & Renaissance review  
	"0037-7686" : "!079599338!", // Social compass 
	"1461-7404" : "!079599338!", // Social compass 
	"1745-5294" : "!099025957!", // Journal for the study of the New Testament  !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0142-064X" : "!099025957!", // Journal for the study of the New Testament  !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0142064X" : "!099025957!", // Journal for the study of the New Testament
	"1476-6728" : "!10337356X!", // Journal for the study of the Old Testament !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0309-0892" : "!10337356X!", // Journal for the study of the Old Testament !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"03090892" : "!10337356X!", // Journal for the study of the Old Testament
	"0771-7776" : "!25429961X!", // Sacris erudiri  
	"2284-7308" : "!281073546!", // Perichoresis  
	"1745-5189" : "!254072119!", // Feminist theology 
	"0966-7350" : "!254072119!", // Feminist theology
	"09667350" : "!254072119!", // Feminist theology
	"1745-5286" : "!119460610!", // Journal for the study of the pseudepigrapha 
	"0951-8207" : "!119460610!", // Journal for the study of the pseudepigrapha  
	"09518207" : "!119460610!", // Journal for the study of the pseudepigrapha 
	"1357-4175" : "!061284815!", // Reformation  
	"1752-0738" : "!061284815!", // Reformation  
	"1462-317X" : "!25998390X!", // Political theology   
	"1743-1719" : "!25998390X!", // Political theology   
	"0360-6503" : "!378913735!", // Process studies  
	"03606503" : "!378913735!", // Process studies  
	"0733-4273" : "!015054578!", // Journal of psychology and Christianity
	"07334273" : "!015054578!", // Journal of psychology and Christianity
	"0929-0761" : "!041601858!", // Dead Sea discoveries   
	"1568-5179" : "!041601858!", // Dead Sea discoveries  
	"0022-2097" : "!014412152!", // The journal of Jewish studies
	"0018-2613" : "!014473801!", // Historische Zeitschrift 
	"1871-241X" : "!25902970X!", // Church history and religious culture   
	"1871-2428" : "!25902970X!", // Church history and religious culture  
	"0946-3518" : "!038886944!", // Praktische Theologie
	"0938-5320" : "!038886944!", // Praktische Theologie
	"2198-0462" : "!038886944!", // Praktische Theologie                                       
	"0043-2040" : "!014841762!", // Wege zum Menschen
	"0021-1400" : "!265831903!", // Irish theological quaterly
	"0023-0707" : "!276818741!", // Kerygma und Dogma
	"1138-4972" : "!281290717!", // 'Ílu
	"1135-4712" : "!281290717!", // 'Ílu
	"1139-1529" : "!281290717!", // 'Ílu
	"0953-9468" : "!11946067X!", // Studies in Christian ethics
	"1745-5235" : "!11946067X!", // Studies in Christian ethics
	"09539468" : "!11946067X!", // Studies in Christian ethics
	"0888-3769" : "!015891976!", // Religion and literature
	"0029-4500" : "!015891976!", // Religion and literature
	"0040-5639" : "!266225179!", // Theological studies
	"2169-1304" : "!266225179!", // Theological studies
	"0943-7592" : "!040100804!", // Journal for the History of Modern Theology über Degruyter = 4213 Hauptsacht. bis 14.2007: Zeitschrift für neuere //Theologiegeschichte; @Grotz: als „…$h1-2“ (statt mit Querstrich: „…$h1/2“) 
	"1612-9776" : "!040100804!", // Journal for the History of Modern Theology // Zeitschrift für Neuere Theologiegeschichte
	"1743-1301" : "!014896486!", // Palestine exploration quarterly
    "0031-0328" : "!014896486!", // Palestine exploration quarterly 
	"1745-5316" : "!119461234!", // Ecclesiology !!hier kein direkter Downlaod, sondern über Zotero-button
	"0034-6373" : "!401709590!", // Review & Expositor
	"0034-4125" : "!079718671!", // Religious studies 
	"1469-901X" : "!079718671!", // Religious studies
	"0034-4125, 1469-901X" : "!079718671!", // Religious studies 
	"0091-6471" : "!015193306!", // Journal of psychology and theology
	"1476-8690" : "!106846396!", // Journal for the study of the historical Jesus
	"2222-582X" : "!478691874!", // Journal of early Christian history
	"0018-2710" : "!105214884!", // History of religions
	"1545-6935" : "!105214884!", // History of religions
	"0384-9694" : "!014804743!", // Journal of religious ethics
	"1467-9795" : "!014804743!", // Journal of religious ethics 
	"0943-3058" : "!026374846!", // Method & theory in the study of religion
	"1570-0682" : "!026374846!", // Method & theory in the study of religion
	"1783-1474" : "!054531918!", // INTAMS review
	"0022-4200" : "!015180131!", // Journal of religion in Africa
	"1570-0666" : "!015180131!", // Journal of religion in Africa
	"1092-6690" : "!113563531!", // Nova religio
	"1541-8480" : "!113563531!", // Nova religio
	"1079-9265" : "!056622538!", // Religion and the arts
	"1568-5292" : "!056622538!", // Religion and the arts
	"0008-4298" : "!318518368!", // Studies in religion = Sciences religieuses
	"2042-0587" : "!318518368!", // Studies in religion = Sciences religieuses
	"1380-7854" : "!048518425!", // Medieval encounters
	"1570-0674" : "!048518425!", // Medieval encounters
	"0319-485X" : "!256620695!", // Religious studies review
	"1748-0922" : "!256620695!", // Religious studies review
	"0497-1817" : "!014862522!", // Temenos
	"2342-7256" : "!014862522!", // Temenos
    "1030-570X" : "!32599787X!", // Pacifica
    "1839-2598" : "!32599787X!", // Pacifica
	"0890-1112" : "!023118172!", // Journal of ritual studies	
	"0091-8296" : "!319103501!", // Missiology
	"2051-3623" : "!319103501!", // Missiology
	"0011-1953" : "!273873555!", // Cross currents
	"1939-3881" : "!273873555!", // Cross currents
	"00111953" : "!273873555!", // Cross currents
	"19393881" : "!273873555!", // Cross currents
	"0020-9643" : "!344661555!", // Interpretation: A Journal of Bible and Theology
	"2159-340X" : "!344661555!", // Interpretation: A Journal of Bible and Theology
	"0067-6535" : "!015191826!", // Biblical research
	"0588-3237" : "!015194884!", // Colloquium
	"0003-2980" : "!015189996!", // Andrews University Seminary studies
	"0118-8534" : "!273874004!", // Asian journal of pentecostal studies
	"1477-8351" : "!103869212!", // Aramaic studies
	"1745-5227" : "!103869212!", // Aramaic studies
	"1462-3153" : "!078316677!", // Journal for the Aramaic bible
	"0229-2807" : "!059754931!", // ARC
	"0094-5323" : "!47811849X!", // Augustinian studies
	"00945323" : "!47811849X!", // Augustinian studies
	"00143367" : "!015178811!", // Evangelical quarterly
	"1474-225X" : "!255884532!", // International journal for the study of the Christian church
	"1747-0234" : "!255884532!", // International journal for the study of the Christian church
	"1547-9080" : "!477959180!", // Newman studies journal
	"0144-8153" : "!015230376!", // Evangelical review of theology
	"0360-8808" : "!345580796!", // Journal of the Evangelical Theological Society
	"0092-6558" : "!015194132!", // Journal of the Interdenominational Theological Center
	"1934-9637" : "!278763464!", // Journal of spirituality in mental health
	"1934-9645" : "!278763464!", // Journal of spirituality in mental health
    "1570-0739" : "!014821419!", // Zeitschrift für Religions- und Geistesgeschichte
	"0275-5270" : "!015243044!", // Word and World
	"0034-3072" : "!42401243X!", // Reformed theological review  
	"0025-9373" : "!015181278!", // The Mennonite quarterly review  
	"00259373" : "!015181278!", // The Mennonite quarterly review 
	"1023-0807" : "!043088619!", // Religion and theology  
	"1574-3012" : "!043088619!", // Religion and theology  
	"0036-3227" : "!494225416!", // St. Vladimir's theological quarterly   
	"0092-4245" : "!015192091!", // Wesleyan theological journal
	"0006-2014" : "!014828995!", // Biblische Zeitschrift
	"1469-8145" : "!079165583!", // New Testament Studies
	"0028-6885, 1469-8145" : "!079165583!", // New Testament studies
	"0048-1009" : "!014862662!", // Novum Testamentum
	"0040-571X" : "!336956738!", // Theology
	"2044-2696" : "!336956738!", // Theology
	"0040-5736" : "!325341001!", // Theology today
	"2044-2556" : "!325341001!", // Theology today
	"2304-4896" : "!018091229!", // Zeitschrift der Savigny-Stiftung für Rechtsgeschichte / Kanonistische Abteilung
	"0323-4142" : "!018091229!", // Zeitschrift der Savigny-Stiftung für Rechtsgeschichte / Kanonistische Abteilung
	"0486-5642" : "!325341354!", // Restoration quarterly
	"0360-3032" : "!015206114!", // Trinity journal
    "0340-6083" : "!01450135X!", // Göttinger Predigtmeditationen
	"0720-6259" : "!014553880!", // Pastoraltheologie
	"0031-2827" : "!014553880!", // Pastoraltheologie
    "2197-0831" : "!014553880!", // Pastoraltheologie
	"0174-9927" : "!014553880!", // Pastoraltheologie
	"1065-6219" : "!273887521!", // Journal of research on Christian education
	"1934-4945" : "!273887521!", // Journal of research on Christian education
	"0926-6453" : "!032853262!", // Studies in spirituality
	"1783-1814" : "!032853262!", // Studies in spirituality
	"1745-5251" : "!032869959!", // Journal of pentecostal theology
	"0966-7369" : "!032869959!", // Journal of pentecostal theology
	"0043-4388" : "!015196739!", // Westminster Theological Journal
	"00434388" : "!015196739!", // Westminster Theological Journal
	"0033-5053" : "!015189589!", // Quaker history
	"1934-1504" : "!015189589!", // Quaker history
	"0809-7291" : "!477911633!", // Nordic journal of religion and society 
	"0802-0167" : "!477911633!", // Nordic journal of religion and society
	"1890-7008" : "!477911633!", // Nordic journal of religion and society 
	"1069-4404" : "!263021270!", // Sociology of religion
	"1069-4404, 1759-8818" : "!263021270!", // Sociology of religion
	"1759-8818" : "!263021270!", // Sociology of religion
	"0141-6200" : "!258360356!", // British journal of religious education
	"2169-2327, 2169-2335" : "!381266621!", // International journal of philosophy and theology
	"2169-2327" : "!381266621!", // International journal of philosophy and theology
	"0890-2461" : "!016231562!", // Philosophy & theology
	"1476-993X" : "!254675581!", // Currents in biblical research  !! Druckausgabe ausgewertet bis 14. 2015 = genauer: nur 14. 2015, 1
	"1745-5200" : "!254675581!", // Currents in biblical research 
	"1476993X" : "!254675581!", // Currents in biblical research
	"0012-5806" : "!462734986!", // The Downside review  !! Druckausgabe ausgewertet bis 133. 2015, 470
	"2052-9449" : "!401709590!", // Review & expositor   !! Druckausgabe ausgewertet bis 112. 2015, 4
	"1568-5152" : "!033052395!", // Biblical interpretation
	"1370-6020" : "!054531918!", // INTAMS review      !!  siehe weiterer Eintrag oben  -  Abspeicherung mit Zauberstaub!
	"1783-2446" : "!038505428!", // Journal of the European Society of Women in Theological Research   -   Abspeicherung mit Zauberstaub!  Aufsätze an Stücktitel!
	"1026-2946" : "!077662814!", // Africa Journal of Evangelical Theology
	"0029-5973" : "!014497301!", // Numen PISSN
	"1568-5276" : "!014497301!", // Numen EISSN
	"2033-4273" : "!379731398!", // ET-Studies Online Publikation 
	"2032-5215" : "!379731398!", // ET-Studies Online Publikation
	"1783-1431" : "!112891179!", // Ethical Perspectives
	"0266-7177" : "!096290587!", // Modern theology Print-PPN  PISSN
	"1468-0025" : "!096290587!", // Modern theology Print-PPN  EISSN
	"0009-661X" : "!015191273!", // Churchman
	"1126-6244" : "!094423636!", // Adamantius
	"1010-9919" : "!340336757!", // old testament essays
	"0935-7335" : "!018614302!", // Ethik in der Medizin 
	"1437-1618" : "!018614302!", // Ethik in der Medizin
	"1209-9392" : "!281190321!", // Women in Judaism
	"0305-7240" : "!079598684!", // Journal of moral education 
	"1465-3877" : "!079598684!", // Journal of moral education 
	"0167-4544" : "!121465284!", // Journal of business ethics 
	"1573-0697" : "!121465284!", // Journal of business ethics 
	"0269-9702" : "!078707986!", // Bioethics 
	"1467-8519" : "!078707986!", // Bioethics
	"1467-8608" : "!078708001!", // Business ethics: A European Review
	"0962-8770" : "!078708001!", // Business ethics: A European Review
	"1468-2303" : "!07870815X!", // History and theory
	"0018-2656" : "!07870815X!", // History and theory
	"1092-1311" : "!281190658!", // The journal of religion and film
	"1086-3222" : "!09444921X!", // Journal of the history of ideas
	"0022-5037" : "!09444921X!", // Journal of the history of ideas
	"1086-3184" : "!266224059!", // Journal of early Christian studies
	"1067-6341" : "!266224059!", // Journal of early Christian studies
	"1469-5103" : "!078589886!", // The historical journal
	"0018-246X" : "!078589886!", // The historical journal
	"1469-2147" : "!081985010!", // Cambridge quarterly of healthcare ethics
	"0963-1801" : "!081985010!", // Cambridge quarterly of healthcare ethics
	"1380-3603" : "!094085587!", // Christian bioethics 
	"1744-4195" : "!094085587!", // Christian bioethics 
	"0569-9789" : "!015211657!", // Analecta calasanctiana
	"0210-0460" : "!015036707!", // Anales valentinos
	"2444-684X" : "!015036707!", // Anales valentinos, Escritos del Vedat
	"0716-1662" : "!016060334!", // Anuario de historia de la Iglesia en Chile
	"0211-5255" : "!015231356!", // Archivo Dominicano
	"0211-2035" : "!015229572!", // Archivo agustiniano
	"0004-0452" : "!015149064!", // Archivo ibero-americano
	"0004-4970" : "!015190226!", // Asprenas
	"1594-3445" : "!026329999!", // Barnabiti studi
	"0006-0585" : "!015188272!", // Bibbia e oriente
	"0521-8195" : "!014959801!", // Burgense
	"0008-6673" : "!014525666!", // Carmelus
	"0094-2065" : "!015196542!", // Communio
	"0573-2018" : "!018207030!", // Compostellanum
	"0145-7233" : "!015208451!", // Concordia journal !!pppn
	"0210-3133" : "!016056574!", // Escritos del vedat
	"0425-340X" : "!015193012!", // Estudio agustiniano
	"0210-0525" : "!015186695!", // Estudios
	"0210-4393" : "!01517879X!", // Estudios franciscanos
	"0071-2086" : "!015178803!", // Études grégoriennes
	"0883-0053" : "!32534129X!", // Ex auditu
	"0019-4530" : "!015184552!", // Indian church history review
	"1071-8257" : "!065483030!", // Josephinum journal of theology
	"2244-5161" : "!01544242X!", // Landas
	"0211-4011" : "!016231635!", // Liceo franciscano
	"0024-5895" : "!015193322!", // Logos
	"0456-8494" : "!016231759!", // Lumen
	"0544-9073" : "!015178714!", // Monte Carmelo
	"0470-3790" : "!015189813!", // Naturaleza y gracia
	"1451-3455" : "!111315980!", // Philotheos
	"0193-6212" : "!015195686!", // Presbyterion
	"0043-2873" : "!015182355!", // Proceedings of the Wesley Historical Society
	"0034-7078" : "!015182835!", // Revista bíblica
	"0036-4703" : "!015213676!", // Sapientia
	"1885-0588" : "!094451443!", // Selecciones de Franciscanismo
	"0210-5225" : "!015242285!", // Sinite
	"0144-8722" : "!015194868!", // Sobornost
	"1017-0499" : "!454502966!", // Studia historiae ecclesiasticae
	"2412-4265" : "!454502966!", // Studia historiae ecclesiasticae
	"2001-5828" : "!39804984X!", // Svenskt gudstjänstliv !!eppn
	"0251-4788" : "!018289851!", // Taiwan Journal of Theology
	"0495-1549" : "!015193764!", // Teología espiritual
	"0212-1964" : "!016231767!", // Teología y catequesis
	"0040-5620" : "!015185826!", // Theological education
	"0253-3812" : "!018290027!", // Theology & life
	"0211-7096" : "!018288529!", // Urgellia
	"1344-7297" : "!034203265!", // The Japan mission journal
	"0030-5839" : "!015236277!", // The Orthodox word
	"1550-0195" : "!059006382!", // Journal of Unitarian Universalist History
	"0082-7118" : "!015195775!", // Tyndale Bulletin
	"2326-6236" : "!014891263!", // The jurist: studies in church law and ministry
	"2363-6696" : "!416961657!", // Entangled Religions
	"0044-3441" : "!14821419!", // Zeitschrift für Religions- und Geistesgeschichte
	"1862-5886" : "!281314136!", // Zeitschrift für junge Religionswissenschaft
	"1612-2941" : "!281189013!", // Marburg Journal of Religion
	"0017-2251" : "!015194361!", // Christian scholar’s review
	"00172251" : "!015194361!", // Christian scholar’s review
	"0774-5524" : "!015182746!", // Questions liturgiques
	"1861-5813" : "!281289085!", // Online - Heidelberg Journal of Religions on the Internet
	"1783-1806" : "!112891241!", // Studies in Interreligious Dialogue
	"0926-2326" : "!112891241!", // Studies in Interreligious Dialogue
	"1783-1709" : "!015182746!", // Questions Liturgiques/Studies in Liturgy
	"0035-0893" : "!014419440!", // Revue bénédictine
	"1861-5813" : "!281289085!", // Online - Heidelberg Journal of Religions on the Internet
	"1867-4240" : "!343626896!", // Transformierte Buddhismen
	"1583-0039" : "!281222681!", // Journal for the Study of Religions and Ideologies
	"0378-2506" : "!377157538!", // Byzantion
	"2294-6209" : "!377157538!", // Byzantion
	"Byzantion" : "!377157538!", // Byzantion
	"1468-2400" : "!094641951!", // International journal of systematic theology !!eppn
	"1463-1652" : "!094641951!", // International journal of systematic theology
	"14631652" : "!094641951!", // International journal of systematic theology
	"0361-0160" : "!103189548!", // The Sixteenth Century Journal
	"03610160" : "!103189548!", // The Sixteenth Century Journal
	"0014-2239" : "!424017644!", // Etudes théologiques et religieuses
	"2272-9011" : "!424017644!", // Etudes théologiques et religieuses
	"0038-8610" : "!015205207!", // Concordia Theological Quarterly
	"0047-2867" : "!015194620!", // Journal of Theology for Southern Africa
	"0342-0914" : "!014414104!", // Lutherjahrbuch
	"0194-3448" : "!318814447!", // American journal of theology and philosophy
	"01943448, 21564795" : "!318814447!", // American journal of theology and philosophy
	"2156-4795" : "!318814447!", // American journal of theology and philosophy
	"2199-4463" : "!416962777!", // Religion in the Roman Empire
	"21994463, 21994471" : "!416962777!", // Religion in the Roman Empire
	"0148-3331" : "!273874853!", // Christianity & literature !! eppn
	"2056-5666" : "!273874853!", // Christianity & literature !! pppn
	"1868-8020" : "!325341478!", // Early Christianity
	"1868-7032" : "!325341478!", // Early Christianity 
	"0040-5698" : "!279448899!", // Theologische Rundschau
	"0044-3549" : "!252209540!", // Zeitschrift für Theologie und Kirche
	"2195-9773" : "!404297986!", // Philosophy, Theology and the Sciences
	"0944-5706" : "!307015734!", // Jewish Studies Quarterly
	"2192-2276" : "!433582189!", // Hebrew Bible and Ancient Israel
	"1063-8512" : "!033050201!", // Pro ecclesia
	"1890-7008, 0809-7291" : "!477911633!", // Nordic journal of religion and society 
	"00207047" : "!103746927!", // International Journal for Philosophy of Religion
	"0020-7047" : "!103746927!", // International Journal for Philosophy of Religion
	"1572-8684" : "!103746927!", // International Journal for Philosophy of Religion
	"2396-9393" : "!266225314!", // International bulletin of mission research
	"2396-9407" : "!266225314!", // International bulletin of mission research
	"2396-9393, 2396-9407" : "!266225314!", // International bulletin of mission research
	"0265-3788" : "!273886452!", // Transformation
	"0014-5246" : "!119460661!", // The Expository times
	"1745-5308" : "!119460661!", // The Expository times
	"0014-5246, 1745-5308" : "!119460661!", // The Expository times
	"00145246" : "!119460661!", // The Expository times
	"0003-1224" : "!094425426!", // American sociological review|krimdok
	"1862-2593" : "!26681946X!", // Berliner Journal für Soziologie|krimdok
	"0268-5809" : "!078709199!", // International sociology|krimdok
	"2196-8225" : "!276818768!", // Praxis der Kinderpsychologie und Kinderpsychiatrie|krimdok
	"2190-6238" : "!11093539X!", // Psychologische Rundschau|krimdok
	"1461-7439" : "!098253387!", // Theoretical criminology|krimdok
	"1438-9460" : "!294342109!", // Zeitschrift für Sexualforschung|krimdok
	"2380-8829" : "!483612618!", // The Covenant Quarterly
	"0212-1964" : "!016231767!", // Teología y catequesis 
	"14722089" : "!098783998!", //  International congregational journal 
	"1472-2089" : "!098783998!", //  International congregational journal
	"09602720" : "!032741545!", //  European journal of theology
	"0960-2720" : "!032741545!", //  European journal of theology
	"0555-9308" : "!494612703!", //  Zeitschrift für Pastoraltheologie
	"0093-531X" : "!014809931!", //  Perspectives in religious studies
	"0967-8948" : "!487680898!", // Journal of the British Association for the Study of Religions - formerly DISKUS
    "2342-7256" : "!42401257X!", // Temenos : nordic journal of comparative religion
    "1799-3121" : "!367402394!", // Approaching religion    
    "1677-1222" : "!281208956!", // Rever : revista de estudos da religião
	"1475-5610" : "!113422903!", // Culture and Religion
	"00224189" : "!113710593!", // Journal of Religion
	"1549-6538" : "!113710593!", // Journal of Religion
	"0022-4189" : "!113710593!", // Journal of Religion
	"1722-4705" : "!275998991!", // Religioni e società
	"0394-9397" : "!275998991!", // Religioni e società
	"17224705" : "!275998991!", // Religioni e società
	"0002-7189" : "!10686971X!", // Journal of the American Academy of Religion
	"1477-4585" : "!10686971X!", // Journal of the American Academy of Religion
	"00088080" : "!266819001!", // The catholic historical review
	"0008-8080" : "!266819001!", // The catholic historical review
	"0024-6964" : "!015195600!", // Louvain Studies
	"13549901" : "!27388431X!", // Studies in world christianity !!pppn
	"1354-9901" : "!27388431X!", // Studies in world christianity !!pppn
	"1323-6377" : "!064449815!", // Uniting Church Studies
	"0023-9054, 1703-8804" : "!256979642!", // Laval théologique et philosophiqueLaval théologique et philosophique
	"0023-9054" : "!256979642!", // Laval théologique et philosophiqueLaval théologique et philosophique
	"0003-2468" : "!414633695!", // Analecta Bollandiana
	"0048-721X" : "!104344660!", // Religion
	"0005-5719" : "!325341265!", // Baptist history and heritage
	"00055719" : "!325341265!", // Baptist history and heritage
	"0210-7112" : "!015182886!", // Revista española de teología
	"2466-8583" : "!462777774!", // Revue biblique
	"0039-3207" : "!01518529X!", // Studia liturgica
	"0043-941X" : "!015195163!", // Worship. A review concerned with the problems of liturgical renewal
	"0022-4480, 1477-8556" : "!100202497!", // Journal of Semitic Studies
	"1477-8556" : "!100202497!", // Journal of Semitic Studies
	"0022-4480" : "!100202497!", // Journal of Semitic Studies
	"2304-8557" : "!380443740!", // Koers Bulletin for Christian Scholarship
	"23048557" : "!380443740!", // Koers Bulletin for Christian Scholarship
	"1088-6923" : "!060776978!", // Affirmation & Critique
	"0007-4322" : "!01439829X!", // Bulletin de littérature ecclésiastique
	"1155-3316" : "!023337230!", // Apocrypha
	"00666785" : "!407318607!", // Archivum Historiae Pontificiae
	"0066-6785" : "!407318607!", // Archivum Historiae Pontificiae
	"0009-6407, 1755-2613" : "!114617899!", // Church History
	"0009-6407" : "!114617899!", // Church history !!pppn
	"1755-2613" : "!114617899!", // Church history !!eppn
	"0013-9513" : "!112891160!", // Ephemerides theologicae Lovanienses
	"1783-1423" : "!112891160!", // Ephemerides theologicae Lovanienses
	"09329951" : "!27681875X!", // Kirchliche Zeitgeschichte Internationale Zeitschrift für Theologie und Geschichtswissenschaft
	"0932-9951" : "!27681875X!", // Kirchliche Zeitgeschichte Internationale Zeitschrift für Theologie und Geschichtswissenschaft
	"0081-8933" : "!281309671!", // Liber annuus
	"2312-878X" : "!477218679!", // Missionalia
	"0256-9507" : "!477218679!", // Missionalia
	"0025-8911" : "!014889552!", // Mélanges de science religieuse
	"1094-2076" : "!251822133!", // Near Eastern archaeology 
	"0029-4845" : "!378728032!", // Nouvelle revue théologique
	"0035-2381" : "!30486725X!", // Revue d'histoire ecclésiastique
	"2506-7567" : "!469131306!", // Revue de Qumran
	"0035-1725" : "!469131306!", // Revue de Qumran
	"0035-2209" : "!014878801!", // Revue des Sciences Philosophiques et Théologiques
	"2305-445X" : "!416568890!", // Scriptura
	"2473-3725" : "!093981724!", // The Thomist
	"1469-7637" : "!078707234!", // The Journal of Ecclesiastical History
	"0022-0469, 1469-7637" : "!078707234!", // The Journal of Ecclesiastical History
	"0022-0469" : "!078707234!", // The Journal of Ecclesiastical History
	"0022-5185" : "!098474553!", // The journal of theological studies !!pppn
	"1477-4607" : "!098474553!", // The journal of theological studies !!eppn
	"0022-5185, 1477-4607" : "!098474553!", // The journal of theological studies !!eppn
	"0084-005X, 1813-3924" : "!254675824!", // Wiener Studien
	"0084-005X" : "!254675824!", // Wiener Studien
	"1813-3924" : "!254675824!", // Wiener Studien
	"0003097X" : "!251821994!", // Bulletin of the American Schools of Oriental Research
	"0003097X, 21618062" : "!251821994!", // Bulletin of the American Schools of Oriental Research
	"0003-097X" : "!251821994!", // Bulletin of the American Schools of Oriental Research
	"0959-6410" : "!09466157X!", // Islam and Christian-Muslim relations !!pppn
	"2365-3140" : "!44515568X!", // Interdisciplinary journal for religion and transformation in contemporary society
	"18630502" : "!281238162!", //Theo-Web Zeitschrift für Religionspädagogik
	"1863-0502" : "!281238162!", //Theo-Web Zeitschrift für Religionspädagogik
	"1015-8758" : "!347604765!", // Acta Theologica
	"10158758" : "!347604765!", // Acta Theologica
	"2309-9089" : "!347604765!", // Acta Theologica
	"1015-8758, 2309-9089" : "!347604765!", // Acta Theologica
	"1862-1678" : "!281343004!", // theologie.geschichte
	"1983-2850" : "!361845626!", // Revista Brasileira de História das Religiões 
	"19832850" : "!361845626!", // Revista Brasileira de História das Religiões
	"2179-0019" : "!454035934!", // Plura, revista de estudos de religião
	"21790019" : "!454035934!", // Plura, revista de estudos de religião
	"2175-5841" : "!337893861!", // Horizonte
	"2371-2295" : "!493457933!", // Œcuménisme / Ecumenism
	"0383-431X" : "!493457933!", // Œcuménisme / Ecumenism
	"2159-6875" : "!454038860!", // Jonathan Edwards studies
	"2001-8819" : "!414831071!", // De Ethica
	"20018819" : "!414831071!", // De Ethica
	"2408-9370" : "!452474043!", // Journal for religion, film and media
	"2414-0201" : "!452474043!", // Journal for religion, film and media
	"2159-8711" : "!477607594!", // Journal for the sociological integration of religion and society
	"1783-1520" : "!102190003!", // Journal of Eastern Christian studies
	"0035-1423" : "!27177388X!", // Histoire des Religions
	"1869-3261" : "!36002842X!", // Diaconia
	"0043-2547" : "!31531964X!", // Die Welt des Orients
	"00432547" : "!31531964X!", // Die Welt des Orients
	"2191-0456" : "!334013682!", // Hikma
	"1869-3296" : "!429189435!", // Journal of ancient Judaism
	"0018-4276" : "!276562968!", // Homiletische Monatshefte
	"1179-7231" : "!348749139!", // Relegere
	"1553-9962" : "!281295107!", // Religion and Society in Central and Eastern Europe
	"2006-5442" : "!398958882!", // Journal of religion and human relations
	"0031-8159" : "!27773407X!", // Philosophische Rundschau
	"00318159" : "!27773407X!", // Philosophische Rundschau
	"1980-6736" : "!28135765X!", // Teocomunicação
	"2365-6565" : "!281361843!", // Ethik und Gesellschaft
	"2053-6712" : "!360558348!", // Secularism and Nonreligion
	"2011-9771" : "!478583346!", // Revista Albertus Magnus
	"2413-9459" : "!477219799!", // Stellenbosch Theological Journal = Stellenbosch Teologiese Joernaal (STJ) 
	"2509-9957, 2509-9965" : "!48898503X!", // International journal of Latin American religions
	"2509-9957" : "!48898503X!", // International journal of Latin American religions
	"2509-9965" : "!48898503X!", // International journal of Latin American religions
	"1540-6385" : "!094110913!", // Dialog
	"2176-1078" : "!322767741!", // Estudos de religião
	"1386-2820, 1572-8447" : "!104558555!", // Ethical theory and moral practice
	"1572-8447" : "!104558555!", // Ethical theory and moral practice
	"1386-2820" : "!104558555!", // Ethical theory and moral practice
	"00312789" : "!121191761!", // Pastoral psychology
	"0031-2789, 1573-6679" : "!121191761!", // Pastoral psychology
	"1573-6679" : "!121191761!", // Pastoral psychology
	"0031-2789" : "!121191761!", // Pastoral psychology
	"0038-1527, 1873-930X" : "!271774215!", // Sophia
	"1873-930X" : "!271774215!", // Sophia
	"0038-1527" : "!271774215!", // Sophia
	"0022-4197, 1573-6571" : "!121466191!", // Journal of Religion and Health
	"1573-6571" : "!121466191!", // Journal of Religion and Health
	"0022-4197" : "!121466191!", // Journal of Religion and Health
	"2555-5111" : "!477171990!", // Journal international de bioéthique et d'éthique des sciences
	"00378887" : "!256840768!", // Archivum historicum Societatis Iesu
	"0037-8887" : "!256840768!", // Archivum historicum Societatis Iesu
	"2295-6093" : "!407317074!", // Augustiniana
	"0045-0308" : "!015178129!", // Australian biblical review
	"00450308" : "!015178129!", // Australian biblical review
	"1886-4945" : "!302971882!", //  Cauriensia
	"1133-0104" : "!032733054!", // Anuario de historia de la Iglesia 
	"0010-3497" : "!401716686!", // Communicatio Socialis
	"1930-1200" : "!052644464!", // Contagion
	"1075-7201" : "!052644464!", // Contagion
	"1666-7832" : "!325005931!", // DavarLogos
	"0210-1610" : "!325341419!", // Estudios eclesiásticos
	"1945-9718" : "!307016250!", // Franciscan Studies
	"0080-5459" : "!307016250!", // Franciscan Studies
	"0018-215X" : "!281366985!", // Hispania Sacra
	"2267-7313" : "!398332924!", // Histoire, monde et cultures religieuses
	"0360-9669, 2050-8557" : "!014815435!", // Horizons
	"0360-9669" : "!014815435!", // Horizons
	"1740-3553, 1745-5278" : "!256620571!", // Journal of Anglican Studies
	"1740-3553" : "!256620571!", // Journal of Anglican Studies
	"1745-5278" : "!256620571!", // Journal of Anglican Studies
	"1467-9809" : "!095551751!", // Journal of religious history
	"0210-2900" : "!026379554!", // Mayéutica
	"0030-252X" : "!015178552!", // One in Christ
	"1783-1652" : "!114618771!", // Ons Geestelijk Erf
	"0034-1258" : "!305355643!", // Recherches de science religieuse 
	"2055-7973, 2055-7981" : "!428283136!", // British Catholic History
	"2055-7973" : "!428283136!", // British Catholic History
	"2055-7981" : "!428283136!", // British Catholic History
	"1467-9647" : "!098253379!", // Teaching theology & religion
	"13684868" : "!098253379!", // Teaching theology & religion
	"1368-4868" : "!098253379!", // Teaching theology & religion
	"1768-9260" : "!11277668X!", // Revue d'Etudes Augustiniennes et Patristiques
	"1783-8401" : "!379064863!", // Revue Théologique de Louvain
	"0316-5345" : "!015183734!", // Science et Esprit
	"1097-6566" : "!112178723!", // Stone-Campbell journal
	"2295-3019" : "!015198510!", // Studia Canonica
	"0039-6761" : "!39804595X!", // Swedish Theological Quarterly
	"2295-5186" : "!091176336!", // Theoforum
	"1495-7922" : "!091176336!", // Theoforum
	"0169-7536" : "!016204123!", // Zeitschrift für Dialektische Theologie
	"0270-2533" : "!273890433!", // Trinity Seminary Review
	"0254-4407" : "!014429802!", // Zwingliana
	"1520-7307" : "!415645301!", // The Southern Baptist Journal of Theology
	"2031-5929" : "!065483006!", // Annali di Scienze Religiose
	"0034-673X, 2211-4866" : "!257192638!", // Review of Religious Research
	"0034-673X" : "!257192638!", // Review of Religious Research
	"2211-4866" : "!257192638!", // Review of Religious Research
	"1468-5906" : "!093888538!", // Journal for the Scientific Study of Religion
	"00218294" : "!093888538!", // Journal for the Scientific Study of Religion
	"03938417" : "!375594558!", // Studi e materiali di storia delle religioni
	"0393-8417" : "!375594558!", // Studi e materiali di storia delle religioni
	"1553-3913" : "!266819427!", // Journal of feminist studies in religion
	"8755-4178" : "!266819427!", // Journal of feminist studies in religion
	"87554178, 15533913" : "!266819427!", // Journal of feminist studies in religion
	"1050-8619" : "!255101619!", // The International Journal for the Psychology of Religion
	"2056-9971" : "!428515673!", // International journal of Christianity & education
	"1749-8171" : "!278762514!", // Religion compass
	"1092-6690, 1541-8480" : "!113563531!", // Nova religio
	"1092-6690" : "!113563531!", // Nova religio
	"1541-8480" : "!113563531!", // Nova religio
	"0075-2584" : "!014407884!", // Jahrbuch für christliche Sozialwissenschaften
	"0044-2690" : "!014851555!", // Zeitschrift fuer Evangelisches Kirchenrecht
	"1011-7601" : "!477530001!", // Journal for the Study of Religion
	"1889-5662" : "!326864059!", // Facies Domini
	"0212-1964" : "!016231767!", // Teología y catequesis
	"0392-2855" : "!015148246!", // Analecta Augusiniana
	"0003-6064" : "!014992124!", // Antonianum
	"0392-2359" : "!014926180!", // Apollinaris
	"1591-2957" : "!053393244!", // Archivio teologico torinese
	"0210-1629" : "!015177998!", // Archivo teológico Granadino
	"0004-0665" : "!014392941!", // Archivum Franciscanum historicum
	"0004-802X" : "!015534588!", // Augustinus
	"0210-0398" : "!01519101X!", // Ciencia Tomista
	"0425-1466" : "!015186687!", // Ephemerides Mariologicae
	"0210-7074" : "!015194566!", // Estudios josefinos
	"0210-0363" : "!015194574!", // Estidios trinitarios
	"0178-1626" : "!015133702!", // Forum Katholische Theologie
	"1124-1225" : "!045289107!", // Hagiographica
	"0253-620X" : "!015205215!", // Indian theological studies
	"0021-0978" : "!015004333!", // Irénikon
	"0021-2423" : "!015180689!", // Istina
	"0021-3209" : "!015194124!", // Itinerarium
	"1010-7215" : "!015539768!", // Lateranum
	"0076-1508" : "!015180867!", // Lusitania sacra
	"0211-2582" : "!015202054!", // Misiones extranjeras
	"0580-1400" : "!014852195!", // Münchener theologische Zeitschrift
	"0031-529X" : "!025189972!", // Periodica di re canonica
	"0210-3877" : "!018664865!", // Phase
	"0032-9622" : "!015182274!", // Proche-Orient chrétien
	"1122-5661" : "!015239071!", // Recollectio
	"0211-612X" : "!015230988!", // Revista agustiniana
	"0034-8147" : "!015193446!", // Revista de espiritualidad
	"0036-3537" : "!015183807!", // Salmanticensis
	"0559-2186" : "!015183874!", // Scriptorium Victoriense
	"0049-2353" : "!015021874!", // Stromata
	"0039-3258" : "!01453455X!", // Studia monastica
	"0585-766X" : "!015193594!", // Studium revista de filosofía y teología
	"0392-4556" : "!015348334!", // Teresianum
	"0342-1465" : "!014827182!", // Una Sancta
	"0042-3718" : "!015193608!", // Verdad y vida
	"0009-7756" : "!015191028!", // Ciudad de Dios
	"0017-4114" : "!014405377!", // Gregorianum
	"21509301" : "!365211141!", //  Religion and society
	"2150-9298, 2150-9301" : "!365211141!", //  Religion and society
	"2150-9298" : "!365211141!", //  Religion and society
	"2150-9301" : "!365211141!", //  Religion and society
	"2593-0486" : "!494985240!", // Marriage, Families and Spirituality
	"00027650" : "!015022609!", // The American Benedictine Review
	"0002-7650" : "!015022609!", // The American Benedictine Review
	"0008-8501" : "!255124406!", // Catholica
	"00105236" : "!015241661!", // Concilium - Englische Ausgabe !!!!
	"0010-5236" : "!015241661!", // Concilium - Englische Ausgabe !!!!
	"0018-0645" : "!014406144!", // Herder Korrespondenz
	"0014-1437" : "!015178757!", // Estudios Biblicos
	"1689-8311" : "!477533728!", // European Journal for Philosophy of Religion
	"0024-5100" : "!014407558!", // Liturgisches Jahrbuch 
	"1025-6555, 1814-2036" : "!055361250!", // Mitteilungen zur Christlichen Archäologie
	"1025-6555" : "!055361250!", // Mitteilungen zur Christlichen Archäologie
	"1814-2036" : "!055361250!", // Mitteilungen zur Christlichen Archäologie
	"2565-7348" : "!333370279!", // Tijdschrift voor Theologie
	"0039-6761" : "!39804595X!", // Svensk teologisk kvartalskrift
	"0044-3123" : "!014852152!", // Zeitschrift für Missionswissenschaft und Religionswissenschaft
	"1120-267X" : "!015202550!", // Teologia, rivista della Facoltà Teologica dell'Italia Settentrionale
	"2053-6267" : "!394648986!", // The Huguenot Society Journal
	"0340-6210" : "!1014414112!", // Luther
	"0026-587X" : "!015181243!", // Miscellanea Francescana
	"0340-6407" : "!014895242!", // Oriens Christianus
	"0030-6487" : "!014838737!", // Ostkirchliche Studien
	"1529-1634" : "!106362623!", // Philosophia Christi
	"0033-1767" : "!015182266!", // Protestantesimo
	"0172-6943" : "!015195635!", // Pietismus und Neuzeit
	"1127-2171" : "!094950229!", // Studi sull'Oriente Cristiano
	"1100-2298" : "!015190374!", // Svensk exegetisk årsbok
	"03449254" : "!014583178!", // Unitas Fratrum
	"0344-9254" : "!014583178!", // Unitas Fratrum
	"03933849" : "!014791072!", // Rivista di scienze dell'educazione
	"0393-3849" : "!014791072!", // Rivista di scienze dell'educazione
	"1120-8333" : "!028039645!", // Ricerche Teologiche
	"0049-3449" : "!28122269X!", // Teologia y vida
	"0049-3449,  0717-6295" : "!28122269X!", // Teologia y vida
	"1550-4891" : "!260776262!", // Cultural encounters
	"0008-7912" : "!25241747X!", // The catholic biblical quarterly !!pppn
	"00087912" : "!25241747X!", // The catholic biblical quarterly !!pppn
	"2295-3027" : "!015198510!", // Studia Canonica
	"0035-2403" : "!014915391!", // Revue d'histoire et de philosophie religieuses
	"1359-1835" : "!079877222!", // Journal of material culture
	"1460-3586" : "!079877222!", // Journal of material culture
	"0272-6122" : "!266225314!", // International Bulletin of Mission Research
	"0458-063X" : "!113422911!", // Liturgy
	"0041-2945" : "!014822245!", // Trierer Theologische Zeitschrift
	"1749-4907, 1749-4915" : "!274589745!", // Journal for the Study of Religion, Nature and Culture
	"1749-4907" : "!274589745!", // Journal for the Study of Religion, Nature and Culture
	"1749-4915" : "!274589745!", // Journal for the Study of Religion, Nature and Culture
	"17494907" : "!274589745!", // Journal for the Study of Religion, Nature and Culture
	"1534-8423" : "!117513679!", // Journal of Media and Religion
	"1888-346X" : "!47709774X!", // Bandue: revista de la Sociedad Española de Ciencias de las Religiones
	"1355-8358" : "!043086950!", // Theology & sexuality
	"2035-6455" : "!477589960!", // Historia Religionum
	"1743-2200" : "!273875507!", // Material Religion : The Journal of Objects, Art and Belief 
	"2049-7555, 2049-7563" : "!360555888!" , // Journal for the Cognitive Science of Religion
	"2049-7555" : "!360555888!", // Journal for the Cognitive Science of Religion
	"2049-7563" : "!360555888!", // Journal for the Cognitive Science of Religion
	"21568022" : "!354897241!", // Mormon studies Review
	"2156-8022" : "!354897241!", // Mormon studies Review
	"2041-1863, 2041-1871" :"!329536249!", // Bulletin for the Study of Religion
	"2041-1863" : "!329536249!", // Bulletin for the Study of Religion
	"2041-1871" : "!329536249!", // Bulletin for the Study of Religion
	"0963-7494" : "!097188581!", // Religion, State and Society
	"0210-0851" : "!015213048!", // Moralia: revista de ciencias morales
	"0003-3286" : "!273867393!", // Anglican Theological Review
	"00033286" : "!273867393!", // Anglican Theological Review
	"0727-3215" : "!478317891!", // Austalasian Catholic Record
	"0094-7342" : "!382626893!", // Journal of the Mormon History
	"00339644" : "!015185109!", // Rassegna di Teologia
	"0033-9644" : "!015185109!", // Rassegna di Teologia
	"00122157" : "!258762179!", // Dialogue: A Journal of Mormon Thought
	"0012-2157" : "!258762179!", // Dialogue: A Journal of Mormon Thought
	"0392-7288" : "!015202879!", // Islamochristiana
	"0304-1042" : "!281243603!", // Japanese Journal of Religious Studies
	"0014-701X" : "!015239004!", // Faith and freedom
	"1904-8181" : "!358413109!", // Religionsvidenskabeligt Tidsskrift
	"23258780" : "!371984971!", // journal for spiritual and consciousness studies
	"2325-8780" : "!371984971!", // journal for spiritual and consciousness studies
	"1527-9472" : "!117648264!", // Buddhist-Christian Studies
	"08820945" : "!117648264!", // Buddhist-Christian Studies
	"0882-0945" : "!117648264!", // Buddhist-Christian Studies
	"0737-769X" : "!378495917!", // Journal of Chinese Religions
	"2047704X" : "!39403581X!", // Journal for the Academic Study of Religion
	"2047-704X" : "!39403581X!", // Journal for the Academic Study of Religion
	"1031-2943, 1744-9014" : "!39403581X!", // Journal for the Academic Study of Religion
	"1052-1151, 1533-8568" : "!097188832!", // Religion and American Culture 
	"1533-8568" : "!097188832!", // Religion and American Culture 
	"1052-1151" : "!097188832!", // Religion and American Culture 
	"1467-9418" : "!097934925!", // Reviews in Religion & Theology
	"1216-7827" : "!038864630!", // Shaman
	"23744766" : "!42466710X!", // Journal of Book of Mormon Studies
	"2374-4766" : "!42466710X!", // Journal of Book of Mormon Studies
	"2374-4774" : "!42466710X!", // Journal of the Book of Mormon Studies
	"1361-7672" : "!094752656!", // Journal of Beliefs & Values
	"1353-7903" : "!095237976!", // Journal of Contemporary Religion
	"2154-7270" : "!359478492!", // International Journal of Cultic Studies
	"1463-9947" : "!265627168!", // Contemporary Buddhism
	"0718-4727" : "!302633731!", // Revista Cultura & Religión
	"0012-8708" : "!325341230!", // Eastern Buddhist
	"00128708" : "!325341230!", // Eastern Buddhist
	"1743-0615" : "!325342784!", // Fieldwork in Religion
	"1743-0623" : "!325342784!", // Fieldwork in Religion
	"1743-0615, 1743-0623" : "!325342784!", // Fieldwork in Religion
	"14639955" : "!256442428!", // Implicit Religion
	"1463-9955" : "!256442428!", // Implicit Religion
	"14639955, 17431697" : "!256442428!", // Implicit Religion
	"1527-6457" : "!281202834!", // Journal of Global Buddhism
	"2167-2040" : "!398102066!", // Journal of Korean Religions
	"2093-7288" : "!398102066!", // Journal of Korean Religions
	"1703-289X" : "!281223165!", // The Journal of Religion and Popular Culture
	"2153-599X" : "!457642572!", // Religion, Brain & Behavior
	"1983-7828" : "!429460791!", // Fragmentos de Cultura
	"2159-3159" : "!266224822!", // Greek, Roman, and Byzantine Studies
	"0017-3916" : "!266224822!", // Greek, Roman, and Byzantine Studies
	"1757-2460, 1757-2479" : "!457642335!", // Journal for Research into Freemasonry and Fraternalism
	"1757-2460" : "!457642335!", // Journal for Research into Freemasonry and Fraternalism
	"1757-2479" : "!457642335!", // Journal for Research into Freemasonry and Fraternalism
	"1357-6275" : "!27386596X!", // Mortality
	"22366296" : "!407570608!", // Numen
	"2236-6296" : "!407570608!", // Numen
	"2196-6265" : "!370217381!", // Jahrbuch für Christliche Sozialwissenschaften
	"0004-8011" : "!445969504!", // Augustinianum
	"1065223X" : "!347283926!", // Bulletin of the Biblical Research
	"1065-223X" : "!347283926!", // Bulletin of the Biblical Research
	"0026-1238" : "!420019235!", // Methodist History
	"10626549" : "!273885499!", // Cistercian studies quarterly
	"1062-6549" : "!273885499!", // Cistercian studies quarterly
	"0745-3698" : "!483608033!", // American Baptist Quarterly
	"03799557" : "!273889931!", // Theological review
	"0379-9557" : "!273889931!", // Theological review
	"0036-9764" : "!319103358!", // Scripta Theologica
	"01448153" : "!273873954!", // Evangelical Review of Theology
	"0144-8153" : "!273873954!", // Evangelical Review of Theology
	"2565-7070" : "!281200165!", // Biblica
	"2470-5616" : "!325341249!", // Lutheran Quarterly
	"0335-5985" : "!281246386!", // Archives de sciences sociales des religions
	"00027049" : "!252295935!", // America
	"0002-7049" : "!252295935!", // America
	"2589-3998" : "!497881373!", // Yearbook of ritual and liturgical studies
	"00244414" : "!015196593!", // Listening, Journal of Communication Ethics, Religion, and Culture
	"0024-4414" : "!015196593!", // Listening, Journal of Communication Ethics, Religion, and Culture
	"1756-073X" : "!314543821!", // Practical Theology
	"0030-5375" : "!014895315!", // Orientalia christiana periodica
	"2385-2062" : "!281200165!", // Biblica
	"0006-0887" : "!281200165!", // Biblica
	"2565-7070" : "!281200165!", // Biblica
	"0035-1784" : "!41048640X!", // Revue de théologie et de philosophie
	"2047704X" : "!39403581X!", // Journal for the Academic Study of Religion
	"1031-2943, 1744-9014" : "!39403581X!", // Journal for the Academic Study of Religion
	"1744-9014" : "!39403581X!", // Journal for the Academic Study of Religion
	"1031-2943" : "!39403581X!", // Journal for the Academic Study of Religion
	"1052-1151, 1533-8568" : "!097188832!", // Religion and American Culture
	"1052-1151" : "!097188832!", // Religion and American Culture
	"1533-8568" : "!097188832!", // Religion and American Culture
	"2297-6469" : "!447097423!", // Zeitschrift für Religionskunde
	"0739-8913" : "!325708746!", // Christian Education Journal
	"2589-0468" : "!49569911X!", // Biblische Zeitschrift
	"1930-3777" : "!281328900!", // Studies in Christian-Jewish Relations
	"2041-3599, 1871-7691" : "!281221219!", // PentecoStudies
	"2041-3599" : "!281221219!", // PentecoStudies
	"1871-7691" : "!281221219!", // PentecoStudies
	"18717691" : "!281221219!", // PentecoStudies
	"2331-2521" : "!40970038X!", // Journal of disability & religion
	"2044-0243" : "!455632693!", // Journal for the Study of Spirituality
	"1941-1022" : "!31627786X!", // Psychology of Religion and Spirituality	
	"1755-0483, 1755-0491" : "!29433923X!", // Politics and Religion
	"1755-0483" : "!29433923X!", // Politics and Religion
	"1755-0491" : "!29433923X!", // Politics and Religion
	"2161-8534" : "!354001043!", // American Catholic Studies
	"2317-4307" : "!394188012!", // Revista de Cultura Teológica
	"0005-576X" : "!433364998!", // Baptist quarterly
	"1476-9948" : "!255267037!", // Black Theology
	"2237-6461" : "!348749171!", // Estudos Teológicos
	"0101-3130" : "!348749171!", // Estudos Teológicos
	"2164-6279" : "!354446967!", // Journal of Hindu-Christian Studies 
	"1933-6632" : "!360555128!", // Journal of Moravian History
	"19336632, 21616310" : "!360555128!", // Journal of Moravian History
	"1533-791X" : "!266818943!", // Logos
	"2326-2176" : "!325341176!", // Journal of the Society of Christian Ethics
	"08194920" : "!477959601!", // Phronema
	"0819-4920" : "!477959601!", // Phronema
	"09602720" : "!273873938!", // European Journal of Theology
	"0960-2720" : "!273873938!", // European Journal of Theology
	"1918-6371" : "!398101299!", // Toronto Journal of Theology
	"1188-7109, 1492-1413" : "!347268072!", // Théologiques
	"1492-1413" : "!347268072!", // Théologiques
	"1188-7109" : "!347268072!", // Théologiques
	"0107-4164" : "!443211930!", // Grundtvig-Studier
	"0020-157x" : "!273888226!", // Innes Review
	"0020-157X" : "!273888226!", // Innes Review
	"18277365" : "!377156167!", // Rivista di Storia del Cristianesimo
	"1827-7365" : "!377156167!", // Rivista di Storia del Cristianesimo
	"2054-1988" : "!42547724X!", // Journal of Holy Land and Palestine Studies
	"0047-8105" : "!368309355!", // Moreana
	"2518-4628" : "!410110930!", // Neotestamentica
	"0254-8356, 2518-4628" : "!410110930!", // Neotestamentica
	
	
	
};





var nachnameMapping = {
	"Hemingway" : "!16137493X!"  // http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=16137493X&INDEXSET=1
};
var nameMapping = {
	"Berners-Lee, Tim" : "!18195804X!" // http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=18195804X&INDEXSET=1
};
//Sprachcodes nach ISO 639-2
//http://swbtools.bsz-bw.de/winibwhelp/Liste_1500.htm

var languageMapping = {
	"en" : "eng",
	"de" : "ger",
	"fr" : "fre",
	"English" : "eng",
	"pt" : "por",
	"es" : "spa",
	"it" : "ita",
	"en-US" : "eng",
	"en_US" : "eng",
	"EN" : "eng",
	"da-DK" : "dan",
	"da" : "dan",
	"Da" : "dan",
	"pt-BR" : "por",
	"es-ES" : "spa",
	"No" : "nor",
	"Sv" : "swe", 
	"no" : "nor",
	"sv" : "swe", 
	
	
};

var issnLangMapping = {
	"2031-5929" : "eng",
	"1010-9913" : "fre",
	"2031-5921" : "ger",
	"1209-9392" : "eng", 
	"0305-7240" : "eng",
	"0167-4544" : "eng",
	"1573-0697" : "eng",
	"1467-8519" : "eng",
	"1467-8608" : "eng",
	"1468-2303" : "eng",
	"1092-1311" : "eng", 
	"1094-5253" : "eng",
	"1086-3222" : "eng",
	"1086-3184" : "eng",
	"1469-8145" : "eng",
	"1469-5103" : "eng",
	"1469-2147" : "eng",
	"1380-3603" : "eng",
	"1744-4195" : "eng",
	"0569-9789" : "spa",
	"0210-0460" : "spa",
	"2444-684X" : "spa",
	"0716-1662" : "spa",
	"0211-5255" : "spa",
	"0211-2035" : "spa",
	"0004-0452" : "spa",
	"0004-4970" : "ita",
	"1594-3445" : "ita",
	"0006-0585" : "ita",
	"0521-8195" : "spa",
	"0008-6673" : "ita",
	"0094-2065" : "eng",
	"0573-2018" : "spa",
	"0145-7233" : "eng",
	"0210-3133" : "spa",
	"0425-340X" : "spa",
	"0210-0525" : "spa",
	"0210-4393" : "spa",
	"0071-2086" : "fre",
	"0883-0053" : "eng",
	"0019-4530" : "eng",
	"1071-8257" : "eng",
	"2244-5161" : "eng",
	"0211-4011" : "spa",
	"0024-5895" : "eng",
	"0456-8494" : "spa",
	"0544-9073" : "spa",
	"0470-3790" : "spa",
	"0193-6212" : "eng",
	"0043-2873" : "eng",
	"0034-7078" : "spa",
	"0036-4703" : "spa",
	"1885-0588" : "spa",
	"0210-5225" : "spa",
	"0144-8722" : "eng",
	"1017-0499" : "eng",
	"2001-5828" : "swe",
	"0251-4788" : "eng",
	"0251-4788" : "chi",
	"0495-1549" : "spa",
	"0212-1964" : "spa",
	"0040-5620" : "eng",
	"0253-3812" : "eng",
	"0253-3812" : "chi",
	"0211-7096" : "spa",
	"1344-7297" : "eng",
	"0030-5839" : "eng",
	"1550-0195" : "eng",
	"0018-2710" : "eng",
	"0043-2040" : "ger",
	"0733-4273 (PRINT)" : "eng",
	"0082-7118" : "eng", // Tyndale Bulletin
	"0141-6200" : "eng", // British Journal of Religious Education
	"0943-3058" : "eng", // Method and theory in the study of religion
	"2363-6696" : "manuell", // Entangled Religions
	"0044-3441" : "ger", // Zeitschrift für Religions- und Geistesgeschichte
	"1862-5886" : "ger", // Zeitschrift für junge Religionswissenschaft
	"1612-2941" : "eng", // Marburg Journal of Religion
	"0017-2251" : "eng", // Christian scholar’s review
	"0774-5524" : "eng", // Questions liturgiques
	"0926-2326" : "eng", // Studies in Interreligious Dialogue
	"1783-1806" : "eng", // Studies in Interreligious Dialogue
	"1867-4240" : "ger", // Transformierte Buddhismen
	"0342-0914" : "ger", // Lutherjahrbuch
	"0040-5698" : "ger", // Theologische Rundschau
	"0044-3549" : "ger", // Zeitschrift für Theologie und Kirche
	"0212-1964" : "spa", // Teología y catequesis 
	"0555-9308" : "ger", // Zeitschrift für Pastoraltheologie
    "0967-8948" : "eng", // Journal of the British Association for the Study of Religions - formerly DISKUS
    "2342-7256" : "eng", // Temenos : nordic journal of comparative religion
    "1799-3121" : "eng", // Approaching religion
    "1677-1222" : "manuell", // Rever : revista de estudos da religião
	"1722-4705" : "ita", // Religioni e societa
	"0394-9397" : "ita", // Religioni e societa
	"17224705" : "ita", // Religioni e societa
	"0007-4322" : "fre", // Bulletin de littérature ecclésiastique
	"0210-7112" : "spa", // Revista española de teología
	"00666785" : "ita", // Archivum Historiae Pontificiae
	"09329951" : "ger", // Kirchliche Zeitgeschichte Internationale Zeitschrift für Theologie und Geschichtswissenschaft
	"0932-9951" : "ger", // Kirchliche Zeitgeschichte Internationale Zeitschrift für Theologie und Geschichtswissenschaft
	"0081-8933" : "ita", // Liber annuus
	"0025-8911" : "fre", // Mélanges de science religieuse
	"0029-4845" : "fre", // Nouvelle revue théologique	
	"0035-2209" : "fre", // Revue des Sciences Philosophiques et Théologiques
	"1813-3924" : "ger", // Wiener Studien
	"0084-005X" : "ger", // Wiener Studien
	"18630502" : "ger", //Theo-Web Zeitschrift für Religionspädagogik
	"1863-0502" : "ger", //Theo-Web Zeitschrift für Religionspädagogik
	"19832850" : "por", // Revista Brasileira de História das Religiões 
	"1983-2850" : "por", // Revista Brasileira de História das Religiões 
	"2179-0019" : "por", // Plura, revista de estudos de religião
	"21790019" : "por", // Plura, revista de estudos de religião
	"0035-1423" : "fre", // Histoire des Religions
	"0043-2547" : "ger", // Die Welt des Orients
	"00432547" : "ger", // Die Welt des Orients
	"0018-4276" : "ger", // Homiletische Monatshefte
	"0031-8159" : "ger", // Philosophische Rundschau
	"00318159" : "ger", // Philosophische Rundschau
	"1980-6736" : "por", // Teocomunicação
	"2365-6565" : "ger", // Ethik und Gesellschaft
	"2011-9771" : "spa", // Revista Albertus Magnus
	"0210-2900" : "spa", // Mayéutica
	"1889-5662" : "spa", // Facies Domini
	"0212-1964" : "spa", // Teología y catequesis
	"1120267X" : "ita", // Teologia, rivista della Facoltà Teologica dell'Italia Settentrionale
	"0021-2423" : "fre", // Istina
	"0340-6210" : "ger", // Luther
	"0026587X" :"ita", // Miscellanea Francescana
	"0340-6407" : "ger", // Oriens Christianus
	"0030-6487" : "ger", // Ostkirchliche Studien
	"0033-1767" : "ita", // Protestantesimo
	"0172-6943" : "ger", // Pietismus und Neuzeit
	"1127-2171" : "ita", // Studi sull'Oriente Cristiano
	"03449254" : "ger", // Unitas Fratrum
	"1120-8333" : "ita", // Ricerche Teologiche
	"0049-3449" : "spa", // Teologia y vida
	"0035-2403" : "fre", // Revue d'histoire et de philosophie religieuses
	"1359-1835" : "eng", // Journal of material culture
	"1460-3586" : "eng", // Journal of material culture
	"1904-8181" : "dan", // Religionsvidenskabeligt Tidsskrift
	"1783-8401" : "fre", // Revue Théologique de Louvain
	"0107-4164" : "dan", // Grundtvig-Studier
	"18277365" : "ita", // Rivista di Storia del Cristianesimo
	"0033-1767" : "ita", // Protestantesimo
	




	
	
};

var issnVolumeMapping = {
	"2031-5929" : "N.S.",
	"2031-5922" : "A.S.",
	};

var issnPhysicalFormMapping = {
	"1550-0195" : "O",
	"2031-5929" : "A",
	"2032-5215" : "O", // ET-Studies Online Publikation - weiter unten gleiche Zs mit "A"
	"0021-9231" : "O", // Journal of Biblical Literature 
	"0591-2385" : "O", // Zygon
	"1467-9744" : "O", // Zygon
    "0891-5881" : "A", // Dialogue and alliance
	"0884-5379" : "A", // fides et historia
	"08845379" : "A", // fides et historia
	"1474-6700" : "O", // Theology and science  
	"1462-2459" : "O", // Reformation & Renaissance review  
	"0031-0328" : "A", // Palestine exploration quarterly 
	"0037-7686" : "O", // Social compass 
	"1461-7404" : "O", // Social compass 
	"1745-5294" : "O", // Journal for the study of the New Testament  !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0142-064X" : "O", // Journal for the study of the New Testament  !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0142064X" : "O", // Journal for the study of the New Testament
	"1476-6728" : "O", // Journal for the study of the Old Testament !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0309-0892" : "O", // Journal for the study of the Old Testament !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"03090892" : "O", // Journal for the study of the Old Testament
	"0771-7776" : "O", // Sacris erudiri  
	"2284-7308" : "A", // Perichoresis  
	"1745-5189" : "O", // Feminist theology 
	"0966-7350" : "O", // Feminist theology
	"09667350" : "O", // Feminist theology 
	"1357-4175" : "A", // Reformation  
	"1752-0738" : "A", // Reformation  
	"1462-317X" : "O", // Political theology   
	"1743-1719" : "O", // Political theology   
	"0360-6503" : "O", // Process studies  
	"03606503" :"O", // Process studies	
	"0733-4273" : "A", // Journal of psychology and Christianity
	"07334273" : "A", // Journal of psychology and Christianity
	"0929-0761" : "A", // Dead Sea discoveries   
	"1568-5179" : "A", // Dead Sea discoveries  
	"0022-2097" : "A", // The journal of Jewish studies
	"0018-2613" : "A", // Historische Zeitschrift 
	"1871-241X" : "A", // Church history and religious culture   
	"1871-2428" : "A", // Church history and religious culture  
	"0946-3518" : "A", // Praktische Theologie
	"0938-5320" : "A", // Praktische Theologie
	"2198-0462" : "A", // Praktische Theologie                     
	"0043-2040" : "A", // Wege zum Menschen
	"0021-1400" : "O", // Irish theological quaterly
	"0023-0707" : "O", // Kerygma und Dogma
	"1135-4712" : "O", // 'Ílu
	"0953-9468" : "O", // Studies in Christian ethics
	"1745-5235" : "O", // Studies in Christian ethics
	"09539468" : "O", // Studies in Christian ethics
	"0888-3769" : "A", // Religion and literature
	"0029-4500" : "A", // Religion and literature
	"0040-5639" : "O", // Theological studies
	"2169-1304" : "O", // Theological studies
	"0943-7592" : "A", // Journal for the History of Modern Theology über Degruyter = 4213 Hauptsacht. bis 14.2007: Zeitschrift für neuere Theologiegeschichte; @Grotz: als „…$h1-2“ (statt mit Querstrich: „…$h1/2“) 
	"1612-9776" : "A", // Journal for the History of Modern Theology // Zeitschrift für Neuere Theologiegeschichte
	"1743-1301" : "A", // Palestine exploration quarterly
	"1745-5316" : "A", // Ecclesiology !!hier kein direkter Downlaod, sondern über Zotero-button
	"0034-6373" : "O", // Review & Expositor
	"0034-4125" : "O", // Religious studies 
	"1469-901X" : "O", // Religious studies
	"0034-4125, 1469-901X" : "O", // Religious studies
	"0091-6471" : "A", // Journal of psychology and theology
	"1476-8690" : "A", // Journal for the study of the historical Jesus
	"2222-582X" : "O", // Journal of early Christian history
	"0018-2710" : "O", // History of religions
	"1545-6935" : "O", // History of religions
	"0384-9694" : "A", // Journal of religious ethics
	"1467-9795" : "A", // Journal of religious ethics
	"0943-3058" : "A", // Method & theory in the study of religion
	"1570-0682" : "A", // Method & theory in the study of religion
	"1783-1474" : "A", // INTAMS review
	"0022-4200" : "A", // Journal of religion in Africa
	"1570-0666" : "A", // Journal of religion in Africa
	"1092-6690" : "O", // Nova religio
	"1541-8480" : "O", // Nova religio
	"1079-9265" : "A", // Religion and the arts
	"1568-5292" : "A", // Religion and the arts
	"0008-4298" : "O", // Studies in religion = Sciences religieuses
	"2042-0587" : "O", // Studies in religion = Sciences religieuses
	"1380-7854" : "A", // Medieval encounters
	"1570-0674" : "A", // Medieval encounters
	"0319-485X" : "O", // Religious studies review
	"1748-0922" : "O", // Religious studies review
	"0497-1817" : "A", // Temenos
	"2342-7256" : "A", // Temenos
    "1030-570X" : "O", // Pacifica
    "1839-2598" : "O", // Pacifica
	"0890-1112" : "A", // Journal of ritual studies	
	"0091-8296" : "O", // Missiology
	"2051-3623" : "O", // Missiology
	"0011-1953" : "O", // Cross currents
	"1939-3881" : "O", // Cross currents
	"00111953" : "O", // Cross currents
	"19393881" : "O", // Cross currents
	"0020-9643" : "O", // Interpretation: A Journal of Bible and Theology
	"2159-340X" : "O", // Interpretation: A Journal of Bible and Theology
	"0067-6535" : "A", // Biblical research
	"0588-3237" : "A", // Colloquium
	"0003-2980" : "A", // Andrews University Seminary studies
	"0118-8534" : "O", // Asian journal of pentecostal studies
	"01188534" : "O", // Asian journal of pentecostal studies
	"1477-8351" : "A", // Aramaic studies
	"1745-5227" : "A", // Aramaic studies
	"0229-2807" : "A", // ARC
	"ARC" : "A", // ARC
	"0094-5323" : "O", // Augustinian studies
	"00945323" : "O", // Augustinian studies
	"0014-3367" : "A", // Evangelical quarterly
	"1474-225X" : "O", // International journal for the study of the Christian church
	"1747-0234" : "O", // International journal for the study of the Christian church
	"2153-6945" : "O", // Newman studies journal
	"0144-8153" : "A", // Evangelical review of theology
	"0360-8808" : "O", // Journal of the Evangelical Theological Society
	"0092-6558" : "A", // Journal of the Interdenominational Theological Center
	"1934-9637" : "O", // Journal of spirituality in mental health
	"1934-9645" : "O", // Journal of spirituality in mental health
    "1570-0739" : "A", // Zeitschrift für Religions- und Geistesgeschichte
	"0275-5270" : "A", // Word and World
	"0034-3072" : "O", // Reformed theological review  
	"0025-9373" : "O", // The Mennonite quarterly review  
	"00259373" : "O", // The Mennonite quarterly review
	"1023-0807" : "A", // Religion and theology  
	"1574-3012" : "A", // Religion and theology  
	"0036-3227" : "O", // St. Vladimir's theological quarterly   
	"0092-4245" : "A", // Wesleyan theological journal
	"0006-2014" : "A", // Biblische Zeitschrift
	"1469-8145" : "O", // New Testament studies
	"0028-6885, 1469-8145" : "O", // New Testament studies
	"0048-1009" : "A", // Novum Testamentum
	"0040-571X" : "O", // Theology
	"2044-2696" : "O", // Theology
	"0040-5736" : "O", // Theology today
	"2044-2556" : "O", // Theology today
	"00405736" : "O", // Theology today
	"2304-4896" : "A", // Zeitschrift der Savigny-Stiftung für Rechtsgeschichte / Kanonistische Abteilung
	"0323-4142" : "A", // Zeitschrift der Savigny-Stiftung für Rechtsgeschichte / Kanonistische Abteilung
	"0486-5642" : "O", // Restoration quarterly
	"0360-3032" : "A", // Trinity journal
    "0340-6083" : "A", // Göttinger Predigtmeditationen
	"0720-6259" : "A", // Pastoraltheologie
	"0031-2827" : "A", // Pastoraltheologie
    "2197-0831" : "A", // Pastoraltheologie
	"0174-9927" : "A", // Pastoraltheologie
	"1065-6219" : "O", // Journal of research on Christian education
	"1934-4945" : "O", // Journal of research on Christian education
	"0926-6453" : "A", // Studies in spirituality
	"1783-1814" : "A", // Studies in spirituality
	"1745-5251" : "A", // Journal of pentecostal theology
	"0966-7369" : "A", // Journal of pentecostal theology
	"0043-4388" : "A", // Westminster Theological Journal
	"00434388" : "A", // Westminster Theological Journal
	"0033-5053" : "A", // Quaker history
	"1934-1504" : "A", // Quaker history
	"0809-7291" : "O", // Nordic journal of religion and society 
	"0802-0167" : "O", // Nordic journal of religion and society
	"1890-7008" : "O", // Nordic journal of religion and society 
	"1069-4404" : "O", // Sociology of religion
	"1759-8818" : "O", // Sociology of religion
	"0141-6200" : "O", // British journal of religious education
	"2169-2327" : "O", // International journal of philosophy and theology
	"2169-2335" : "A", // International journal of philosophy and theology
	"0890-2461" : "A", // Philosophy & theology
	"1476-993X" : "O", // Currents in biblical research  !! Druckausgabe ausgewertet bis 14. 2015 = genauer: nur 14. 2015, 1
	"1745-5200" : "O", // Currents in biblical research 
	"1476993X" : "O", // Currents in biblical research 
	"0012-5806" : "O", // The Downside review  !! Druckausgabe ausgewertet bis 133. 2015, 470
	"2052-9449" : "O", // Review & expositor   !! Druckausgabe ausgewertet bis 112. 2015, 4
	"1568-5152" : "A", // Biblical interpretation
	"1370-6020" : "A", // INTAMS review      !!  siehe weiterer Eintrag oben  -  Abspeicherung mit Zauberstaub!
	"1783-2446" : "A", // Journal of the European Society of Women in Theological Research   -   Abspeicherung mit Zauberstaub!  Aufsätze an Stücktitel!
	"1026-2946" : "A", // Africa Journal of Evangelical Theology
	"0029-5973" : "A", // Numen PISSN
	"1568-5276" : "A", // Numen EISSN
	"1783-1431" : "O", // Ethical Perspectives
	"0266-7177" : "O", // Modern theology Print-PPN  PISSN
	"1468-0025" : "O", // Modern theology Print-PPN  EISSN
	"0009-661X" : "A", // Churchman
	"1126-6244" : "A", // Adamantius
	"1010-9919" : "O", // old testament essays
	"0935-7335" : "A", // Ethik in der Medizin 
	"1437-1618" : "A", // Ethik in der Medizin
	"1209-9392" : "A", // Women in Judaism
	"0305-7240" : "O", // Journal of moral education 
	"1465-3877" : "O", // Journal of moral education 
	"0167-4544" : "O", // Journal of business ethics 
	"1573-0697" : "O", // Journal of business ethics 
	"0269-9702" : "O", // Bioethics
	"1467-8519" : "O", // Bioethics
	"1467-8608" : "O", // Business ethics: A European Review
	"0962-8770" : "O", // Business ethics: A European Review
	"1468-2303" : "O", // History and theory
	"0018-2656" : "O", // History and thoery
	"1092-1311" : "O", // The journal of religion and film
	"1086-3222" : "O", // Journal of the history of ideas
	"0022-5037" : "O", // Journal of the history of ideas
	"1086-3184" : "O", // Journal of early Christian studies
	"1067-6341" : "O", // Journal of early Christian studies
	"1469-5103" : "O", // The historical journal
	"0018-246X" : "O", // The historical journal
	"1469-2147" : "O", // Cambridge quarterly of healthcare ethics
	"0963-1801" : "O", // Cambridge quarterly of healthcare ethics
	"1380-3603" : "O", // Christian bioethics
	"1744-4195" : "O", // Christian bioethics
	"0569-9789" : "A", // Analecta calasanctiana
	"0210-0460" : "A", // Anales valentinos
	"2444-684X" : "A", // Anales valentinos, Escritos del Vedat
	"0716-1662" : "A", // Anuario de historia de la Iglesia en Chile
	"0211-5255" : "A", // Archivo Dominicano
	"0211-2035" : "A", // Archivo agustiniano
	"0004-0452" : "A", // Archivo ibero-americano
	"0004-4970" : "A", // Asprenas
	"1594-3445" : "A", // Barnabiti studi
	"0006-0585" : "A", // Bibbia e oriente
	"0521-8195" : "A", // Burgense
	"0008-6673" : "A", // Carmelus
	"0094-2065" : "A", // Communio
	"0573-2018" : "A", // Compostellanum
	"0145-7233" : "A", // Concordia journal !!pppn
	"0145-7233" : "A", // Concordia journal !!eppn
	"0210-3133" : "A", // Escritos del vedat
	"0425-340X" : "A", // Estudio agustiniano
	"0210-0525" : "A", // Estudios
	"0210-4393" : "A", // Estudios franciscanos
	"0071-2086" : "A", // Études grégoriennes
	"0883-0053" : "O", // Ex auditu
	"0019-4530" : "A", // Indian church history review
	"1071-8257" : "A", // Josephinum journal of theology
	"2244-5161" : "A", // Landas
	"0211-4011" : "A", // Liceo franciscano
	"0024-5895" : "A", // Logos : a journal of Eastern Christian Studies
	"0456-8494" : "A", // Lumen
	"0544-9073" : "A", // Monte Carmelo
	"0470-3790" : "A", // Naturaleza y gracia
	"1451-3455" : "A", // Philotheos
	"0193-6212" : "A", // Presbyterion
	"0043-2873" : "A", // Proceedings of the Wesley Historical Society
	"0034-7078" : "A", // Revista bíblica
	"0036-4703" : "A", // Sapientia
	"1885-0588" : "A", // Selecciones de Franciscanismo
	"0210-5225" : "A", // Sinite
	"0144-8722" : "A", // Sobornost
	"1017-0499" : "O", // Studia historiae ecclesiasticae
	"2412-4265" : "O", // Studia historiae ecclesiasticae
	"2001-5828" : "A", // Svenskt gudstjänstliv !!eppn
	"0251-4788" : "A", // Taiwan Journal of Theology
	"0495-1549" : "A", // Teología espiritual
	"0212-1964" : "A", // Teología y catequesis
	"0040-5620" : "A", // Theological education
	"0253-3812" : "A", // Theology & life
	"0211-7096" : "A", // Urgellia
	"1344-7297" : "A", // The Japan mission journal
	"0030-5839" : "A", // The Orthodox word
	"1550-0195" : "A", // Journal of Unitarian Universalist History
	"0014-701X" : "A", // Faith and freedom
	"0283-8486" : "A", // Journal of prehistoric religion
	"0342-2356" : "A", // Ugarit-Forschungen
	"0039-338X" : "A", // Studia theologica
	"0901-8328" : "A", // Scandinavian journal of the Old Testament
	"1086-3249" : "A", // Kennedy Institute of Ethics journal
	"0040-5671" : "A", // Theologische Literaturzeitung !!pppn
	"0889-048X" : "A", // Agriculture and human values !!pppn
	"1572-8366" : "A", // Agriculture and human values !!eppn
	"1386-2820" : "A", // Ethical theory and moral practice !!pppn
	"1572-8447" : "A", // Ethical theory and moral practice !!eppn
	"1187-7863" : "A", // Journal of agricultural and environmental ethics !!pppn
	"1573-322X" : "A", // Journal of agricultural and environmental ethics !!eppn
	"1468-2265" : "A", // Heythrop journal !!eppn
	"1468-0025" : "O", // Modern theology !!eppn
	"0031-2789" : "O", // Pastoral psychology !!pppn
	"1573-6679" : "O", // Pastoral psychology !!eppn
	"0031-2789, 1573-6679" : "O", // Pastoral psychology
	"1364-436X" : "A", // International journal of children's spirituality !!pppn
	"0959-6410" : "O", // Islam and Christian-Muslim relations !!pppn
	"1203-1542" : "A", // The journal of Hebrew scriptures !!eppn
	"0024-5100" : "A", // Liturgisches Jahrbuch !!pppn
	"0024-5100" : "A", // Liturgisches Jahrbuch !!eppn
	"1099-0046" : "A", // Review of biblical literature !!pppn
	"1089-7747" : "A", // TC !!eppn
	"1467-9647" : "O", // Teaching theology & religion
	"1368-4868" : "O", // Teaching theology & religion
	"1540-6385" : "O", // Dialog !!eppn
	"1661-3317" : "O", // Lectio difficilior !!eppn
	"1473-4257" : "A", // Journal of medical ethics !!eppn
	"1468-2400" : "O", // International journal of systematic theology !!eppn
	"1463-1652" : "O", // International journal of systematic theology !!pppn
	"14631652" : "O", // International journal of systematic theology !!pppn
	"1466-769X" : "A", // Nursing philosophy !!eppn
	"2473-3725" : "O", // The Thomist 
	"0969-7330" : "A", // Nursing ethics !!pppn
	"1477-0989" : "A", // Nursing ethics !!eppn
	"2565-7070" : "O", // Biblica !!pppn
	"1568-5365" : "A", // Novum Testamentum !!eppn
	"1568-5330" : "A", // Vetus Testamentum !!eppn
	"1568-5179" : "A", // Dead Sea discoveries !!eppn
	"1091-6687" : "A", // Logos : a journal of catholic thought and culture !!pppn
	"1568-5152" : "A", // Biblical interpretation !!eppn
	"0003-097X" : "A", // Bulletin of the American Schools of Oriental Research !!pppn
	"0017-8160" : "A", // The Harvard theological review !!pppn
	"1475-4517" : "A", // The Harvard theological review !!eppn
	"1535-3117" : "A", // Spiritus !!eppn
	"0034-4087" : "A", // Religious education !!pppn
	"0002-7049" : "A", // America !!pppn
	"0003-0279" : "A", // Journal of the American Oriental Society !!pppn
	"00033286" : "O", // Anglican theological review !!eppp
	"0006-0895" : "A", // The Biblical archeologist !!pppn
	"1094-2076" : "O", // Near Eastern archaeology  !!pppn
	"0008-7912" : "O", // The catholic biblical quarterly !!pppn
	"00087912" : "O", // The catholic biblical quarterly !!pppn
	"0009-5281" : "A", // The Christian century !!pppn
	"0009-5281" : "A", // The Christian century !!eppn
	"0009-5753" : "A", // Christianity today !!pppn
	"0009-5753" : "A", // Christianity today !!eppn
	"0009-6407" : "O", // Church history !!pppn
	"1755-2613" : "O", // Church history !!eppn
	"1758-6623" : "A", // The ecumenical review !!eppn
	"1758-6631" : "A", // International review of mission !!eppn
	"0021-969X" : "A", // Journal of church and state !!pppn
	"2040-4867" : "A", // Journal of church and state !!eppn
	"0022-0256" : "A", // Journal of cuneiform studies !!pppn
	"0022-0558" : "A", // Journal of ecumenical studies !!pppn
	"0022-2097" : "A", // The journal of Jewish studies !!pppn - in Z. 29 mit ppn gemappt: diese Z. löschen?
	"0022-4235" : "A", // The journal of religious thought !!pppn
	"0022-4235" : "A", // The journal of religious thought !!eppn
	"0022-4480" : "O", // Journal of Semitic studies !!pppn
	"1477-8556" : "O", // Journal of Semitic studies !!eppn
	"0022-5185" : "O", // The journal of theological studies !!pppn
	"1477-4607" : "O", // The journal of theological studies !!eppn
	"0022-5185, 1477-4607" : "O", // The journal of theological studies !!eppn
	"0022-5762" : "A", // Judaism !!pppn
	"0022-5762" : "A", // Judaism !!eppn
	"0040-5736" : "A", // Theologie today !!pppn - in Z. 125 mit ppn gemappt: diese Z. löschen?
	"1570-0720" : "A", // Vigiliae Christianae !!eppn
	"1570-0631" : "A", // Journal for the study of Judaism !!eppn
	"0091-6471" : "A", // Journal of psychology and theology !!pppn - in Z. 61 mit ppn gemappt: diese Z. löschen?
	"00916471" : "A",  // Journal of psychology and theology !ohne Bindestrich im Zoterofeld
	"1552-146X" : "A", // The Hastings Center report !!eppn
	"0098-9444" : "A", // Biblical archaeology review !!pppn
	"0098-9444" : "A", // Biblical archaeology review !!eppn
	"2161-007X" : "A", // Counseling and values !!eppn
	"0163-4275" : "A", // Environmental ethics !!pppn
	"0163-4275" : "A", // Environmental ethics !!eppn
	"1572-543X" : "A", // Exchange !!eppn
	"2396-9393" : "O", // International bulletin of mission research !!pppn
	"2396-9407" : "O", // International bulletin of mission research !!eppn
	"2396-9393, 2396-9407" : "O", // International bulletin of mission research
	"0449-508X" : "A", // Journal of pastoral counseling !!pppn
	"0449-508X" : "A", // Journal of pastoral counseling !!eppn
	"0894-4857" : "A", // The Merton annual !!pppn
	"0894-4857" : "A", // The Merton annual !!eppn
	"0951-8207" : "O", // Journal for the study of the pseudepigrapha !!pppn
	"09518207" : "O", // Journal for the study of the pseudepigrapha !!pppn
	"1745-5286" : "O", // Journal for the study of the pseudepigrapha !!eppn
	"1745-5251" : "A", // Journal of pentecostal theology !!pppn - in Z. 140 mit ppn gemappt: diese Z. löschen?
	"1574-3012" : "A", // Religion & theology !!eppn
	"1052-150X" : "A", // Business ethics quarterly !!pppn
	"2153-3326" : "A", // Business ethics quarterly !!eppn
	"10942076, 23255404" : "O", // Near Eastern archaeology !!pppn
	"13549901" : "O", // Studies in world christianity !!pppn
	"1354-9901" : "O", // Studies in world christianity !!pppn
	"1355-8358" : "A", // Theology & sexuality !!pppn
	"1363-013X" : "A", // Quaker studies !!pppn
	"1363-013X" : "A", // Quaker studies !!eppn
	"1363-7320" : "A", // Ecotheology !!pppn
	"1749-4907" : "O", // Journal for the study of religion, nature and culture 
	"1462-3153" : "A", // Journal for the Aramaic bible !!pppn
	"1462-3153" : "A", // Journal for the Aramaic bible !!eppn
	"0733-4273 (PRINT)" : "A", // Journal of psychology and Christianity - oben bereits da, aber ohne (PRINT): löschen?
	"0082-7118" : "A", // Tyndale Bulletin
	"2326-6236" : "A", // The jurist: studies in church law and ministry
	"2363-6696" : "O", // Entangled Religions
	"0044-3441" : "A", // Zeitschrift für Religions- und Geistesgeschichte
	"1862-5886" : "O", // Zeitschrift für junge Religionswissenschaft
	"1612-2941" : "O", // Marburg Journal of Religion
	"0017-2251":  "A", // Christian scholar’s review
	"00172251":  "A", // Christian scholar’s review
	"0774-5524" : "A", // Questions liturgiques
	"1861-5813" : "O", // Online - Heidelberg Journal of Religions on the Internet
	"1783-1806" : "O", // Studies in Interreligious Dialogue
	"0926-2326" : "O", // Studies in Interreligious Dialogue
	"1783-1709" : "O", // Questions Liturgiques/Studies in Liturgy
	"0035-0893" : "A", // Revue bénédictine
	"1861-5813" : "O", // Online - Heidelberg Journal of Religions on the Internet
	"1867-4240" : "O", // Transformierte Buddhismen
	"1583-0039" : "O", // Journal for the Study of Religions and Ideologies
	"0360-6503" : "O", // Process studies
	"0378-2506" : "O", // Byzantion
	"2294-6209" : "O", // Byzantion
	"Byzantion" : "O", // Byzantion
	"0361-0160" : "O", // The Sixteenth Century Journal
	"03610160" : "O", // The Sixteenth Century Journal
	"0038-8610" : "A", // Concordia Theological Quarterly
	"0014-2239" : "O", // Etudes théologiques et religieuses !!pppn
	"2272-9011" : "O", // Etudes théologiques et religieuses !!eppn
	"0014-2239, 2272-9011" : "O", // Etudes théologiques et religieuses !!pppn + eppn
	"0047-2867" : "A", // ! 015194620!Journal of Theology for Southern Africa
	"0342-0914" : "A", // Lutherjahrbuch
	"0194-3448" : "O", // American journal of theology and philosophy
	"01943448, 21564795" : "O", // American journal of theology and philosophy
	"2156-4795" : "O!", // American journal of theology and philosophy
	"2199-4463" : "O", // Religion in the Roman Empire
	"21994463, 21994471" : "O", // Religion in the Roman Empire
	"0148-3331" : "O", // Christianity & literature
	"01483331" : "O", // Christianity & literature
	"2056-5666" : "O", // Christianity & literature
	"1868-8020" : "O", // Early Christianity
	"1868-7032" : "O", // Early Christianity
	"0040-5698" : "O", // Theologische Rundschau
	"0044-3549" : "O", // Zeitschrift für Theologie und Kirche
	"0944-5706" : "O", // Jewish Studies Quarterly
	"2195-9773" : "O", // Philosophy, Theology and the Sciences
	"2192-2276" : "O", // Hebrew Bible and Ancient Israel
	"00143367" : "A", // Evangelical quarterly
	"1063-8512" : "A", // Pro ecclesia
	"1890-7008, 0809-7291" : "O", // Nordic journal of religion and society 
	"0020-7047" : "O", // International Journal for Philosophy of Religion
	"00207047" : "O", // International Journal for Philosophy of Religion
	"0265-3788" : "O", // Transformation
	"0014-5246" : "O", // The Expository times
	"1745-5308" : "O", // The Expository times
	"00145246" : "O", // The Expository times
	"0014-5246, 1745-5308" : "O", // The Expository times
	"0003-1224" : "O", // American sociological review Online Publikation|krimdok
	"1862-2593" : "O", // Berliner Journal für Soziologie Online Publikation|krimdok
	"0268-5809" : "O", // International sociology Online Publikation|krimdok
	"2196-8225" : "O", // Praxis der Kinderpsychologie und Kinderpsychiatrie Online Publikation|krimdok
	"2190-6238" : "O", // Psychologische Rundschau Online Publikation|krimdok
	"1461-7439" : "O", // Theoretical criminology Online Publikation|krimdok
	"1438-9460" : "O", // Zeitschrift für Sexualforschung Online Publikation|krimdok
	"2380-8829" : "O", // The Covenant Quarterly
	"0212-1964" : "A", // Teología y catequesis 
	"14722089" : "A", //  International congregational journal 
	"1472-2089" : "A", //  International congregational journal	
	"09602720" : "A", //  European journal of theology
	"0555-9308" : "O", //  Zeitschrift für Pastoraltheologie
	"0093-531X" : "A", //  Perspectives in religious studies
	"0967-8948" : "O", // Journal of the British Association for the Study of Religions - formerly DISKUS
    "2342-7256" : "O", // Temenos : nordic journal of comparative religion
    "1799-3121" : "O", // Approaching religion
    "1677-1222" : "O", // Rever : revista de estudos da religião
	"1475-5610" : "O", // Culture and Religion
	"00224189" : "O", // Journal of Religion
	"1549-6538" : "O", // Journal of Religion
	"0022-4189" : "O", // Journal of Religion
	"1722-4705" : "O", // Religioni e società
	"0394-9397" : "O", // Religioni e società
	"17224705" : "O", // Religioni e società
	"0002-7189" : "O", // Journal of the American Academy of Religion
	"1477-4585" : "O", // Journal of the American Academy of Religion
	"0008-8080" : "O", // The catholic historical review
	"00088080" : "O", // The catholic historical review
	"0024-6964" : "O", // Louvain Studies
	"1323-6377" : "A", // Uniting Church Studies
	"0023-9054, 1703-8804" : "O", // Laval théologique et philosophique
	"0003-2468" : "O", // Analecta Bollandiana
	"0048-721X" : "O", // Religion
	"00055719" : "O", // Baptist history and heritage
	"0007-4322" : "A", // Bulletin de littérature ecclésiastique
	"0021-9231" : "A", // Journal of biblical literature !!eppn
	"00219231" : "O", // Journal of biblical literature !!eppn
	"0210-7112" : "A", // Revista española de teología
	"2466-8583" : "O", // Revue biblique
	"0039-3207" : "A", // Studia liturgica
	"0043-941X" : "A", // Worship. A review concerned with the problems of liturgical renewal
	"0022-4480, 1477-8556" : "O", // Journal of Semitic Studies
	"2304-8557" : "O", // Koers Bulletin for Christian Scholarship
	"23048557" : "O", // Koers Bulletin for Christian Scholarship
	"1088-6923" : "A", // Affirmation & Critique
	"1155-3316" : "A", // Apocrypha
	"00666785" : "O", // Archivum Historiae Pontificiae
	"0009-6407, 1755-2613" : "O", // Church History
	"0013-9513" : "O", // Ephemerides theologicae Lovanienses
	"1783-1423" : "O", // Ephemerides theologicae Lovanienses
	"09329951" : "O", // Kirchliche Zeitgeschichte Internationale Zeitschrift für Theologie und Geschichtswissenschaft
	"0932-9951" : "O", // Kirchliche Zeitgeschichte Internationale Zeitschrift für Theologie und Geschichtswissenschaft
	"0081-8933" : "O", // Liber annuus
	"2312-878X" : "O", // Missionalia
	"0256-9507" : "O", // Missionalia
	"0025-8911" : "A", // Mélanges de science religieuse
	"0029-4845" : "O", // Nouvelle revue théologique
	"0035-2381" : "O", // Revue d'histoire ecclésiastique
	"2506-7567" : "O", // Revue de Qumran
	"0035-1725" : "O", // Revue de Qumran
	"0035-2209" : "A", // Revue des Sciences Philosophiques et Théologiques
	"2305-445X" : "O", // Scriptura
	"0022-0469, 1469-7637" : "O", // The Journal of Ecclesiastical History
	"0084-005X, 1813-3924" : "O", // Wiener Studien
	"0003097X" : "O", // Bulletin of the American Schools of Oriental Research
	"0003097X, 21618062" : "O", // Bulletin of the American Schools of Oriental Research
	"2365-3140" : "O", // Interdisciplinary journal for religion and transformation in contemporary society
	"18630502" : "O", //Theo-Web Zeitschrift für Religionspädagogik
	"1863-0502" : "O", //Theo-Web Zeitschrift für Religionspädagogik
	"1015-8758" : "O", // Acta Theologica
	"1015-8758, 2309-9089" : "O", // Acta Theologica
	"2309-9089" : "O", // Acta Theologica
	"10158758" : "O", // Acta Theologica
	"1862-1678" : "O", // theologie.geschichte
	"1983-2850" : "O", // Revista Brasileira de História das Religiões 
	"19832850" : "O", // Revista Brasileira de História das Religiões 
	"2179-0019" : "O", // Plura, revista de estudos de religião
	"21790019" : "O", // Plura, revista de estudos de religião
	"2175-5841" : "O", // Horizonte
	"2371-2295" : "O", // Œcuménisme / Ecumenism
	"0383-431X" : "O", // Œcuménisme / Ecumenism
	"2159-6875" : "O", // Jonathan Edwards studies
	"2001-8819" : "O", // De Ethica
	"20018819" : "O", // De Ethica
	"2408-9370" : "O", // Journal for religion, film and media
	"2414-0201" : "O", // Journal for religion, film and media
	"2159-8711" : "O", // Journal for the sociological integration of religion and society
	"1783-1520" : "A", // Journal of Eastern Christian studies
	"0035-1423" : "O", // Histoire des Religions
	"1869-3261" : "O", // Diaconia
	"0043-2547" : "O", // Die Welt des Orients
	"00432547" : "O", // Die Welt des Orients
	"2191-0456" : "A", // Hikma
	"1869-3296" : "O", // Journal of ancient Judaism
	"0018-4276" : "O", // Homiletische Monatshefte
	"1179-7231" : "O", // Relegere
	"1553-9962" : "O", // Religion and Society in Central and Eastern Europe
	"2006-5442" : "O", // Journal of religion and human relations
	"0031-8159" : "O", // Philosophische Rundschau
	"00318159" : "O", // Philosophische Rundschau
	"1980-6736" : "O", // Teocomunicação
	"2365-6565" : "O", // Ethik und Gesellschaft
	"2053-6712" : "O", // Secularism and Nonreligion
	"2011-9771" : "O", // Revista Albertus Magnus
	"2413-9459" : "O", // Stellenbosch Theological Journal = Stellenbosch Teologiese Joernaal (STJ) 
	"2509-9957, 2509-9965" : "O", // International journal of Latin American religions
	"2176-1078" : "O", // Estudos de religião
	"1386-2820, 1572-8447" : "O", // Ethical theory and moral practice
	"1572-8447" : "O", // Ethical theory and moral practice
	"1386-2820" : "O", // Ethical theory and moral practice
	"00312789" : "O", // Pastoral psychology
	"0038-1527, 1873-930X" : "O", // Sophia
	"0022-4197, 1573-6571" : "O", // Journal of Religion and Health
	"1573-6571" : "O", // Journal of Religion and Health
	"0022-4197" : "O", // Journal of Religion and Health
	"2555-5111" : "O", // Journal international de bioéthique et d'éthique des sciences
	"00378887" : "O", // Archivum historicum Societatis Iesu
	"2295-6093" : "O", // Augustiniana
	"0045-0308" : "A", // Australian biblical review
	"00450308" : "A", // Australian biblical review
	"1886-4945" : "A", //  Cauriensia
	"1133-0104" : "A", // Anuario de historia de la Iglesia 
	"0010-3497" : "O", // Communicatio Socialis
	"1930-1200" : "A", // Contagion
	"1075-7201" : "A", // Contagion
	"1666-7832" : "O", // DavarLogos
	"0210-1610" : "O", // Estudios eclesiásticos
	"1945-9718" : "O", // Franciscan Studies
	"0080-5459" : "O", // Franciscan Studies
	"0018-215X" : "O", // Hispania Sacra
	"2267-7313" : "A", // Histoire, monde et cultures religieuses
	"0360-9669, 2050-8557" : "A", // Horizons
	"1740-3553, 1745-5278" : "O", // Journal of Anglican Studies
	"1467-9809" : "O", // Journal of religious history
	"0210-2900" : "A", // Mayéutica
	"0030-252X" : "A", // One in Christ
	"1783-1652" : "O", // Ons Geestelijk Erf
	"0034-1258" : "O", // Recherches de science religieuse
	"2055-7973, 2055-7981" : "O", // British Catholic 
	"1467-9647" : "O", // Teaching theology & religion
	"1768-9260" : "A", // Revue d'Etudes Augustiniennes et Patristiques
	"1783-8401" : "O", // Revue Théologique de Louvain
	"0316-5345" : "A", // Science et Esprit
	"1097-6566" : "A", // Stone-Campbell journal
	"2295-3019" : "A", // Studia Canonica
	"0039-6761" : "O", // Swedish Theological Quarterly
	"2295-5186" : "A", // Theoforum
	"1495-7922" : "A", // Theoforum
	"0169-7536" : "A", // Zeitschrift für Dialektische Theologie
	"0270-2533" : "O", // Trinity Seminary Review
	"02702533" : "O", // Trinity Seminary Review
	"0254-4407" : "A", // Zwingliana
	"1520-7307" : "O", // The Southern Baptist Journal of Theology
	"2031-5929" : "A", // Annali di Scienze Religiose
	"0034-673X, 2211-4866" : "O", // Review of Religious Research
	"1468-5906" : "O", // Journal for the Scientific Study of Religion
	"00218294" : "O", // Journal for the Scientific Study of Religion
	"03938417" : "O", // Studi e materiali di storia delle religioni
	"1069-4404, 1759-8818" : "O", // Sociology of religion
	"1553-3913" : "O", // Journal of feminist studies in religion
	"87554178, 15533913" : "O", // Journal of feminist studies in religion
	"1050-8619" : "O", // The International Journal for the Psychology of Religion
	"2056-9971" : "O", // International journal of Christianity & education
	"1749-8171" : "O", // Religion compass
	"1092-6690, 1541-8480" : "O", // Nova religio
	"0075-2584" : "A", // Jahrbuch für christliche Sozialwissenschaften
	"0044-2690" : "A", // Zeitschrift fuer Evangelisches Kirchenrecht
	"1011-7601" : "O", // Journal for the Study of Religion
	"1889-5662" : "A", // Facies Domini
	"0212-1964" : "A", // Teología y catequesis
	"0392-2855" : "A", // Analecta Augusiniana
	"0003-6064" : "A", // Antonianum
	"0392-2359" : "A", // Apollinaris
	"1591-2957" : "A", // Archivio teologico torinese
	"0210-1629" : "A", // Archivo teológico Granadino
	"0004-0665" : "A", // Archivum Franciscanum historicum
	"0004-802X" : "A", // Augustinus
	"0210-0398" : "A", // Ciencia Tomista
	"0425-1466" : "A", // Ephemerides Mariologicae
	"0210-7074" : "A", // Estudios josefinos
	"0210-0363" : "A", // Estidios trinitarios
	"0178-1626" : "A", // Forum Katholische Theologie
	"1124-1225" : "A", // Hagiographica
	"0253-620X" : "A", // Indian theological studies
	"0021-0978" : "A", // Irénikon
	"0021-2423" : "A", // Istina
	"0021-3209" : "A", // Itinerarium
	"1010-7215" : "A", // Lateranum
	"0076-1508" : "A", // Lusitania sacra
	"0211-2582" : "A", // Misiones extranjeras
	"0580-1400" : "A", // Münchener theologische Zeitschrift
	"0031-529X" : "A", // Periodica di re canonica
	"0210-3877" : "A", // Phase
	"0032-9622" : "A", // Proche-Orient chrétien
	"1122-5661" : "A", // Recollectio
	"0211-612X" : "A", // Revista agustiniana
	"0034-8147" : "A", // Revista de espiritualidad
	"0036-3537" : "A", // Salmanticensis
	"0559-2186" : "A", // Scriptorium Victoriense
	"0049-2353" : "A", // Stromata
	"0039-3258" : "A", // Studia monastica
	"0585-766X" : "A", // Studium revista de filosofía y teología
	"0392-4556" : "A", // Teresianum
	"0342-1465" : "A", // Una Sancta
	"0042-3718" : "A", // Verdad y vida
	"0009-7756" : "A", // Ciudad de Dios
	"0017-4114" : "A", // Gregorianum
	"21509301" : "O", //  Religion and society
	"2150-9298, 2150-9301" : "O", //  Religion and society
	"Calvin Theological Journal" : "O", // Calvin Theological Journal
	"2593-0486" : "O", // Marriage, Families and Spirituality
	"00027650" : "A", // The American Benedictine Review
	"0002-7650" : "A", // The American Benedictine Review
	"0008-8501" : "O", // Catholica
	"00105236" : "A", // Concilium - Englische Ausgabe !!!!
	"0010-5236" : "A", // Concilium - Englische Ausgabe !!!!
	"00180645" : "A", // Herder Korrespondenz
	"0014-1437" : "A", // Estudios Biblicos
	"1689-8311" : "O", // European Journal for Philosophy of Religion
	"1025-6555, 1814-2036" : "A", // Mitteilungen zur Christlichen Archäologie
	"2565-7348" : "O", // Tijdschrift voor Theologie
	"0039-6761" : "O", // Svensk teologisk kvartalskrift
	"0044-3123" : "A", // Zeitschrift für Missionswissenschaft und Religionswissenschaft
	"1120267X" : "A", // Teologia, rivista della Facoltà Teologica dell'Italia Settentrionale
	"20536267" : "A", // The Huguenot Society Journal
	"0340-6210" : "A", // Luther
	"0026587X" :"A", // Miscellanea Francescana
	"0340-6407" : "A", // Oriens Christianus
	"0030-6487" : "A", // Ostkirchliche Studien
	"1529-1634" : "A", // Philosophia Christi
	"0033-1767" : "A", // Protestantesimo
	"0172-6943" : "A", // Pietismus und Neuzeit
	"1127-2171" : "A", // Studi sull'Oriente Cristiano
	"1100-2298" : "A", // Svensk exegetisk årsbok
	"03449254" : "A", // Unitas Fratrum
	"03933849" : "A", // Rivista di scienze dell'educazione
	"1120-8333" : "A", // Ricerche Teologiche
	"0049-3449" : "O", // Teologia y vida
	"0049-3449,  0717-6295" : "O", // Teologia y vida
	"1550-4891" : "A", // Cultural encounters
	"2295-3027" : "A", // Studia Canonica
	"0035-2403" : "A", // Revue d'histoire et de philosophie religieuses
	"1359-1835" : "O", // Journal of material culture
	"1460-3586" : "O", // Journal of material culture
	"0272-6122" : "O", // International Bulletin of Mission Research
	"0458-063X" : "O", // Liturgy
	"0041-2945" : "A", // Trierer Theologische Zeitschrift
	"1749-4907, 1749-4915" : "O", // Journal for the Study of Religion, Nature and Culture
	"17494907" : "O", // Journal for the Study of Religion, Nature and Culture
	"1534-8423" : "O", // Journal of Media and Religion
	"1888-346X" : "O", // Bandue: revista de la Sociedad Española de Ciencias de las Religiones
	"2035-6455" : "O", // Historia Religionum
	"1743-2200" : "O", // Material Religion : The Journal of Objects, Art and Belief 
	"2049-7555, 2049-7563" : "A" , // Journal for the Cognitive Science of Religion
	"2049-7555" : "A" , // Journal for the Cognitive Science of Religion
	"2049-7563" : "A" , // Journal for the Cognitive Science of Religion
	"21568022" : "A", // Mormon studies Review
	"2041-1863, 2041-1871" :"O", // Bulletin for the Study of Religion
	"2041-1863" : "O", // Bulletin for the Study of Religion
	"2041-1871" : "O", // Bulletin for the Study of Religion
	"0963-7494" : "O", // Religion, State and Society
	"0210-0851" : "A", // Moralia: revista de ciencias morales
	"0727-3215" : "O", // Austalasian Catholic Record
	"0094-7342" : "O", // Journal of the Mormon History
	"00339644" : "A", // Rassegna di Teologia
	"00122157" : "O", // Dialogue: A Journal of Mormon Thought
	"0392-7288" : "A", // Islamochristiana
	"0304-1042" : "O", // Japanese Journal of Religious Studies
	"1904-8181" : "O", // Religionsvidenskabeligt Tidsskrift
	"23258780" : "A", // journal for spiritual and consciousness studies
	"1527-9472" : "O", // Buddhist-Christian Studies
	"08820945" : "O", // Buddhist-Christian Studies
	"0882-0945" : "O", // Buddhist-Christian Studies
	"0737-769X" : "O", // Journal of Chinese Religions
	"2047704X" : "O", // Journal for the Academic Study of Religion
	"2047-704X" : "O", // Journal for the Academic Study of Religion
	"1031-2943, 1744-9014" : "O", // Journal for the Academic Study of Religion
	"1052-1151, 1533-8568" : "O", // Religion and American Culture 
	"1533-8568" : "O", // Religion and American Culture 
	"1052-1151" : "O", // Religion and American Culture 
	"1467-9418" : "O", // Reviews in Religion & Theology
	"1216-7827" : "A", // Shaman
	"23744766" : "O", // Journal of Book of Mormon Studies
	"2374-4774" : "O", // Journal of the Book of Mormon Studies
	"1361-7672" : "O", // Journal of Beliefs & Values
	"1353-7903" : "O", // Journal of Contemporary Religion
	"2154-7270" : "O", // International Journal of Cultic Studies
	"1463-9947" : "O", // Contemporary Buddhism
	"0718-4727" : "O", // Revista Cultura & Religión
	"00128708" : "O", // Eastern Buddhist
	"1743-0615" : "O", // Fieldwork in Religion
	"1743-0623" : "O", // Fieldwork in Religion
	"1743-0615, 1743-0623" : "O", // Fieldwork in Religion
	"14639955" : "O", // Implicit Religion
	"1463-9955" : "O", // Implicit Religion
	"14639955, 17431697" : "O", // Implicit Religion
	"1527-6457" : "O", // Journal of Global Buddhism
	"2167-2040" : "O", // Journal of Korean Religions
	"2093-7288" : "O", // Journal of Korean Religions
	"1703-289X" : "O", // The Journal of Religion and Popular Culture
	"2153-599X" : "O", // Religion, Brain & Behavior
	"1983-7828" : "O", // Fragmentos de Cultura
	"2159-3159" : "O", // Greek, Roman, and Byzantine Studies
	"0017-3916" : "O", // Greek, Roman, and Byzantine Studies
	"1757-2460, 1757-2479" : "O", // Journal for Research into Freemasonry and Fraternalism
	"1757-2460" : "O", // Journal for Research into Freemasonry and Fraternalism
	"1757-2479" : "O", // Journal for Research into Freemasonry and Fraternalism
	"1357-6275" : "O", // Mortality
	"22366296" : "O", // Numen
	"2236-6296" : "O", // Numen
	"2196-6265" : "O", // Jahrbuch für Christliche Sozialwissenschaften
	"0004-8011" : "O", // Augustinianum
	"1065223X" : "O", // Bulletin of the Biblical Research
	"1065-223X" : "O", // Bulletin of the Biblical Research
	"0026-1238" : "O", // Methodist History
	"10626549" : "O", // Cistercian studies quarterly
	"0745-3698" : "A", // American Baptist Quarterly
	"03799557" : "O", // Theological review
	"0036-9764" : "O", // Scripta Theologica
	"01448153" : "O", // Evangelical Review of Theology
	"2470-5616" : "O", // Lutheran Quarterly
	"0335-5985" : "O", // Archives de sciences sociales des religions
	"00027049" : "O", // America
	"2589-3998" : "O", // Yearbook of ritual and liturgical studies
	"00244414" : "A", // Listening, Journal of Communication Ethics, Religion, and Culture
	"1756-073X" : "O", // Practical Theology
	"0030-5375" : "A", // Orientalia christiana periodica
	"2385-2062" : "O", // Biblica
	"0006-0887" : "O", // Biblica
	"2565-7070" : "O", // Biblica
	"0035-1784" : "O", // Revue de théologie et de philosophie
	"2047704X" : "O", // Journal for the Academic Study of Religion
	"1031-2943, 1744-9014" : "O", // Journal for the Academic Study of Religion
	"1052-1151, 1533-8568" : "O", // Religion and American Culture
	"2297-6469" : "O", // Zeitschrift für Religionskunde
	"Perspectives in Religious Studies" : "A", //Perspectives in religious studies Print-PPN
	"0739-8913" : "O", // Christian Education Journal
	"2589-0468" : "O", // Biblische Zeitschrift
	"1930-3777" : "O", // Studies in Christian-Jewish Relations
	"2041-3599, 1871-7691" : "O", // PentecoStudies
	"2041-3599" : "O", // PentecoStudies
	"1871-7691" : "O", // PentecoStudies
	"18717691" : "O", // PentecoStudies
	"2331-2521" : "O", // Journal of disability & religion
	"2044-0243" : "O", // Journal for the Study of Spirituality
	"1941-1022" : "O", // Psychology of Religion and Spirituality
	"1755-0483, 1755-0491" : "O", // Politics and Religion
	"1755-0483" : "O", // Politics and Religion
	"1755-0491" : "O", // Politics and Religion
	"2161-8534" : "O", // American Catholic Studies
	"2317-4307" : "O", // Revista de Cultura Teológica
	"0005-576X" : "O", // Baptist quarterly
	"1476-9948" : "O", // Black Theology
	"2237-6461" : "O", // Estudos Teológicos
	"2164-6279" : "O", // Journal of Hindu-Christian Studies 
	"1933-6632" : "O", // Journal of Moravian History
	"19336632, 21616310" : "O", // Journal of Moravian History
	"1533-791X" : "O", // Logos
	"Journal of the Evangelical Theological Society" : "O", // Journal of the Evangelical Theological Society Print-PPN
	"American Baptist Quarterly" : "A", // American Baptist Quarterly Print-PPN
	"Churchman" : "A", // Churchman Print-PPN
	"Liturgisches Jahrbuch" : "A", // Liturgisches Jahrbuch Print-PPN
	"The Mennonite Quarterly Review" : "A", // The Mennonite Quarterly Review Print-PPN
	"Journal of Theological Interpretation" : "O", // Journal of Theological Interpretation E-PPN
	"2326-2176" : "O", // Journal of the Society of Christian Ethics
	"Oriens Christianus" : "A", // Oriens Christianus Print-PPN
	"08194920" : "O", // Phronema
	"Phronema" : "O", // Phronema E-PPN
	"Word & World" : "O", // Word & World E-PPN
	"09602720" : "O", // European Journal of Theology
	"1918-6371" : "O", // Toronto Journal of Theology
	"1188-7109, 1492-1413" : "O", // Théologiques
	"1492-1413" : "O", // Théologiques
	"1188-7109" : "O", // Théologiques
	"Ephemerides Theologicae Lovanienses" : "O", // Ephemerides theologicae Lovanienses
	"Lumen Vitae" : "O", // Lumen Vitae E-PPN
	"Religion and Society" : "A", // Religion and Society Print-PPN
	"Counseling et spiritualité / Counselling and Spirituality" : "O", // Counseling et spiritualité / Counselling and Spirituality E-PPN
	"Detroit Baptist Seminary Journal" : "O", // Detroit Baptist Seminary Journal E-PPN
	"One in Christ" : "A", // One in Christ Print-PPN
	"The Reformed Theological Review" : "O", // The Reformed Theological Review E-PPN
	"Philosophia Christi" : "O", // Philosophia Christi
	"0107-4164" : "O", // Grundtvig-Studier
	"0020-157x" : "O", // Innes Review
	"18277365" : "O", // Rivista di Storia del Cristianesimo
	"2054-1988" : "O", // Journal of Holy Land and Palestine Studies
	"0047-8105" : "O", // Moreana
	"Anglican and Episcopal History" : "A", // Anglican and Episcopal History
	"Foi et vie" : "O", // Foi et vie
	"Protestantesimo" : "A", // Protestantesimo
	"Ethical Perspectives" : "O", // Ethical Perspectives
	"Journal of Eastern Christian Studies" : "O", // Journal of Eastern Christian Studies
	"Antonianum" : "A", // Antonianum
	"Dialogue & Alliance" : "A", // Dialogue & Alliance
	"Luther" : "A", // Luther, Zeitschrift der Luthergesellschaft
	"Journal of Eastern Christian Studies" : "O", // Journal of Eastern Christian Studies
	"American Journal of Theology & Philosophy" : "O", // American journal of theology and philosophy
	"Louvain Studies" : "O", // Louvain Studies
	"2518-4628" : "O", // Neotestamentica
	"0254-8356, 2518-4628" : "O", // Neotestamentica
	"Science et Esprit" : "A", // Science et Esprit
	
	
};

var issnLicenceFieldMapping = {
	"1550-0195" : "l",
	"1661-3317" : "l", // Lectio difficilior !!eppn
	"2363-6696" : "l", // Entangled Religions
	"1862-5886" : "l", // Zeitschrift für junge Religionswissenschaft
	"1612-2941" : "l", // Marburg Journal of Religion
	"1861-5813" : "l", // Online - Heidelberg Journal of Religions on the Internet
	"1867-4240" : "l", // Transformierte Buddhismen
	"1583-0039" : "l", // Journal for the Study of Religions and Ideologie
	"2380-8829" : "l", //The Covenant Quarterly
	"0555-9308" : "l", // Zeitschrift für Pastoraltheologie
	"0967-8948" : "l", // Journal of the British Association for the Study of Religions - formerly DISKUS
    "2342-7256" : "l", // Temenos : nordic journal of comparative religion
    "1799-3121" : "l", // Approaching religion
    "1677-1222" : "l", // Rever : revista de estudos da religião
	"00224189" : "l", // Journal of Religion
	"1549-6538" : "l", // Journal of Religion
	"0022-4189" : "l", // Journal of Religion
	"1138-4972" : "l", // 'Ílu
	"1135-4712" : "l", // 'Ílu
	"1139-1529" : "l", // 'Ílu
	"2312-878X" : "l", // Missionalia
	"0256-9507" : "l", // Missionalia
	"2305-445X" : "l", // Scriptura
	"2365-3140" : "l", // Interdisciplinary journal for religion and transformation in contemporary society
	"18630502" : "l", //Theo-Web Zeitschrift für Religionspädagogik
	"1863-0502" : "l", //Theo-Web Zeitschrift für Religionspädagogik
	"1862-1678" : "l", // theologie.geschichte
	"1983-2850" : "l", // Revista Brasileira de História das Religiões 
	"19832850" : "l", // Revista Brasileira de História das Religiões 
	"2179-0019" : "l", // Plura, revista de estudos de religião
	"21790019" : "l", // Plura, revista de estudos de religião
	"2175-5841" : "l", // Horizonte
	"1092-1311" : "l", // The journal of religion and film
	"2159-6875" : "l", // Jonathan Edwards studies
	"2001-8819" : "l", // De Ethica
	"20018819" : "l", // De Ethica
	"2408-9370" : "l", // Journal for religion, film and media
	"2414-0201" : "l", // Journal for religion, film and media
	"2159-8711" : "l", // Journal for the sociological integration of religion and society
	"1179-7231" : "l", // Relegere
	"1553-9962" : "l", // Religion and Society in Central and Eastern Europe
	"2006-5442" : "l", // Journal of religion and human relations
	"1980-6736" : "l", // Teocomunicação
	"2365-6565" : "l", // Ethik und Gesellschaft
	"2053-6712" : "l", // Secularism and Nonreligion
	"2011-9771" : "l", // Revista Albertus Magnus
	"2413-9459" : "l", // Stellenbosch Theological Journal = Stellenbosch Teologiese Joernaal (STJ) 
	"2176-1078" : "l", // Estudos de religião
	"1689-8311" : "kw", // European Journal for Philosophy of Religion
	"0049-3449" : "l", // Teologia y vida
	"0304-1042" : "l", // Japanese Journal of Religious Studies
	"0718-4727" : "l", // Revista Cultura & Religión
	"1983-7828" : "l", // Fragmentos de Cultura
	"2159-3159" : "l", // Greek, Roman, and Byzantine Studies
	"0017-3916" : "l", // Greek, Roman, and Byzantine Studies
	"22366296" : "l", // Numen
	"2236-6296" : "l", // Numen
	"1011-7601" : "l", // Journal for the Study of Religion
	"2589-3998" : "l", // Yearbook of ritual and liturgical studies
	"1520-7307" : "l", // The Southern Baptist Journal of Theology
	"2297-6469" : "l", // Zeitschrift für Religionskunde
	"1930-3777" : "l", // Studies in Christian-Jewish Relations
	"1904-8181" : "l", // Religionsvidenskabeligt Tidsskrift
	"2317-4307" : "l", // Revista de Cultura Teológica
	"2237-6461" : "l", // Estudos Teológicos
	"Word & World" : "l", // Word & World E-PPN
	"Detroit Baptist Seminary Journal" : "l", // Detroit Baptist Seminary Journal E-PPN
	"1015-8758" : "l", // Acta Theologica
	"10158758" : "l", // Acta Theologica
	"2309-9089" : "l", // Acta Theologica
	"1015-8758, 2309-9089" : "l", // Acta Theologica
	"01188534" : "l", // Asian journal of pentecostal studies
	"0118-8534" : "l", // Asian journal of pentecostal studies
	

	
	
};

var issnSsgMapping = {
	"0044-3441" : "0; 1", // Zeitschrift für Religions- und Geistesgeschichte
	"1570-0739" : "0; 1", // Zeitschrift für Religions- und Geistesgeschichte
	"1862-5886" : "0", // Zeitschrift für junge Religionswissenschaft
	"1612-2941" : "0", // Marburg Journal of Religion
	"2363-6696" : "0", // Entangled Religions
	"0943-3058" : "0", // Method and theory in the study of religion
	"1570-0682" : "0", // Method and theory in the study of religion
	"0141-6200" : "0; 1", // British Journal of Religious Education
	"1749-4907" : "0; 1", // Journal for the study of religion, nature and culture
	"17494907" : "0; 1", // Journal for the Study of Religion, Nature and Culture
	"1749-4907, 1749-4915" : "0; 1", // Journal for the Study of Religion, Nature and Culture
	"1094-2076" : "1", // Near Eastern archaeology
	"1574-3012" : "0; 1", // Religion & theology
	"1023-0807" : "0; 1", // Religion & theology
	"0022-5762" : "0; 1", // Judaism
	"1570-0631" : "0; 1", // Journal for the study of Judaism
	"0022-4480" : "0; 1", // Journal of Semitic studies !!pppn
	"1477-8556" : "0; 1", // Journal of Semitic studies !!eppn
	"0022-4235" : "0; 1", // The journal of religious thought
	"0022-2097" : "0; 1", // The journal of Jewish studies
	"0003-0279" : "0; 1", // Journal of the American Oriental Society
	"0591-2385" : "0", // Zygon
	"1467-9744" : "0", // Zygon
    "0891-5881" : "0", // Dialogue and alliance
	"0037-7686" : "0; 1", // Social compass
	"1461-7404" : "0; 1", // Social compass
	"0018-2613" : "0; 1", // Historische Zeitschrift
	"1135-4712" : "0", // 'Ílu
	"0888-3769" : "0; 1", // Religion and literature
	"0029-4500" : "0; 1", // Religion and literature
	"0034-4125" : "0", // Religious studies 
	"1469-901X" : "0", // Religious studies
	"0034-4125, 1469-901X" : "0", // Religious studies
	"0018-2710" : "0", // History of religions
	"1545-6935" : "0", // History of religions
	"0384-9694" : "0; 1", // Journal of religious ethics
	"1467-9795" : "0; 1", // Journal of religious ethics
	"0022-4200" : "0", // Journal of religion in Africa
	"1570-0666" : "0", // Journal of religion in Africa
	"1092-6690" : "0", // Nova religio
	"1541-8480" : "0", // Nova religio
	"1079-9265" : "0; 1", // Religion and the arts
	"1568-5292" : "0; 1", // Religion and the arts
	"0008-4298" : "0", // Studies in religion = Sciences religieuses
	"2042-0587" : "0", // Studies in religion = Sciences religieuses
	"1380-7854" : "0; 1", // Medieval encounters
	"1570-0674" : "0; 1", // Medieval encounters
	"0319-485X" : "0", // Religious studies review
	"1748-0922" : "0", // Religious studies review
	"0497-1817" : "0; 1", // Temenos
	"2342-7256" : "0; 1", // Temenos
	"0890-1112" : "0", // Journal of ritual studies
	"0011-1953" : "0; 1", // Cross currents
	"1939-3881" : "0; 1", // Cross currents
	"00111953" : "0; 1", // Cross currents
	"19393881" : "0; 1", // Cross currents
	"0229-2807" : "0; 1", // ARC
	"1934-9637" : "0; 1", // Journal of spirituality in mental health
	"1934-9645" : "0; 1", // Journal of spirituality in mental health
	"1023-0807" : "0; 1", // Religion and theology  
	"1574-3012" : "0; 1", // Religion and theology
	"0926-6453" : "1", // Studies in spirituality
	"1783-1814" : "1", // Studies in spirituality
	"0809-7291" : "0; 1", // Nordic journal of religion and society 
	"0802-0167" : "0; 1", // Nordic journal of religion and society
	"1890-7008" : "0; 1", // Nordic journal of religion and society 
	"1069-4404" : "0; 1", // Sociology of religion
	"1759-8818" : "0; 1", // Sociology of religion
	"0029-5973" : "0", // Numen PISSN
	"1568-5276" : "0", // Numen EISSN
	"0935-7335" : "0; 1", // Ethik in der Medizin 
	"1437-1618" : "0; 1", // Ethik in der Medizin
	"1209-9392" : "0; 1", // Women in Judaism
	"0305-7240" : "0; 1", // Journal of moral education !!pppn
	"1465-3877" : "0; 1", // Journal of moral education !!eppn
	"0269-9702" : "0; 1", // Bioethics !!pppn
	"1467-8519" : "0; 1", // Bioethics !!eppn
	"1468-2303" : "0; 1", // History and theory !!eppn
	"0018-2656" : "0; 1", // History and theory !!pppn
	"1092-1311" : "0", // The journal of religion and film
	"1086-3222" : "0; 1", // Journal of the history of ideas !!eppn
	"0022-5037" : "0; 1", // Journal of the history of ideas !!pppn
	"1469-5103" : "0; 1", // The historical journal !!eppn
	"0018-246X" : "0; 1", // The historical journal !!pppn
	"1469-2147" : "0; 1", // Cambridge quarterly of healthcare ethics !!eppn
	"0963-1801" : "0; 1", // Cambridge quarterly of healthcare ethics !!pppn
	"0014-701X" : "0", // Faith and freedom
	"0283-8486" : "0", // Journal of prehistoric religion
	"1861-5813" : "0", // Online - Heidelberg Journal of Religions on the Internet
	"0342-2356" : "0; 1", // Ugarit-Forschungen
	"1086-3249" : "0; 1", // Kennedy Institute of Ethics journal
	"0889-048X" : "0; 1", // Agriculture and human values !!pppn
	"1572-8366" : "0; 1", // Agriculture and human values !!eppn
	"1187-7863" : "0; 1", // Journal of agricultural and environmental ethics !!pppn
	"1573-322X" : "0; 1", // Journal of agricultural and environmental ethics !!eppn
	"1468-2265" : "0; 1", // Heythrop journal !!eppn
	"1364-436X" : "0; 1", // International journal of children's spirituality !!pppn
	"0959-6410" : "0; 1", // Islam and Christian-Muslim relations !!pppn
	"1203-1542" : "0; 1", // The journal of Hebrew scriptures !!eppn
	"1467-9647" : "1", // Teaching theology & religion !!eppn
	"1473-4257" : "0; 1", // Journal of medical ethics !!eppn
	"0969-7330" : "0; 1", // Nursing ethics !!pppn
	"1477-0989" : "0; 1", // Nursing ethics !!eppn
	"0003-097X" : "0; 1", // Bulletin of the American Schools of Oriental Research !!pppn
	"0034-4087" : "0; 1", // Religious education !!pppn
	"0022-0256" : "0; 1", // Journal of cuneiform studies !!pppn
	"1552-146X" : "0; 1", // The Hastings Center report
	"0163-4275" : "0; 1", // Environmental ethics
	"1783-1806" : "0; 1", // Studies in Interreligious Dialogue
	"0926-2326" : "0; 1", // Studies in Interreligious Dialogue
	"1867-4240" : "0", // Transformierte Buddhismen
	"1583-0039" : "0", // Journal for the Study of Religions and Ideologies
	"0378-2506" : "0; 1", // Byzantion 
	"2294-6209" : "0, 1", // Byzantion
	"Byzantion" : "0; 1", // Byzantion
	"0944-5706" : "0; 1", // Jewish Studies Quarterly
	"2199-4463" : "0", // Religion in the Roman Empire
	"1890-7008, 0809-7291" : "0; 1", // Nordic journal of religion and society
	"0003-1224" : "FID-KRIM-DE-21", // American sociological review Online Publikation|krimdok
	"1862-2593" : "FID-KRIM-DE-21", // Berliner Journal für Soziologie Online Publikation|krimdok
	"0268-5809" : "FID-KRIM-DE-21", // International sociology Online Publikation|krimdok
	"2196-8225" : "FID-KRIM-DE-21", // Praxis der Kinderpsychologie und Kinderpsychiatrie Online Publikation|krimdok
	"2190-6238" : "FID-KRIM-DE-21", // Psychologische Rundschau Online Publikation|krimdok
	"1461-7439" : "FID-KRIM-DE-21", // Theoretical criminology Online Publikation|krimdok
	"1438-9460" : "FID-KRIM-DE-21", // Zeitschrift für Sexualforschung Online Publikation|krimdok
	"1890-7008, 0809-7291" : "0; 1", // Nordic journal of religion and society 
	"2380-8829" : "1", //The Covenant Quarterly
	"0967-8948" : "0", // Journal of the British Association for the Study of Religions - formerly DISKUS
    "2342-7256" : "0", // Temenos : nordic journal of comparative religion
    "1799-3121" : "0", // Approaching religion
    "1677-1222" : "0; 1", // Rever : revista de estudos da religião
	"1475-5610" : "0; 1", // Culture and Religion
	"00224189" : "0", // Journal of Religion
	"1549-6538" : "0", // Journal of Religion
	"0022-4189" : "0", // Journal of Religion
	"1722-4705" : "0", // Religioni e società
	"0394-9397" : "0", // Religioni e società
	"17224705" : "0", // Religioni e società
	"0002-7189" : "0", // Journal of the American Academy of Religion
	"1477-4585" : "0", // Journal of the American Academy of Religion
	"1138-4972" : "0", // 'Ílu
	"1135-4712" : "0", // 'Ílu
	"1139-1529" : "0", // 'Ílu
	"0048-721X" : "0", // Religion
	"18630502" : "1", //Theo-Web Zeitschrift für Religionspädagogik
	"1863-0502" : "1", //Theo-Web Zeitschrift für Religionspädagogik
	"2365-3140" : "0", // Interdisciplinary journal for religion and transformation in contemporary society
	"1983-2850" : "0", // Revista Brasileira de História das Religiões 
	"19832850" : "0", // Revista Brasileira de História das Religiões 
	"2179-0019" : "0; 1", // Plura, revista de estudos de religião
	"21790019" : "0; 1", // Plura, revista de estudos de religião
	"2175-5841" : "0", // Horizonte
	"2159-6875" : "1", // Jonathan Edwards studies
	"2408-9370" : "0; 1", // Journal for religion, film and media
	"2414-0201" : "0; 1", // Journal for religion, film and media
	"2159-8711" : "0; 1", // Journal for the sociological integration of religion and society
	"0035-1423" : "0", // Histoire des Religions
	"2191-0456" : "0", // Hikma
	"1869-3296" : "0; 1", // Journal of ancient Judaism
	"1179-7231" : "0; 1", // Relegere
	"1553-9962" : "0", // Religion and Society in Central and Eastern Europe
	"2006-5442" : "0", // Journal of religion and human relations
	"2053-6712" : "0", // Secularism and Nonreligion
	"2509-9957, 2509-9965" : "0", // International journal of Latin American religions
	"0022-4197, 1573-6571" : "0", // Journal of Religion and Health
	"1573-6571" : "0", // Journal of Religion and Health
	"0022-4197" : "0", // Journal of Religion and Health
	"1467-9809" : "0", // Journal of religious history
	"0034-673X, 2211-4866" : "0; 1", // Review of Religious Research
	"03938417" : "0", // Studi e materiali di storia delle religioni
	"1069-4404, 1759-8818" : "0; 1", // Sociology of religion
	"1553-3913" : "0; 1", // Journal of feminist studies in religion
	"87554178, 15533913" : "0; 1", // Journal of feminist studies in religion
	"1050-8619" : "0; 1", // The International Journal for the Psychology of Religion
	"1468-5906" : "0; 1", // Journal for the Scientific Study of Religion
	"00218294" : "0; 1", // Journal for the Scientific Study of Religion
	"1749-8171" : "0", // Religion compass
	"1092-6690, 1541-8480" : "0", // Nova religio
	"1011-7601" : "0", // Journal for the Study of Religion
	"21509301" : "0", //  Religion and society
	"2150-9298, 2150-9301" : "0", //  Religion and society
	"2150-9301" : "0", //  Religion and society
	"2267-7313" : "0; 1", // Histoire, monde et cultures religieuses
	"1689-8311" : "0; 1", // European Journal for Philosophy of Religion
	"00207047" : "0; 1", // International Journal for Philosophy of Religion
	"1359-1835" : "0", // Journal of material culture
	"1460-3586" : "0", // Journal of material culture
	"1534-8423" : "0; 1", // Journal of Media and Religion
	"1888-346X" : "0", // Bandue: revista de la Sociedad Española de Ciencias de las Religiones
	"2035-6455" : "0", // Historia Religionum
	"1743-2200" : "0", // Material Religion : The Journal of Objects, Art and Belief 
	"2049-7555, 2049-7563" : "0" , // Journal for the Cognitive Science of Religion
	"2049-7555" : "0" , // Journal for the Cognitive Science of Religion
	"2049-7563" : "0" , // Journal for the Cognitive Science of Religion
	"21568022" : "0", // Mormon studies Review
	"2041-1863, 2041-1871" :"0", // Bulletin for the Study of Religion
	"2041-1863" : "0", // Bulletin for the Study of Religion
	"2041-1871" : "0", // Bulletin for the Study of Religion
	"0963-7494" : "0", // Religion, State and Society
	"0094-7342" : "0", // Journal of the Mormon History
	"00122157" : "0", // Dialogue: A Journal of Mormon Thought
	"0392-7288" : "0; 1", // Islamochristiana
	"0304-1042" : "0", // Japanese Journal of Religious Studies
	"1904-8181" : "0", // Religionsvidenskabeligt Tidsskrift
	"23258780" : "0", // journal for spiritual and consciousness studies
	"1527-9472" : "0; 1", // Buddhist-Christian Studies
	"08820945" : "0; 1", // Buddhist-Christian Studies
	"0882-0945" : "0; 1", // Buddhist-Christian Studies
	"0737-769X" : "0", // Journal of Chinese Religions
	"2047704X" : "0", // Journal for the Academic Study of Religion
	"2047-704X" : "0", // Journal for the Academic Study of Religion
	"1031-2943, 1744-9014" : "0", // Journal for the Academic Study of Religion
	"1052-1151, 1533-8568" : "0; 1", // Religion and American Culture 
	"1533-8568" : "0; 1", // Religion and American Culture 
	"1052-1151" : "0; 1", // Religion and American Culture 
	"1467-9418" : "0; 1", // Reviews in Religion & Theology
	"23744766" : "0", // Journal of Book of Mormon Studies
	"2374-4774" : "0", // Journal of the Book of Mormon Studies
	"1361-7672" : "0", // Journal of Beliefs & Values
	"1353-7903" : "0; 1", // Journal of Contemporary Religion
	"2154-7270" : "0", // International Journal of Cultic Studies
	"1463-9947" : "0", // Contemporary Buddhism
	"0718-4727" : "0", // Revista Cultura & Religión
	"00128708" : "0", // Eastern Buddhist
	"1743-0615" : "0", // Fieldwork in Religion
	"1743-0623" : "0", // Fieldwork in Religion
	"1743-0615, 1743-0623" : "0", // Fieldwork in Religion
	"14639955" : "0", // Implicit Religion
	"1463-9955" : "0", // Implicit Religion
	"14639955, 17431697" : "0", // Implicit Religion
	"1527-6457" : "0", // Journal of Global Buddhism
	"2167-2040" : "0", // Journal of Korean Religions
	"2093-7288" : "0", // Journal of Korean Religions
	"1703-289X" : "0", // The Journal of Religion and Popular Culture
	"2153-599X" : "0", // Religion, Brain & Behavior
	"1983-7828" : "0", // Fragmentos de Cultura
	"2159-3159" : "0", // Greek, Roman, and Byzantine Studies
	"0017-3916" : "0", // Greek, Roman, and Byzantine Studies
	"1757-2460, 1757-2479" : "0", // Journal for Research into Freemasonry and Fraternalism
	"1757-2460" : "0", // Journal for Research into Freemasonry and Fraternalism
	"1757-2479" : "0", // Journal for Research into Freemasonry and Fraternalism
	"1357-6275" : "0", // Mortality
	"22366296" : "0", // Numen
	"2236-6296" : "0", // Numen
	"0335-5985" : "0", // Archives de sciences sociales des religions
	"00244414" : "0", // Listening, Journal of Communication Ethics, Religion, and Culture
	"2555-5111" : "0; 1", // Journal international de bioéthique et d'éthique des sciences
	"0035-1784" : "O", // Revue de théologie et de philosophie
	"2047704X" : "0", // Journal for the Academic Study of Religion
	"1031-2943, 1744-9014" : "0", // Journal for the Academic Study of Religion
	"1052-1151, 1533-8568" : "0; 1", // Religion and American Culture
	"2297-6469" : "0; 1", // Zeitschrift für Religionskunde
	"2041-3599, 1871-7691" : "0; 1", // PentecoStudies
	"2041-3599" : "0; 1", // PentecoStudies
	"1871-7691" : "0; 1", // PentecoStudies
	"18717691" : "0; 1", // PentecoStudies
	"2331-2521" : "0", // Journal of disability & religion
	"2044-0243" : "0", // Journal for the Study of Spirituality
	"1941-1022" : "0", // Psychology of Religion and Spirituality
	"1755-0483, 1755-0491" : "0", // Politics and Religion
	"1755-0483" : "0", // Politics and Religion
	"1755-0491" : "0", // Politics and Religion
	"2164-6279" : "1", // Journal of Hindu-Christian Studies 
	"ARC" : "0; 1", // ARC
	
	
	
};



// Mapping für ISSNs deren Schlagwörter statt 5520 in 680X abgelegt werden. KrimDok-Spezifikation
// inkrementell ab z.B. 680 exportiert werden sollen (6801, 6802, ...)
var issnKeywordMapping = {
	"0003-1224" : 6800, // American sociological review Online Publikation|krimdok
	"1862-2593" : 6800, // Berliner Journal für Soziologie Online Publikation|krimdok
	"0268-5809" : 6800, // International sociology Online Publikation|krimdok
	"2196-8225" : 6800, // Praxis der Kinderpsychologie und Kinderpsychiatrie Online Publikation|krimdok
	"2190-6238" : 6800, // Psychologische Rundschau Online Publikation|krimdok
	"1461-7439" : 6800, // Theoretical criminology Online Publikation|krimdok
	"1438-9460" : 6800, // Zeitschrift für Sexualforschung Online Publikation|krimdok
};

// Mapping für JournalTitle>PPN
var issnJournalTitleMapping = {
	"Perspectives in Religious Studies" : "!014809931!", //Perspectives in religious studies Print-PPN
	"Journal of the Evangelical Theological Society" : "!345580796!", // Journal of the Evangelical Theological Society Print-PPN
	"American Baptist Quarterly" : "!015260909!", // American Baptist Quarterly Print-PPN
	"Churchman" : "!015191273!", // Churchman Print-PPN
	"Liturgisches Jahrbuch" : "!014407558!", // Liturgisches Jahrbuch Print-PPN
	"The Mennonite Quarterly Review" : "!015181278!", // The Mennonite Quarterly Review Print-PPN
	"Journal of Theological Interpretation" : "!424663988!", // Journal of Theological Interpretation E-PPN
	"Oriens Christianus" :"!014895242!", // Oriens Christianus Print-PPN
	"Phronema" : "!477959601!", // Phronema E-PPN
	"Word & World" : "!325341044!", // Word & World E-PPN
	"Ephemerides Theologicae Lovanienses" : "!112891160!", // Ephemerides theologicae Lovanienses
	"Lumen Vitae" : "!428280439!", // Lumen Vitae E-PPN
	"Religion and Society" : "!015198073!", // Religion and Society Print-PPN
	"Counseling et spiritualité / Counselling and Spirituality" : "!410016403!", // Counseling et spiritualité / Counselling and Spirituality E-PPN
	"Detroit Baptist Seminary Journal" : "!454420730!", // Detroit Baptist Seminary Journal E-PPN
	"One in Christ" : "!015178552!", // One in Christ Print-PPN
	"The Reformed Theological Review" : "!42401243X!", // The Reformed Theological Review E-PPN
	"Philosophia Christi" : "!106362623!", // Philosophia Christi
	"Calvin Theological Journal" : "!501717714!", // Calvin Theological Journal
	"Anglican and Episcopal History" : "!016232976!", // Anglican and Episcopal History
	"Foi et vie" : "!455507414!", // Foi et vie
	"Protestantesimo" : "!015182266!", // Protestantesimo
	"Ethical Perspectives" : "!112891179!", // Ethical Perspectives
	"Journal of Eastern Christian Studies" : "!112891225!", // Journal of Eastern Christian Studies
	"Antonianum" : "!014992124!", // Antonianum
	"Dialogue & Alliance" : "!023125381!", // Dialogue & Alliance
	"Luther" : "!014414112!", // Luther, Zeitschrift der Luthergesellschaft
	"Journal of Eastern Christian Studies" : "!112891225!", // Journal of Eastern Christian Studies
	"American Journal of Theology & Philosophy" : "!318814447!", // American journal of theology and philosophy
	"Louvain Studies" : "!113144229!", // Louvain Studies
	"ARC" : "!059754931!", // ARC
	"Science et Esprit" : "!015183734!", // Science et Esprit
	
};

// Mapping JournalTitle>Language
var JournalTitleLanguageMapping = {
	"Oriens Christianus" :"ger",
	"Ephemerides Theologicae Lovanienses" : "fre",
	"Science et Esprit" : "fre", 
	}


// ab hier Programmcode
var defaultSsgNummer = "1";
var defaultLanguage = "eng";
//lokaldatensatz z.B. \\n6700 !372049834!\\n6700 !37205241X!\\n6700 !372053025!\\n6700!37205319X!

//item.type --> 0500 Bibliographische Gattung und Status
//http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
var physicalForm = issnPhysicalFormMapping;//0500 Position 1
var cataloguingStatus = "n";//0500 Position 3
var cataloguingStatusO = "n";//0500 Position 3
var licenceField = issnLicenceFieldMapping; // 0500 Position 4 only for Open Access Items; http://swbtools.bsz-bw.de/cgi-bin/help.pl?cmd=kat&val=4085&regelwerk=RDA&verbund=SWB
var SsgField = issnSsgMapping;
var authorMapping = {};

/*
    WICHTIG - ERST LESEN UND !!!VERSTEHEN!!! BEVOR ÄNDERUNGEN GEMACHT WERDEN

    Hinweise zur Nebenläufigkeit
    - Dieses Skript verwendet Remote-calls zum Auflösen verschiedener Daten (z.B. PPNs für Autoren)
    - Diese Calls sind per Javascript nur asynchron aufrufbar
        - Konstrukte wie z.B. Zotero.wait() und Zotero.done() existieren in der aktuellen Zotero-Version (5) noch, haben aber keine Funktion mehr.
        - Verschiedene Workarounds wurden ausprobiert (z.B. Semaphor über globale Variable), haben aber nie funktioniert
        - Man kommt also um die asynchronen Aufrufe nicht herum

    HINWEISE ZUR IMPLEMENTATION in diesem Skript
    - Die Variable runningThreadCount enthält die Anzahl der noch laufenden Threads (Hauptskript + asynchrone abfragen)
        - Startwert 1 (für Hauptskript)
        - +1 beim Start jedes zusätzlichen asynchronen Aufrufs
        - -1 beim Ende jedes asynchronen Aufrufs (im ondone callback)
        - -1 beim Ende des Hauptskripts
    - Alle Informationen werden im itemsOutputCache nach Item gruppiert gesammelt (laufende Nummer)
    - Erst am Ende des Skripts werden die Einträge im itemsOutputCache sortiert und geschrieben
        - Sortierung ist notwendig, da Hauptskript und asynchrone Threads gemischt Codes reinschreiben => Codes sind durcheinander
        - So wird auch verhindert dass Datensätze durcheinander sind, falls mehrere gleichzeitig exportiert werden
    - Dafür ist es notwendig, dass sowohl das Ende des Skripts als auch jeder einzelne Async ondone callback auf
      runningThreadCount == 0 prüft und bei Bedarf die finale Funktion WriteItems aufruft.
 */

var runningThreadCount = 1;
var currentItemId = -1;
var itemsOutputCache = []

/**
 * Diese Funktion dient als Ersatz für Zotero.ProcessDocuments
 * Mit dieser Funktion ist es möglich, der processor-Funktion eine zusätzliche Variable weiterzugeben ("processorParams").
 * Notwendig um z.B. Kopien globaler Variablen weiterzugeben, die sonst den Wert ändern
 * bis die Processor-Funktion am Ende des callbacks aufgerufen wird.
 *
 * Original siehe: https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/http.js
 */
async function processDocumentsCustom (url, processor, processorParams, onDone, onError) {
    var f = function() {
       Zotero.Utilities.loadDocument(url, function(doc) {
           processor(doc, url, processorParams);
       });

    };

    try {
        await f();
    }
    catch (e) {
        if (onError) {
            onError(e);
        }
        throw e;
    }

    if (onDone) {
        onDone();
    }
};

function addLine(itemid, code, value) {
    //Halbgeviertstrich ersetzen
    value = value.replace(/–/g, '-').replace(/’/g, '\'').replace(/œ/g, '\\u0153').replace(/ā/g, '\\u0101').replace(/â/g, '\\u00E2').replace(/Ṣ/g, '\\u1E62').replace(/ṣ/g, '\\u1E63').replace(/ū/g, '\\u016B').replace(/ḥ/g, '\\u1E25').replace(/ī/g, '\\u012B').replace(/ṭ/g, '\\u1E6D').replace(/ʾ/g, '\\u02BE').replace(/ʿ/g, '\\u02BF').replace(/–/g, '-').replace(/&#160;/g, "").replace(/"/g, '\\"');

    //Zeile zusammensetzen
    var line = code + " " + value;
    itemsOutputCache[itemid].push(line);
}


function doExport() {
    var item;
    while ((item = Zotero.nextItem())) {
        currentItemId++;
        itemsOutputCache[currentItemId] = [];

        //enrich items based on their ISSN
        if (!item.language && item.ISSN && issnLangMapping[item.ISSN]) {
            item.language = issnLangMapping[item.ISSN];
        }
        if (SsgField && item.ISSN && issnSsgMapping[item.ISSN]) {
            SsgField = issnSsgMapping[item.ISSN];
        }
        if (item.volume && item.ISSN && issnVolumeMapping[item.ISSN]) {
            item.volume = issnVolumeMapping[item.ISSN] + item.volume;
        }
        if (physicalForm && item.ISSN && issnPhysicalFormMapping[item.ISSN]) {
            physicalForm = issnPhysicalFormMapping[item.ISSN]; // position 1 http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
        }
		if (physicalForm && item.publicationTitle && issnJournalTitleMapping[item.publicationTitle]) {
			physicalForm = issnPhysicalFormMapping[item.publicationTitle]; // position 1 http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
		}
        if (licenceField && item.ISSN && issnLicenceFieldMapping[item.ISSN]) {
            licenceField = issnLicenceFieldMapping[item.ISSN]; // position 4 http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
        }


        var article = false;
        switch (item.itemType) {
            case "journalArticle":
            case "bookSection":
            case "magazineArticle": // wird bei der Erfassung von Rezensionen verwendet. Eintragsart "Magazin-Artikel" wird manuell ge�ndert.
            case "newspaperArticle":
            case "encyclopediaArticle":
                article = true;
                break;
        }

		
		//item.type --> 0500 Bibliographische Gattung und Status
		//http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
		switch (true) {
			case physicalForm === "A":
				addLine(currentItemId, '\\n0500', physicalForm+"o"+cataloguingStatus);
				break;
			case physicalForm === "O" && licenceField === "l":
				addLine(currentItemId, '\\n0500', physicalForm+"o"+cataloguingStatus+licenceField); 
				break;
			case physicalForm === "O" && licenceField === "kw":
				addLine(currentItemId, '\\n0500', physicalForm+"o"+cataloguingStatus); 
				break;
			default:
				addLine(currentItemId, '\\n0500', physicalForm+"o"+cataloguingStatus); // //z.B. Aou, Oou, Oox etc. 
			}
        //item.type --> 0501 Inhaltstyp
        addLine(currentItemId, "\\n0501", "Text$btxt");

        //item.type --> 0502 Medientyp
        switch (physicalForm) {
            case "A":
                addLine(currentItemId, "\\n0502", "ohne Hilfsmittel zu benutzen$bn");
                break;
            case "O":
                addLine(currentItemId, "\\n0502", "Computermedien$bc");
                break;
            default:
                addLine(currentItemId, "\\n0502", "");
        }

        //item.type --> 0503 Datenträgertyp

        switch (physicalForm) {
            case "A":
                addLine(currentItemId, "\\n0503", "Band$bnc");
                break;
            case "O":
                addLine(currentItemId, "\\n0503", "Online-Ressource$bcr");
                break;
            default:
                addLine(currentItemId, "\\n0503", "");
        }
        //item.date --> 1100
        var date = Zotero.Utilities.strToDate(item.date);
        if (date.year !== undefined) {
            addLine(currentItemId, "\\n1100", date.year.toString() + "$n[" + date.year.toString() + "]");
        }

        //1130 Datenträger
        //http://swbtools.bsz-bw.de/winibwhelp/Liste_1130.htm

        switch (physicalForm) {
            case "A":
                addLine(currentItemId, "\\n1130", "druck");
                break;
            case "O":
                addLine(currentItemId, "\\n1130", "cofz");
                break;
            default:
                addLine(currentItemId, "\\n1130", "");
        }

        //1131 Art des Inhalts
        if (item.itemType == "magazineArticle") {
            addLine(currentItemId, "\\n1131", "!209083166!");
        }

        // 1140 Veröffentlichungsart und Inhalt http://swbtools.bsz-bw.de/winibwhelp/Liste_1140.htm
        if (item.itemType == "magazineArticle") {
            addLine(currentItemId, "\\n1140", "uwre");
        }


        //item.language --> 1500 Sprachcodes
        if (item.language) {
            if (languageMapping[(item.language)]) {
                    item.language = languageMapping[item.language];
            }
            addLine(currentItemId, "\\n1500", item.language);
        } else {
            addLine(currentItemId, "\\n1500", defaultLanguage);
        }

        //1505 Katalogisierungsquelle
        addLine(currentItemId, "\\n1505", "$erda");

        //item.ISBN --> 2000 ISBN
        if (item.ISBN) {
            addLine(currentItemId, "\\n2000", item.ISBN);
        }

        //item.DOI --> 2051 bei "Oou" bzw. 2053 bei "Aou"
        if (item.DOI) {
            if (physicalForm === "O") {
                addLine(currentItemId, "\\n2051", item.DOI);
            } else if (physicalForm === "A") {
                addLine(currentItemId, "\\n2053", item.DOI);
            }
        }

        //Autoren --> 3000, 3010
        //Titel, erster Autor --> 4000
        var titleStatement = "";
        if (item.shortTitle == "journalArticle") {
            titleStatement += item.shortTitle;
            if (item.title && item.title.length > item.shortTitle.length) {
                titleStatement += "$d" + item.title.substr(item.shortTitle.length).replace(/^\s*:\s*/,'');
            }
        } else {
            titleStatement += item.title.replace(/\s*:\s*/,'$d');
        }
        //Sortierzeichen hinzufügen, vgl. https://github.com/UB-Mannheim/zotkat/files/137992/ARTIKEL.pdf
        if (item.language == "ger" || !item.language) {
            titleStatement = titleStatement.replace(/^(Der|Die|Das|Des|Dem|Den|Ein|Eines|Einem|Eine|Einen|Einer) ([^@])/, "$1 @$2");
        }
        if (item.language == "eng" || !item.language) {
            titleStatement = titleStatement.replace(/^(The|A|An) ([^@])/, "$1 @$2");
        }
        if (item.language == "fre" || !item.language) {
            titleStatement = titleStatement.replace(/^(Le|La|Les|Des|Un|Une) ([^@])/, "$1 @$2");
            titleStatement = titleStatement.replace(/^L'([^@])/, "L' @$1");
        }
		if (item.language == "ita" || !item.language) {
			titleStatement = titleStatement.replace(/^(La|Le|Lo|Gli|I|Il|Un|Una|Uno) ([^@])/, "$1 @$2");
			titleStatement = titleStatement.replace(/^L'([^@])/, "L' @$1").replace(/^L’([^@])/, "L' @$1");
		}
		
		if (item.language == "por" || !item.language) {
			titleStatement = titleStatement.replace(/^(A|O|As|Os|Um|Uma|Umas|Uns) ([^@])/, "$1 @$2");
		}
		if (item.language == "spa" || !item.language) {
			titleStatement = titleStatement.replace(/^(El|La|Los|Las|Un|Una|Unos|Unas) ([^@])/, "$1 @$2");
		}

        var i = 0;
        var creator;
        while (item.creators.length>0) {
            creator = item.creators.shift();

            if (creator.creatorType == "author") {
                var authorName = creator.lastName + (creator.firstName ? ", " + creator.firstName : "");

                var code = 0;
                if (i === 0) {
                    code = "\\n3000";
                    titleStatement += "$h" + (creator.firstName ? creator.firstName + " " : "") + creator.lastName;
                } else {
                    code = "\\n3010";
                }

                i++;

                //Lookup für Autoren
                if (authorName[0] != "!") {
                    var lookupUrl = "http://swb.bsz-bw.de/DB=2.104/SET=70/TTL=1/CMD?SGE=&ACT=SRCHM&MATCFILTER=Y&MATCSET=Y&NOSCAN=Y&PARSE_MNEMONICS=N&PARSE_OPWORDS=N&PARSE_OLDSETS=N&IMPLAND=Y&NOABS=Y&ACT0=SRCHA&SHRTST=50&IKT0=1&TRM0=" + authorName +"&ACT1=*&IKT1=2057&TRM1=*&ACT2=*&IKT2=8977&TRM2=(theolog*|neutestament*|alttestament*|kirchenhist*|judais*|Religionswi*|pfarrer*)&ACT3=-&IKT3=8978-&TRM3=1[1%2C2%2C3%2C4%2C5%2C6%2C7%2C8][0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9][0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9]?"

                    /*
                    lookupUrl kann je nach Anforderung noch spezifiziert werden, im obigen Abfragebeispiel:
                    suchen [und] (Person(Phrase: Nachname, Vorname) [PER]) " authorName "
                    eingrenzen (Systematiknummer der SWD [SN]) *
                    eingrenzen (Relationiertes Schlagwort in der GND [RLS]) theolog*
                    ausgenommen (Relationierte Zeit in der GND [RLZ]) 1[1,2,3,4,5,6,7,8][0,1,2,3,4,5,6,7,8,9][0,1,2,3,4,5,6,7,8,9]

                    IKT0=1 TRM0= für Persönlicher Name in Picafeld 100
                    IKT1=2057 TRM1=3.* für GND-Systematik
                    IKT2=8963 TRM2=theolog*    für Berufsbezeichnung 550
                    IKT3=8991 TRM3=1[1,2,3,4,5,6,7,8][0,1,2,3,4,5,6,7,8,9][0,1,2,3,4,5,6,7,8,9] für Geburts- und Sterbedatum (Bereich)

                    ###OPERATOREN vor "IKT"###
                    UND-Verknüpfung "&" | ODER-Verknüpfung "%2B&" | Nicht "-&"

                    ###TYP IKT=Indikatoren|Zweite Spalte Schlüssel(IKT)###
                    Liste der Indikatoren und Routine http://swbtools.bsz-bw.de/cgi-bin/help.pl?cmd=idx_list_typ&regelwerk=RDA&verbund=SWB
                    */

                    // threadParams = globale Variablen die sich evtl ändern
                    // während die async-Funktion processDocumentsCustom ausgeführt wird
                    // und daher per Kopie übergeben werden müssen
                    var threadParams = {
                        "currentItemId" : currentItemId,
                        "code" : code,
                        "authorName" : authorName,
                    };

                    runningThreadCount++;
                    processDocumentsCustom(lookupUrl,
                        // processing callback function
                        function(doc, url, threadParams){
                            var ppn = Zotero.Utilities.xpathText(doc, '//small[a[img]]');
                            if (ppn) {
                                var authorValue = "!" + ppn.trim() + "!" + "$BVerfasserIn$4aut \\n8910 $aixzom$bAutor maschinell zugeordnet\\n";
                                addLine(threadParams["currentItemId"], threadParams["code"], authorValue);
                            } else {
                                addLine(threadParams["currentItemId"], threadParams["code"], threadParams["authorName"]  + "$BVerfasserIn$4aut");
                            }

                            // separate onDone function not needed because we only call one url
                            runningThreadCount--;
                            if (runningThreadCount === 0) {
                                for (key in authorMapping) {
                                    var value = authorMapping[key];
                                }
                                WriteItems();
                            }
                        },
                        threadParams,
                        //onDone
                        undefined,
                        //onError
                        function(e) {
                            var message = "Error in external lookup: " + e.message;
                            Zotero.debug(message);
                            Zotero.write(message);
                        }
                    );
                }
            }

            //TODO: editors, other contributors...
        }

        addLine(currentItemId, "\\n4000", titleStatement);

        //Ausgabe --> 4020
        if (item.edition) {
            addLine(currentItemId, "\\n4020", item.edition);
        }

        //Erscheinungsvermerk --> 4030
        if (!article) {
            var publicationStatement = "";
            if (item.place) { publicationStatement += item.place; }
            if (item.publisher) { publicationStatement +=  "$n" + item.publisher; }
            addLine(currentItemId, "\\n4030", publicationStatement);
        }


        //4070 $v Bandzählung $j Jahr $h Heftnummer $p Seitenzahl
        if (item.itemType == "journalArticle" || item.itemType == "magazineArticle") {
            var volumeyearissuepage = "";
			if (item.volume) { volumeyearissuepage += "$v" + item.volume.replace("Tome ", "").replace(/\s\(Number\s\d+-?\d+\)/, ""); }
			if (date.year !== undefined) { volumeyearissuepage +=  "$j" + date.year; }
			if (item.issue) { volumeyearissuepage += "$h" + item.issue.replace("-", "/").replace(/^0/, ""); }
			if (item.pages) { volumeyearissuepage += "$p" + item.pages; }

            addLine(currentItemId, "\\n4070", volumeyearissuepage);
        }

        //URL --> 4085 nur bei Dokumenttyp "magazineArticle" für Rezension im Feld 0500
        if (item.url && item.itemType == "magazineArticle") {
            addLine(currentItemId, "\\n4085", "$u" + item.url + "$xH");
        }
		
		//URL --> 4085 nur bei Satztyp "O.." im Feld 0500
		switch (true) {
			case item.url && physicalForm === "O" && licenceField === "l":
				addLine(currentItemId, "\\n4085", "$u" + item.url + "$xH$zLF");
				break;
			case item.url && physicalForm === "O" && licenceField === "kw":
				addLine(currentItemId, "\\n4085", "$u" + item.url + "$xH$zKW");
				break;
			case item.url && physicalForm === "O":
				addLine(currentItemId, "\\n4085", "$u" + item.url + "$xH");
				break;
			case item.url && item.itemType == "magazineArticle":
				addLine(currentItemId, "\\n4085", "$u" + item.url + "$xH");
				break;
			}
        //Reihe --> 4110
        if (!article) {
            var seriesStatement = "";
            if (item.series) {
                seriesStatement += item.series;
            }
            if (item.seriesNumber) {
                seriesStatement += " ; " + item.seriesNumber;
            }
            addLine(currentItemId, "\\n4110", seriesStatement);
        }

        //Inhaltliche Zusammenfassung --> 4207
        if (item.abstractNote) {
            addLine(currentItemId, "\\n4207", item.abstractNote.replace("<i>", "\'").replace("</i>", "\'").replace("<br/>", "").replace("Zusammenfassung", "").replace(" Summary", ""));
        }

        //item.publicationTitle --> 4241 Beziehungen zur größeren Einheit
        if (item.itemType == "journalArticle" || item.itemType == "magazineArticle") {
            if (item.ISSN && journalMapping[ZU.cleanISSN(item.ISSN)]) {
                addLine(currentItemId, "\\n4241", "Enthalten in" + journalMapping[ZU.cleanISSN(item.ISSN)]);
            } else if (item.publicationTitle) {
                addLine(currentItemId, "\\n4241", "Enthalten in"  + issnJournalTitleMapping[item.publicationTitle]);
            }

            //4261 Themenbeziehungen (Beziehung zu der Veröffentlichung, die beschrieben wird)|case:magazineArticle
            if (item.itemType == "magazineArticle") {
                addLine(currentItemId, "\\n4261", "Rezension von" + item.publicationTitle); // zwischen den Ausrufezeichen noch die PPN des rezensierten Werkes manuell einfügen.
            }

            //SSG bzw. FID-Nummer --> 5056 "0" = Religionwissenschaft | "1" = Theologie | "0; 1" = RW & Theol.

            if (SsgField === "0" || SsgField === "0; 1" || SsgField === "FID-KRIM-DE-21") {
                addLine(currentItemId, "\\n5056", SsgField);
            } else {
                addLine(currentItemId, "\\n5056", defaultSsgNummer);
            }

            //Schlagwörter aus einem Thesaurus (Fremddaten) --> 5520 (oder alternativ siehe Mapping)
            if (item.ISSN && issnKeywordMapping[ZU.cleanISSN(item.ISSN)]) {
                var ISSNclean = ZU.cleanISSN(item.ISSN);
                var codeBase = issnKeywordMapping[ISSNclean];
                for (i=0; i<item.tags.length; i++) {
                    var code = codeBase + i;
                    addLine(currentItemId, code, "|s|" + item.tags[i].tag.replace(/\s?--\s?/g, '; '));
                }
            } else {
                for (i=0; i<item.tags.length; i++) {
                    addLine(currentItemId, "\\n5520", "|s|" + item.tags[i].tag.replace(/\s?--\s?/g, '; '));
                }
            }

            if (item.itemType == "journalArticle") {
                addLine(currentItemId, "", "");
                addLine(currentItemId, "", "");
                addLine(currentItemId, '\\nE* l01\\n7100$jn\\n8002 ixzs;ixzo");\napplication.activeWindow.pressButton("Enter");\n\n', "");
            }
        }
    }

    runningThreadCount--;
    if (runningThreadCount === 0) {
        WriteItems();
    }
}

// this should be called at end of each element,
// and also when all async calls are finished (only when runningThreadCount == 0)
function WriteItems() {
    itemsOutputCache.forEach(function(element, index) {
        // sort first, codes might be unsorted due to async stuff
        element.sort();

        // implode + write
        if(index > 0) {
            Zotero.write("\n");
        }
        Zotero.write('application.activeWindow.command("e", false);\napplication.activeWindow.title.insertText("' + element.join("") + "\n");
    });
}
