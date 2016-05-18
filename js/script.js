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

var nlEast = [
    ["Washington", null, null, null],
    ["New York", null, null, null],
    ["Miami", null, null, null],
    ["Philadelphia", null, null, null],
    ["Atlanta", null, null, null]
];

var nlCentral = [
    ["Chicago", null, null, null],
    ["St. Louis", null, null, null],
    ["Pittsburgh", null, null, null],
    ["Milwaukee", null, null, null],
    ["Cincinnati", null, null, null]
];

var nlWest = [
    ["Los Angeles", null, null, null],
    ["San Francisco", null, null, null],
    ["San Diego", null, null, null],
    ["Arizona", null, null, null],
    ["Colorado", null, null, null]
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