//mlb team codes

//laa 108
//ari 109
//bal 110
//bos 111
//chn 112
//cin 113
//cle 114
//col 115
//det 116
//hou 117
//kc 118
//lad 119
//wsh 120
//nym 121
//oak 133
//pit 134
//sd 135
//sea 136
//sf 137
//stl 138
//tb 139
//tex 140
//tor 141
//min 142
//phi 143
//atl 144
//cha 145
//mia 146
//nyy 147
//mil 158

var alEast = [
    ["New York", null, null, null],
    ["Boston", null, null, null],
    ["Tampa Bay", null, null, null],
    ["Toronto", null, null, null],
    ["Baltimore", null, null, null]
];

//Fetch AL East data
//Yankees data
var nyaRequest = new XMLHttpRequest();
nyaRequest.open("GET", "http://gd2.mlb.com/components/team/stats/147-stats.xml", false);
nyaRequest.send()
var nyaData = nyaRequest.responseXML;
alEast[0][1] = parseInt(nyaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"));
alEast[0][2] = parseInt(nyaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"));
alEast[0][3] = parseInt(nyaData.firstChild.nextSibling.firstChild.getAttribute("R")) - parseInt(nyaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"));
//Red Sox data
var bosRequest = new XMLHttpRequest();
bosRequest.open("GET", "http://gd2.mlb.com/components/team/stats/111-stats.xml", false);
bosRequest.send()
var bosData = bosRequest.responseXML;
alEast[1][1] = parseInt(bosData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
alEast[1][2] = parseInt(bosData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
alEast[1][3] = parseInt(bosData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(bosData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Rays data
var tbRequest = new XMLHttpRequest();
tbRequest.open("GET", "http://gd2.mlb.com/components/team/stats/139-stats.xml", false);
tbRequest.send()
var tbData = tbRequest.responseXML;
alEast[2][1] = parseInt(tbData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
alEast[2][2] = parseInt(tbData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
alEast[2][3] = parseInt(tbData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(tbData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Blue Jays data
var torRequest = new XMLHttpRequest();
torRequest.open("GET", "http://gd2.mlb.com/components/team/stats/141-stats.xml", false);
torRequest.send()
var torData = torRequest.responseXML;
alEast[3][1] = parseInt(torData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
alEast[3][2] = parseInt(torData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
alEast[3][3] = parseInt(torData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(torData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Orioles data
var balRequest = new XMLHttpRequest();
balRequest.open("GET", "http://gd2.mlb.com/components/team/stats/110-stats.xml", false);
balRequest.send()
var balData = balRequest.responseXML;
alEast[4][1] = parseInt(balData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
alEast[4][2] = parseInt(balData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
alEast[4][3] = parseInt(balData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(balData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);

//Sort AL East teams by record
alEast.sort(function (a, b) {
    return b[1] / b[2] - a[1] / a[2];
});

//Put AL East data on page
document.getElementById("alEastFirstName").innerText = alEast[0][0];
document.getElementById("alEastFirstWs").innerText = alEast[0][1];
document.getElementById("alEastFirstLs").innerText = alEast[0][2];
document.getElementById("alEastFirstPer").innerText = (alEast[0][1]/(alEast[0][1]+alEast[0][2])).toFixed(3) == 1 ? (alEast[0][1]/(alEast[0][1]+alEast[0][2])).toFixed(3) : (alEast[0][1]/(alEast[0][1]+alEast[0][2])).toFixed(3).toString().substr(1);
document.getElementById("alEastFirstGB").innerText = ((alEast[1][1] - alEast[0][1]) + (alEast[0][2] - alEast[1][2]))/2 > 0 ? (((alEast[1][1] - alEast[0][1]) + (alEast[0][2] - alEast[1][2]))/2).toFixed(1) : "-";
document.getElementById("alEastFirstDiff").innerText = alEast[0][3];

document.getElementById("alEastSecondName").innerText = alEast[1][0];
document.getElementById("alEastSecondWs").innerText = alEast[1][1];
document.getElementById("alEastSecondLs").innerText = alEast[1][2];
document.getElementById("alEastSecondPer").innerText = (alEast[1][1]/(alEast[1][1]+alEast[1][2])).toFixed(3) == 1 ? (alEast[1][1]/(alEast[1][1]+alEast[1][2])).toFixed(3) : (alEast[1][1]/(alEast[1][1]+alEast[1][2])).toFixed(3).toString().substr(1);
document.getElementById("alEastSecondGB").innerText = ((alEast[0][1] - alEast[1][1]) + (alEast[1][2] - alEast[0][2]))/2 > 0 ? (((alEast[0][1] - alEast[1][1]) + (alEast[1][2] - alEast[0][2]))/2).toFixed(1) : "-";
document.getElementById("alEastSecondDiff").innerText = alEast[1][3];

document.getElementById("alEastThirdName").innerText = alEast[2][0];
document.getElementById("alEastThirdWs").innerText = alEast[2][1];
document.getElementById("alEastThirdLs").innerText = alEast[2][2];
document.getElementById("alEastThirdPer").innerText = (alEast[2][1]/(alEast[2][1]+alEast[2][2])).toFixed(3) == 1 ? (alEast[2][1]/(alEast[2][1]+alEast[2][2])).toFixed(3) : (alEast[2][1]/(alEast[2][1]+alEast[2][2])).toFixed(3).toString().substr(1);
document.getElementById("alEastThirdGB").innerText = ((alEast[0][1] - alEast[2][1]) + (alEast[2][2] - alEast[0][2]))/2 > 0 ? (((alEast[0][1] - alEast[2][1]) + (alEast[2][2] - alEast[0][2]))/2).toFixed(1) : "-";
document.getElementById("alEastThirdDiff").innerText = alEast[2][3];

document.getElementById("alEastFourthName").innerText = alEast[3][0];
document.getElementById("alEastFourthWs").innerText = alEast[3][1];
document.getElementById("alEastFourthLs").innerText = alEast[3][2];
document.getElementById("alEastFourthPer").innerText = (alEast[3][1]/(alEast[3][1]+alEast[3][2])).toFixed(3) == 1 ? (alEast[3][1]/(alEast[3][1]+alEast[3][2])).toFixed(3) : (alEast[3][1]/(alEast[3][1]+alEast[3][2])).toFixed(3).toString().substr(1);
document.getElementById("alEastFourthGB").innerText = ((alEast[0][1] - alEast[3][1]) + (alEast[3][2] - alEast[0][2]))/2 > 0 ? (((alEast[0][1] - alEast[3][1]) + (alEast[3][2] - alEast[0][2]))/2).toFixed(1) : "-";
document.getElementById("alEastFourthDiff").innerText = alEast[3][3];

document.getElementById("alEastFifthName").innerText = alEast[4][0];
document.getElementById("alEastFifthWs").innerText = alEast[4][1];
document.getElementById("alEastFifthLs").innerText = alEast[4][2];
document.getElementById("alEastFifthPer").innerText = (alEast[4][1]/(alEast[4][1]+alEast[4][2])).toFixed(3) == 1 ? (alEast[4][1]/(alEast[4][1]+alEast[4][2])).toFixed(3) : (alEast[4][1]/(alEast[4][1]+alEast[4][2])).toFixed(3).toString().substr(1);
document.getElementById("alEastFifthGB").innerText = ((alEast[0][1] - alEast[4][1]) + (alEast[4][2] - alEast[0][2]))/2 > 0 ? (((alEast[0][1] - alEast[4][1]) + (alEast[4][2] - alEast[0][2]))/2).toFixed(1) : "-";
document.getElementById("alEastFifthDiff").innerText = alEast[4][3];

var alCentral = [
    ["Cleveland", null, null, null],
    ["Detroit", null, null, null],
    ["Chicago", null, null, null],
    ["Minneapolis", null, null, null],
    ["Kansas City", null, null, null]
];

//Fetch AL Central data
//Indians data
var cleRequest = new XMLHttpRequest();
cleRequest.open("GET", "http://gd2.mlb.com/components/team/stats/114-stats.xml", false);
cleRequest.send()
var cleData = cleRequest.responseXML;
alCentral[0][1] = parseInt(cleData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"));
alCentral[0][2] = parseInt(cleData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"));
alCentral[0][3] = parseInt(cleData.firstChild.nextSibling.firstChild.getAttribute("R")) - parseInt(cleData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"));
//Tigers data
var detRequest = new XMLHttpRequest();
detRequest.open("GET", "http://gd2.mlb.com/components/team/stats/116-stats.xml", false);
detRequest.send()
var detData = detRequest.responseXML;
alCentral[1][1] = parseInt(detData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
alCentral[1][2] = parseInt(detData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
alCentral[1][3] = parseInt(detData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(detData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//White Sox data
var chaRequest = new XMLHttpRequest();
chaRequest.open("GET", "http://gd2.mlb.com/components/team/stats/145-stats.xml", false);
chaRequest.send()
var chaData = chaRequest.responseXML;
alCentral[2][1] = parseInt(chaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
alCentral[2][2] = parseInt(chaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
alCentral[2][3] = parseInt(chaData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(chaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Twins data
var minRequest = new XMLHttpRequest();
minRequest.open("GET", "http://gd2.mlb.com/components/team/stats/142-stats.xml", false);
minRequest.send()
var minData = minRequest.responseXML;
alCentral[3][1] = parseInt(minData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
alCentral[3][2] = parseInt(minData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
alCentral[3][3] = parseInt(minData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(minData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Royals data
var kcRequest = new XMLHttpRequest();
kcRequest.open("GET", "http://gd2.mlb.com/components/team/stats/118-stats.xml", false);
kcRequest.send()
var kcData = kcRequest.responseXML;
alCentral[4][1] = parseInt(kcData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
alCentral[4][2] = parseInt(kcData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
alCentral[4][3] = parseInt(kcData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(kcData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);

//Sort AL Central teams by record
alCentral.sort(function (a, b) {
    return b[1] / b[2] - a[1] / a[2];
});

//Put AL Central data on page
document.getElementById("alCentralFirstName").innerText = alCentral[0][0];
document.getElementById("alCentralFirstWs").innerText = alCentral[0][1];
document.getElementById("alCentralFirstLs").innerText = alCentral[0][2];
document.getElementById("alCentralFirstPer").innerText = (alCentral[0][1]/(alCentral[0][1]+alCentral[0][2])).toFixed(3) == 1 ? (alCentral[0][1]/(alCentral[0][1]+alCentral[0][2])).toFixed(3) : (alCentral[0][1]/(alCentral[0][1]+alCentral[0][2])).toFixed(3).toString().substr(1);
document.getElementById("alCentralFirstGB").innerText = ((alCentral[1][1] - alCentral[0][1]) + (alCentral[0][2] - alCentral[1][2]))/2 > 0 ? (((alCentral[1][1] - alCentral[0][1]) + (alCentral[0][2] - alCentral[1][2]))/2).toFixed(1) : "-";
document.getElementById("alCentralFirstDiff").innerText = alCentral[0][3];

document.getElementById("alCentralSecondName").innerText = alCentral[1][0];
document.getElementById("alCentralSecondWs").innerText = alCentral[1][1];
document.getElementById("alCentralSecondLs").innerText = alCentral[1][2];
document.getElementById("alCentralSecondPer").innerText = (alCentral[1][1]/(alCentral[1][1]+alCentral[1][2])).toFixed(3) == 1 ? (alCentral[1][1]/(alCentral[1][1]+alCentral[1][2])).toFixed(3) : (alCentral[1][1]/(alCentral[1][1]+alCentral[1][2])).toFixed(3).toString().substr(1);
document.getElementById("alCentralSecondGB").innerText = ((alCentral[0][1] - alCentral[1][1]) + (alCentral[1][2] - alCentral[0][2]))/2 > 0 ? (((alCentral[0][1] - alCentral[1][1]) + (alCentral[1][2] - alCentral[0][2]))/2).toFixed(1) : "-";
document.getElementById("alCentralSecondDiff").innerText = alCentral[1][3];

document.getElementById("alCentralThirdName").innerText = alCentral[2][0];
document.getElementById("alCentralThirdWs").innerText = alCentral[2][1];
document.getElementById("alCentralThirdLs").innerText = alCentral[2][2];
document.getElementById("alCentralThirdPer").innerText = (alCentral[2][1]/(alCentral[2][1]+alCentral[2][2])).toFixed(3) == 1 ? (alCentral[2][1]/(alCentral[2][1]+alCentral[2][2])).toFixed(3) : (alCentral[2][1]/(alCentral[2][1]+alCentral[2][2])).toFixed(3).toString().substr(1);
document.getElementById("alCentralThirdGB").innerText = ((alCentral[0][1] - alCentral[2][1]) + (alCentral[2][2] - alCentral[0][2]))/2 > 0 ? (((alCentral[0][1] - alCentral[2][1]) + (alCentral[2][2] - alCentral[0][2]))/2).toFixed(1) : "-";
document.getElementById("alCentralThirdDiff").innerText = alCentral[2][3];

document.getElementById("alCentralFourthName").innerText = alCentral[3][0];
document.getElementById("alCentralFourthWs").innerText = alCentral[3][1];
document.getElementById("alCentralFourthLs").innerText = alCentral[3][2];
document.getElementById("alCentralFourthPer").innerText = (alCentral[3][1]/(alCentral[3][1]+alCentral[3][2])).toFixed(3) == 1 ? (alCentral[3][1]/(alCentral[3][1]+alCentral[3][2])).toFixed(3) : (alCentral[3][1]/(alCentral[3][1]+alCentral[3][2])).toFixed(3).toString().substr(1);
document.getElementById("alCentralFourthGB").innerText = ((alCentral[0][1] - alCentral[3][1]) + (alCentral[3][2] - alCentral[0][2]))/2 > 0 ? (((alCentral[0][1] - alCentral[3][1]) + (alCentral[3][2] - alCentral[0][2]))/2).toFixed(1) : "-";
document.getElementById("alCentralFourthDiff").innerText = alCentral[3][3];

document.getElementById("alCentralFifthName").innerText = alCentral[4][0];
document.getElementById("alCentralFifthWs").innerText = alCentral[4][1];
document.getElementById("alCentralFifthLs").innerText = alCentral[4][2];
document.getElementById("alCentralFifthPer").innerText = (alCentral[4][1]/(alCentral[4][1]+alCentral[4][2])).toFixed(3) == 1 ? (alCentral[4][1]/(alCentral[4][1]+alCentral[4][2])).toFixed(3) : (alCentral[4][1]/(alCentral[4][1]+alCentral[4][2])).toFixed(3).toString().substr(1);
document.getElementById("alCentralFifthGB").innerText = ((alCentral[0][1] - alCentral[4][1]) + (alCentral[4][2] - alCentral[0][2]))/2 > 0 ? (((alCentral[0][1] - alCentral[4][1]) + (alCentral[4][2] - alCentral[0][2]))/2).toFixed(1) : "-";
document.getElementById("alCentralFifthDiff").innerText = alCentral[4][3];

var alWest = [
    ["Los Angeles", null, null, null],
    ["Seattle", null, null, null],
    ["Oakland", null, null, null],
    ["Texas", null, null, null],
    ["Houston", null, null, null]
];

//Fetch AL West data
//Angels data
var laaRequest = new XMLHttpRequest();
laaRequest.open("GET", "http://gd2.mlb.com/components/team/stats/108-stats.xml", false);
laaRequest.send()
var laaData = laaRequest.responseXML;
alWest[0][1] = parseInt(laaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"));
alWest[0][2] = parseInt(laaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"));
alWest[0][3] = parseInt(laaData.firstChild.nextSibling.firstChild.getAttribute("R")) - parseInt(laaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"));
//Mariners data
var seaRequest = new XMLHttpRequest();
seaRequest.open("GET", "http://gd2.mlb.com/components/team/stats/136-stats.xml", false);
seaRequest.send()
var seaData = seaRequest.responseXML;
alWest[1][1] = parseInt(seaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
alWest[1][2] = parseInt(seaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
alWest[1][3] = parseInt(seaData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(seaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Athletics data
var oakRequest = new XMLHttpRequest();
oakRequest.open("GET", "http://gd2.mlb.com/components/team/stats/133-stats.xml", false);
oakRequest.send()
var oakData = oakRequest.responseXML;
alWest[2][1] = parseInt(oakData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
alWest[2][2] = parseInt(oakData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
alWest[2][3] = parseInt(oakData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(oakData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Rangers data
var texRequest = new XMLHttpRequest();
texRequest.open("GET", "http://gd2.mlb.com/components/team/stats/140-stats.xml", false);
texRequest.send()
var texData = texRequest.responseXML;
alWest[3][1] = parseInt(texData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
alWest[3][2] = parseInt(texData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
alWest[3][3] = parseInt(texData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(texData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Astros data
var houRequest = new XMLHttpRequest();
houRequest.open("GET", "http://gd2.mlb.com/components/team/stats/117-stats.xml", false);
houRequest.send()
var houData = houRequest.responseXML;
alWest[4][1] = parseInt(houData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
alWest[4][2] = parseInt(houData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
alWest[4][3] = parseInt(houData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(houData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);

//Sort AL West teams by record
alWest.sort(function (a, b) {
    return b[1] / b[2] - a[1] / a[2];
});

//Put AL West data on page
document.getElementById("alWestFirstName").innerText = alWest[0][0];
document.getElementById("alWestFirstWs").innerText = alWest[0][1];
document.getElementById("alWestFirstLs").innerText = alWest[0][2];
document.getElementById("alWestFirstPer").innerText = (alWest[0][1]/(alWest[0][1]+alWest[0][2])).toFixed(3) == 1 ? (alWest[0][1]/(alWest[0][1]+alWest[0][2])).toFixed(3) : (alWest[0][1]/(alWest[0][1]+alWest[0][2])).toFixed(3).toString().substr(1);
document.getElementById("alWestFirstGB").innerText = ((alWest[1][1] - alWest[0][1]) + (alWest[0][2] - alWest[1][2]))/2 > 0 ? (((alWest[1][1] - alWest[0][1]) + (alWest[0][2] - alWest[1][2]))/2).toFixed(1) : "-";
document.getElementById("alWestFirstDiff").innerText = alWest[0][3];

document.getElementById("alWestSecondName").innerText = alWest[1][0];
document.getElementById("alWestSecondWs").innerText = alWest[1][1];
document.getElementById("alWestSecondLs").innerText = alWest[1][2];
document.getElementById("alWestSecondPer").innerText = (alWest[1][1]/(alWest[1][1]+alWest[1][2])).toFixed(3) == 1 ? (alWest[1][1]/(alWest[1][1]+alWest[1][2])).toFixed(3) : (alWest[1][1]/(alWest[1][1]+alWest[1][2])).toFixed(3).toString().substr(1);
document.getElementById("alWestSecondGB").innerText = ((alWest[0][1] - alWest[1][1]) + (alWest[1][2] - alWest[0][2]))/2 > 0 ? (((alWest[0][1] - alWest[1][1]) + (alWest[1][2] - alWest[0][2]))/2).toFixed(1) : "-";
document.getElementById("alWestSecondDiff").innerText = alWest[1][3];

document.getElementById("alWestThirdName").innerText = alWest[2][0];
document.getElementById("alWestThirdWs").innerText = alWest[2][1];
document.getElementById("alWestThirdLs").innerText = alWest[2][2];
document.getElementById("alWestThirdPer").innerText = (alWest[2][1]/(alWest[2][1]+alWest[2][2])).toFixed(3) == 1 ? (alWest[2][1]/(alWest[2][1]+alWest[2][2])).toFixed(3) : (alWest[2][1]/(alWest[2][1]+alWest[2][2])).toFixed(3).toString().substr(1);
document.getElementById("alWestThirdGB").innerText = ((alWest[0][1] - alWest[2][1]) + (alWest[2][2] - alWest[0][2]))/2 > 0 ? (((alWest[0][1] - alWest[2][1]) + (alWest[2][2] - alWest[0][2]))/2).toFixed(1) : "-";
document.getElementById("alWestThirdDiff").innerText = alWest[2][3];

document.getElementById("alWestFourthName").innerText = alWest[3][0];
document.getElementById("alWestFourthWs").innerText = alWest[3][1];
document.getElementById("alWestFourthLs").innerText = alWest[3][2];
document.getElementById("alWestFourthPer").innerText = (alWest[3][1]/(alWest[3][1]+alWest[3][2])).toFixed(3) == 1 ? (alWest[3][1]/(alWest[3][1]+alWest[3][2])).toFixed(3) : (alWest[3][1]/(alWest[3][1]+alWest[3][2])).toFixed(3).toString().substr(1);
document.getElementById("alWestFourthGB").innerText = ((alWest[0][1] - alWest[3][1]) + (alWest[3][2] - alWest[0][2]))/2 > 0 ? (((alWest[0][1] - alWest[3][1]) + (alWest[3][2] - alWest[0][2]))/2).toFixed(1) : "-";
document.getElementById("alWestFourthDiff").innerText = alWest[3][3];

document.getElementById("alWestFifthName").innerText = alWest[4][0];
document.getElementById("alWestFifthWs").innerText = alWest[4][1];
document.getElementById("alWestFifthLs").innerText = alWest[4][2];
document.getElementById("alWestFifthPer").innerText = (alWest[4][1]/(alWest[4][1]+alWest[4][2])).toFixed(3) == 1 ? (alWest[4][1]/(alWest[4][1]+alWest[4][2])).toFixed(3) : (alWest[4][1]/(alWest[4][1]+alWest[4][2])).toFixed(3).toString().substr(1);
document.getElementById("alWestFifthGB").innerText = ((alWest[0][1] - alWest[4][1]) + (alWest[4][2] - alWest[0][2]))/2 > 0 ? (((alWest[0][1] - alWest[4][1]) + (alWest[4][2] - alWest[0][2]))/2).toFixed(1) : "-";
document.getElementById("alWestFifthDiff").innerText = alWest[4][3];

var nlEast = [
    ["Washington", null, null, null],
    ["New York", null, null, null],
    ["Miami", null, null, null],
    ["Philadelphia", null, null, null],
    ["Atlanta", null, null, null]
];

//Fetch NL East data
//Nationals data
var wasRequest = new XMLHttpRequest();
wasRequest.open("GET", "http://gd2.mlb.com/components/team/stats/120-stats.xml", false);
wasRequest.send()
var wasData = wasRequest.responseXML;
nlEast[0][1] = parseInt(wasData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"));
nlEast[0][2] = parseInt(wasData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"));
nlEast[0][3] = parseInt(wasData.firstChild.nextSibling.firstChild.getAttribute("R")) - parseInt(wasData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"));
//Mets data
var nynRequest = new XMLHttpRequest();
nynRequest.open("GET", "http://gd2.mlb.com/components/team/stats/121-stats.xml", false);
nynRequest.send()
var nynData = nynRequest.responseXML;
nlEast[1][1] = parseInt(nynData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
nlEast[1][2] = parseInt(nynData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
nlEast[1][3] = parseInt(nynData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(nynData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Marlins data
var miaRequest = new XMLHttpRequest();
miaRequest.open("GET", "http://gd2.mlb.com/components/team/stats/146-stats.xml", false);
miaRequest.send()
var miaData = miaRequest.responseXML;
nlEast[2][1] = parseInt(miaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
nlEast[2][2] = parseInt(miaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
nlEast[2][3] = parseInt(miaData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(miaData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Phillies data
var phiRequest = new XMLHttpRequest();
phiRequest.open("GET", "http://gd2.mlb.com/components/team/stats/143-stats.xml", false);
phiRequest.send()
var phiData = phiRequest.responseXML;
nlEast[3][1] = parseInt(phiData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
nlEast[3][2] = parseInt(phiData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
nlEast[3][3] = parseInt(phiData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(phiData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Braves data
var atlRequest = new XMLHttpRequest();
atlRequest.open("GET", "http://gd2.mlb.com/components/team/stats/144-stats.xml", false);
atlRequest.send()
var atlData = atlRequest.responseXML;
nlEast[4][1] = parseInt(atlData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
nlEast[4][2] = parseInt(atlData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
nlEast[4][3] = parseInt(atlData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(atlData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);

//Sort NL East teams by record
nlEast.sort(function (a, b) {
    return b[1] / b[2] - a[1] / a[2];
});

//Put NL East data on page
document.getElementById("nlEastFirstName").innerText = nlEast[0][0];
document.getElementById("nlEastFirstWs").innerText = nlEast[0][1];
document.getElementById("nlEastFirstLs").innerText = nlEast[0][2];
document.getElementById("nlEastFirstPer").innerText = (nlEast[0][1]/(nlEast[0][1]+nlEast[0][2])).toFixed(3) == 1 ? (nlEast[0][1]/(nlEast[0][1]+nlEast[0][2])).toFixed(3) : (nlEast[0][1]/(nlEast[0][1]+nlEast[0][2])).toFixed(3).toString().substr(1);
document.getElementById("nlEastFirstGB").innerText = ((nlEast[1][1] - nlEast[0][1]) + (nlEast[0][2] - nlEast[1][2]))/2 > 0 ? (((nlEast[1][1] - nlEast[0][1]) + (nlEast[0][2] - nlEast[1][2]))/2).toFixed(1) : "-";
document.getElementById("nlEastFirstDiff").innerText = nlEast[0][3];

document.getElementById("nlEastSecondName").innerText = nlEast[1][0];
document.getElementById("nlEastSecondWs").innerText = nlEast[1][1];
document.getElementById("nlEastSecondLs").innerText = nlEast[1][2];
document.getElementById("nlEastSecondPer").innerText = (nlEast[1][1]/(nlEast[1][1]+nlEast[1][2])).toFixed(3) == 1 ? (nlEast[1][1]/(nlEast[1][1]+nlEast[1][2])).toFixed(3) : (nlEast[1][1]/(nlEast[1][1]+nlEast[1][2])).toFixed(3).toString().substr(1);
document.getElementById("nlEastSecondGB").innerText = ((nlEast[0][1] - nlEast[1][1]) + (nlEast[1][2] - nlEast[0][2]))/2 > 0 ? (((nlEast[0][1] - nlEast[1][1]) + (nlEast[1][2] - nlEast[0][2]))/2).toFixed(1) : "-";
document.getElementById("nlEastSecondDiff").innerText = nlEast[1][3];

document.getElementById("nlEastThirdName").innerText = nlEast[2][0];
document.getElementById("nlEastThirdWs").innerText = nlEast[2][1];
document.getElementById("nlEastThirdLs").innerText = nlEast[2][2];
document.getElementById("nlEastThirdPer").innerText = (nlEast[2][1]/(nlEast[2][1]+nlEast[2][2])).toFixed(3) == 1 ? (nlEast[2][1]/(nlEast[2][1]+nlEast[2][2])).toFixed(3) : (nlEast[2][1]/(nlEast[2][1]+nlEast[2][2])).toFixed(3).toString().substr(1);
document.getElementById("nlEastThirdGB").innerText = ((nlEast[0][1] - nlEast[2][1]) + (nlEast[2][2] - nlEast[0][2]))/2 > 0 ? (((nlEast[0][1] - nlEast[2][1]) + (nlEast[2][2] - nlEast[0][2]))/2).toFixed(1) : "-";
document.getElementById("nlEastThirdDiff").innerText = nlEast[2][3];

document.getElementById("nlEastFourthName").innerText = nlEast[3][0];
document.getElementById("nlEastFourthWs").innerText = nlEast[3][1];
document.getElementById("nlEastFourthLs").innerText = nlEast[3][2];
document.getElementById("nlEastFourthPer").innerText = (nlEast[3][1]/(nlEast[3][1]+nlEast[3][2])).toFixed(3) == 1 ? (nlEast[3][1]/(nlEast[3][1]+nlEast[3][2])).toFixed(3) : (nlEast[3][1]/(nlEast[3][1]+nlEast[3][2])).toFixed(3).toString().substr(1);
document.getElementById("nlEastFourthGB").innerText = ((nlEast[0][1] - nlEast[3][1]) + (nlEast[3][2] - nlEast[0][2]))/2 > 0 ? (((nlEast[0][1] - nlEast[3][1]) + (nlEast[3][2] - nlEast[0][2]))/2).toFixed(1) : "-";
document.getElementById("nlEastFourthDiff").innerText = nlEast[3][3];

document.getElementById("nlEastFifthName").innerText = nlEast[4][0];
document.getElementById("nlEastFifthWs").innerText = nlEast[4][1];
document.getElementById("nlEastFifthLs").innerText = nlEast[4][2];
document.getElementById("nlEastFifthPer").innerText = (nlEast[4][1]/(nlEast[4][1]+nlEast[4][2])).toFixed(3) == 1 ? (nlEast[4][1]/(nlEast[4][1]+nlEast[4][2])).toFixed(3) : (nlEast[4][1]/(nlEast[4][1]+nlEast[4][2])).toFixed(3).toString().substr(1);
document.getElementById("nlEastFifthGB").innerText = ((nlEast[0][1] - nlEast[4][1]) + (nlEast[4][2] - nlEast[0][2]))/2 > 0 ? (((nlEast[0][1] - nlEast[4][1]) + (nlEast[4][2] - nlEast[0][2]))/2).toFixed(1) : "-";
document.getElementById("nlEastFifthDiff").innerText = nlEast[4][3];

var nlCentral = [
    ["Chicago", null, null, null],
    ["St. Louis", null, null, null],
    ["Pittsburgh", null, null, null],
    ["Milwaukee", null, null, null],
    ["Cincinnati", null, null, null]
];

//Fetch NL Central data
//Cubs data
var chnRequest = new XMLHttpRequest();
chnRequest.open("GET", "http://gd2.mlb.com/components/team/stats/112-stats.xml", false);
chnRequest.send()
var chnData = chnRequest.responseXML;
nlCentral[0][1] = parseInt(chnData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"));
nlCentral[0][2] = parseInt(chnData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"));
nlCentral[0][3] = parseInt(chnData.firstChild.nextSibling.firstChild.getAttribute("R")) - parseInt(chnData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"));
//Cardinals data
var stlRequest = new XMLHttpRequest();
stlRequest.open("GET", "http://gd2.mlb.com/components/team/stats/138-stats.xml", false);
stlRequest.send()
var stlData = stlRequest.responseXML;
nlCentral[1][1] = parseInt(stlData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
nlCentral[1][2] = parseInt(stlData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
nlCentral[1][3] = parseInt(stlData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(stlData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Pirates data
var pitRequest = new XMLHttpRequest();
pitRequest.open("GET", "http://gd2.mlb.com/components/team/stats/134-stats.xml", false);
pitRequest.send()
var pitData = pitRequest.responseXML;
nlCentral[2][1] = parseInt(pitData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
nlCentral[2][2] = parseInt(pitData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
nlCentral[2][3] = parseInt(pitData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(pitData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Brewers data
var milRequest = new XMLHttpRequest();
milRequest.open("GET", "http://gd2.mlb.com/components/team/stats/158-stats.xml", false);
milRequest.send()
var milData = milRequest.responseXML;
nlCentral[3][1] = parseInt(milData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
nlCentral[3][2] = parseInt(milData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
nlCentral[3][3] = parseInt(milData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(milData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Reds data
var cinRequest = new XMLHttpRequest();
cinRequest.open("GET", "http://gd2.mlb.com/components/team/stats/113-stats.xml", false);
cinRequest.send()
var cinData = cinRequest.responseXML;
nlCentral[4][1] = parseInt(cinData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
nlCentral[4][2] = parseInt(cinData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
nlCentral[4][3] = parseInt(cinData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(cinData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);

//Sort NL Central teams by record
nlCentral.sort(function (a, b) {
    return b[1] / b[2] - a[1] / a[2];
});

//Put NL Central data on page
document.getElementById("nlCentralFirstName").innerText = nlCentral[0][0];
document.getElementById("nlCentralFirstWs").innerText = nlCentral[0][1];
document.getElementById("nlCentralFirstLs").innerText = nlCentral[0][2];
document.getElementById("nlCentralFirstPer").innerText = (nlCentral[0][1]/(nlCentral[0][1]+nlCentral[0][2])).toFixed(3) == 1 ? (nlCentral[0][1]/(nlCentral[0][1]+nlCentral[0][2])).toFixed(3) : (nlCentral[0][1]/(nlCentral[0][1]+nlCentral[0][2])).toFixed(3).toString().substr(1);
document.getElementById("nlCentralFirstGB").innerText = ((nlCentral[1][1] - nlCentral[0][1]) + (nlCentral[0][2] - nlCentral[1][2]))/2 > 0 ? (((nlCentral[1][1] - nlCentral[0][1]) + (nlCentral[0][2] - nlCentral[1][2]))/2).toFixed(1) : "-";
document.getElementById("nlCentralFirstDiff").innerText = nlCentral[0][3];

document.getElementById("nlCentralSecondName").innerText = nlCentral[1][0];
document.getElementById("nlCentralSecondWs").innerText = nlCentral[1][1];
document.getElementById("nlCentralSecondLs").innerText = nlCentral[1][2];
document.getElementById("nlCentralSecondPer").innerText = (nlCentral[1][1]/(nlCentral[1][1]+nlCentral[1][2])).toFixed(3) == 1 ? (nlCentral[1][1]/(nlCentral[1][1]+nlCentral[1][2])).toFixed(3) : (nlCentral[1][1]/(nlCentral[1][1]+nlCentral[1][2])).toFixed(3).toString().substr(1);
document.getElementById("nlCentralSecondGB").innerText = ((nlCentral[0][1] - nlCentral[1][1]) + (nlCentral[1][2] - nlCentral[0][2]))/2 > 0 ? (((nlCentral[0][1] - nlCentral[1][1]) + (nlCentral[1][2] - nlCentral[0][2]))/2).toFixed(1) : "-";
document.getElementById("nlCentralSecondDiff").innerText = nlCentral[1][3];

document.getElementById("nlCentralThirdName").innerText = nlCentral[2][0];
document.getElementById("nlCentralThirdWs").innerText = nlCentral[2][1];
document.getElementById("nlCentralThirdLs").innerText = nlCentral[2][2];
document.getElementById("nlCentralThirdPer").innerText = (nlCentral[2][1]/(nlCentral[2][1]+nlCentral[2][2])).toFixed(3) == 1 ? (nlCentral[2][1]/(nlCentral[2][1]+nlCentral[2][2])).toFixed(3) : (nlCentral[2][1]/(nlCentral[2][1]+nlCentral[2][2])).toFixed(3).toString().substr(1);
document.getElementById("nlCentralThirdGB").innerText = ((nlCentral[0][1] - nlCentral[2][1]) + (nlCentral[2][2] - nlCentral[0][2]))/2 > 0 ? (((nlCentral[0][1] - nlCentral[2][1]) + (nlCentral[2][2] - nlCentral[0][2]))/2).toFixed(1) : "-";
document.getElementById("nlCentralThirdDiff").innerText = nlCentral[2][3];

document.getElementById("nlCentralFourthName").innerText = nlCentral[3][0];
document.getElementById("nlCentralFourthWs").innerText = nlCentral[3][1];
document.getElementById("nlCentralFourthLs").innerText = nlCentral[3][2];
document.getElementById("nlCentralFourthPer").innerText = (nlCentral[3][1]/(nlCentral[3][1]+nlCentral[3][2])).toFixed(3) == 1 ? (nlCentral[3][1]/(nlCentral[3][1]+nlCentral[3][2])).toFixed(3) : (nlCentral[3][1]/(nlCentral[3][1]+nlCentral[3][2])).toFixed(3).toString().substr(1);
document.getElementById("nlCentralFourthGB").innerText = ((nlCentral[0][1] - nlCentral[3][1]) + (nlCentral[3][2] - nlCentral[0][2]))/2 > 0 ? (((nlCentral[0][1] - nlCentral[3][1]) + (nlCentral[3][2] - nlCentral[0][2]))/2).toFixed(1) : "-";
document.getElementById("nlCentralFourthDiff").innerText = nlCentral[3][3];

document.getElementById("nlCentralFifthName").innerText = nlCentral[4][0];
document.getElementById("nlCentralFifthWs").innerText = nlCentral[4][1];
document.getElementById("nlCentralFifthLs").innerText = nlCentral[4][2];
document.getElementById("nlCentralFifthPer").innerText = (nlCentral[4][1]/(nlCentral[4][1]+nlCentral[4][2])).toFixed(3) == 1 ? (nlCentral[4][1]/(nlCentral[4][1]+nlCentral[4][2])).toFixed(3) : (nlCentral[4][1]/(nlCentral[4][1]+nlCentral[4][2])).toFixed(3).toString().substr(1);
document.getElementById("nlCentralFifthGB").innerText = ((nlCentral[0][1] - nlCentral[4][1]) + (nlCentral[4][2] - nlCentral[0][2]))/2 > 0 ? (((nlCentral[0][1] - nlCentral[4][1]) + (nlCentral[4][2] - nlCentral[0][2]))/2).toFixed(1) : "-";
document.getElementById("nlCentralFifthDiff").innerText = nlCentral[4][3];

var nlWest = [
    ["Los Angeles", null, null, null],
    ["San Francisco", null, null, null],
    ["San Diego", null, null, null],
    ["Arizona", null, null, null],
    ["Colorado", null, null, null]
];

//Fetch NL West data
//Dodgers data
var lanRequest = new XMLHttpRequest();
lanRequest.open("GET", "http://gd2.mlb.com/components/team/stats/119-stats.xml", false);
lanRequest.send()
var lanData = lanRequest.responseXML;
nlWest[0][1] = parseInt(lanData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"));
nlWest[0][2] = parseInt(lanData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"));
nlWest[0][3] = parseInt(lanData.firstChild.nextSibling.firstChild.getAttribute("R")) - parseInt(lanData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"));
//Giants data
var stlRequest = new XMLHttpRequest();
sfRequest.open("GET", "http://gd2.mlb.com/components/team/stats/137-stats.xml", false);
sfRequest.send()
var sfData = sfRequest.responseXML;
nlWest[1][1] = parseInt(sfData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
nlWest[1][2] = parseInt(sfData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
nlWest[1][3] = parseInt(sfData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(sfData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Padres data
var sdRequest = new XMLHttpRequest();
sdRequest.open("GET", "http://gd2.mlb.com/components/team/stats/135-stats.xml", false);
sdRequest.send()
var sdData = sdRequest.responseXML;
nlWest[2][1] = parseInt(sdData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
nlWest[2][2] = parseInt(sdData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
nlWest[2][3] = parseInt(sdData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(sdData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Diamondbacks data
var ariRequest = new XMLHttpRequest();
ariRequest.open("GET", "http://gd2.mlb.com/components/team/stats/109-stats.xml", false);
ariRequest.send()
var ariData = ariRequest.responseXML;
nlWest[3][1] = parseInt(ariData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
nlWest[3][2] = parseInt(ariData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
nlWest[3][3] = parseInt(ariData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(ariData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
//Rockies data
var colRequest = new XMLHttpRequest();
colRequest.open("GET", "http://gd2.mlb.com/components/team/stats/115-stats.xml", false);
colRequest.send()
var colData = colRequest.responseXML;
nlWest[4][1] = parseInt(colData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
nlWest[4][2] = parseInt(colData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
nlWest[4][3] = parseInt(colData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(colData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);

//Sort NL West teams by record
nlWest.sort(function (a, b) {
    return b[1] / b[2] - a[1] / a[2];
});

//Put NL West data on page
document.getElementById("nlWestFirstName").innerText = nlWest[0][0];
document.getElementById("nlWestFirstWs").innerText = nlWest[0][1];
document.getElementById("nlWestFirstLs").innerText = nlWest[0][2];
document.getElementById("nlWestFirstPer").innerText = (nlWest[0][1]/(nlWest[0][1]+nlWest[0][2])).toFixed(3) == 1 ? (nlWest[0][1]/(nlWest[0][1]+nlWest[0][2])).toFixed(3) : (nlWest[0][1]/(nlWest[0][1]+nlWest[0][2])).toFixed(3).toString().substr(1);
document.getElementById("nlWestFirstGB").innerText = ((nlWest[1][1] - nlWest[0][1]) + (nlWest[0][2] - nlWest[1][2]))/2 > 0 ? (((nlWest[1][1] - nlWest[0][1]) + (nlWest[0][2] - nlWest[1][2]))/2).toFixed(1) : "-";
document.getElementById("nlWestFirstDiff").innerText = nlWest[0][3];

document.getElementById("nlWestSecondName").innerText = nlWest[1][0];
document.getElementById("nlWestSecondWs").innerText = nlWest[1][1];
document.getElementById("nlWestSecondLs").innerText = nlWest[1][2];
document.getElementById("nlWestSecondPer").innerText = (nlWest[1][1]/(nlWest[1][1]+nlWest[1][2])).toFixed(3) == 1 ? (nlWest[1][1]/(nlWest[1][1]+nlWest[1][2])).toFixed(3) : (nlWest[1][1]/(nlWest[1][1]+nlWest[1][2])).toFixed(3).toString().substr(1);
document.getElementById("nlWestSecondGB").innerText = ((nlWest[0][1] - nlWest[1][1]) + (nlWest[1][2] - nlWest[0][2]))/2 > 0 ? (((nlWest[0][1] - nlWest[1][1]) + (nlWest[1][2] - nlWest[0][2]))/2).toFixed(1) : "-";
document.getElementById("nlWestSecondDiff").innerText = nlWest[1][3];

document.getElementById("nlWestThirdName").innerText = nlWest[2][0];
document.getElementById("nlWestThirdWs").innerText = nlWest[2][1];
document.getElementById("nlWestThirdLs").innerText = nlWest[2][2];
document.getElementById("nlWestThirdPer").innerText = (nlWest[2][1]/(nlWest[2][1]+nlWest[2][2])).toFixed(3) == 1 ? (nlWest[2][1]/(nlWest[2][1]+nlWest[2][2])).toFixed(3) : (nlWest[2][1]/(nlWest[2][1]+nlWest[2][2])).toFixed(3).toString().substr(1);
document.getElementById("nlWestThirdGB").innerText = ((nlWest[0][1] - nlWest[2][1]) + (nlWest[2][2] - nlWest[0][2]))/2 > 0 ? (((nlWest[0][1] - nlWest[2][1]) + (nlWest[2][2] - nlWest[0][2]))/2).toFixed(1) : "-";
document.getElementById("nlWestThirdDiff").innerText = nlWest[2][3];

document.getElementById("nlWestFourthName").innerText = nlWest[3][0];
document.getElementById("nlWestFourthWs").innerText = nlWest[3][1];
document.getElementById("nlWestFourthLs").innerText = nlWest[3][2];
document.getElementById("nlWestFourthPer").innerText = (nlWest[3][1]/(nlWest[3][1]+nlWest[3][2])).toFixed(3) == 1 ? (nlWest[3][1]/(nlWest[3][1]+nlWest[3][2])).toFixed(3) : (nlWest[3][1]/(nlWest[3][1]+nlWest[3][2])).toFixed(3).toString().substr(1);
document.getElementById("nlWestFourthGB").innerText = ((nlWest[0][1] - nlWest[3][1]) + (nlWest[3][2] - nlWest[0][2]))/2 > 0 ? (((nlWest[0][1] - nlWest[3][1]) + (nlWest[3][2] - nlWest[0][2]))/2).toFixed(1) : "-";
document.getElementById("nlWestFourthDiff").innerText = nlWest[3][3];

document.getElementById("nlWestFifthName").innerText = nlWest[4][0];
document.getElementById("nlWestFifthWs").innerText = nlWest[4][1];
document.getElementById("nlWestFifthLs").innerText = nlWest[4][2];
document.getElementById("nlWestFifthPer").innerText = (nlWest[4][1]/(nlWest[4][1]+nlWest[4][2])).toFixed(3) == 1 ? (nlWest[4][1]/(nlWest[4][1]+nlWest[4][2])).toFixed(3) : (nlWest[4][1]/(nlWest[4][1]+nlWest[4][2])).toFixed(3).toString().substr(1);
document.getElementById("nlWestFifthGB").innerText = ((nlWest[0][1] - nlWest[4][1]) + (nlWest[4][2] - nlWest[0][2]))/2 > 0 ? (((nlWest[0][1] - nlWest[4][1]) + (nlWest[4][2] - nlWest[0][2]))/2).toFixed(1) : "-";
document.getElementById("nlWestFifthDiff").innerText = nlWest[4][3];