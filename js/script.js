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
//text 140
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

var alCentral = [
    ["Cleveland", null, null, null],
    ["Detroit", null, null, null],
    ["Chicago", null, null, null],
    ["Minneapolis", null, null, null],
    ["Kansas City", null, null, null]
];

var alWest = [
    ["Los Angeles", null, null, null],
    ["Seattle", null, null, null],
    ["Oakland", null, null, null],
    ["Texas", null, null, null],
    ["Houston", null, null, null]
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
document.getElementById("alEastFirstGB").innerText = ((alEast[1][1] - alEast[0][1]) + (alEast[0][2] - alEast[1][2]))/2 > 0 ? ((alEast[1][1] - alEast[0][1]) + (alEast[0][2] - alEast[1][2]))/2 > 0 : "-";
document.getElementById("alEastFirstDiff").innerText = alEast[0][3];

document.getElementById("alEastSecondName").innerText = alEast[1][0];
document.getElementById("alEastSecondWs").innerText = alEast[1][1];
document.getElementById("alEastSecondLs").innerText = alEast[1][2];
document.getElementById("alEastSecondPer").innerText = (alEast[1][1]/(alEast[1][1]+alEast[1][2])).toFixed(3) == 1 ? (alEast[1][1]/(alEast[1][1]+alEast[1][2])).toFixed(3) : (alEast[1][1]/(alEast[1][1]+alEast[1][2])).toFixed(3).toString().substr(1);
document.getElementById("alEastSecondGB").innerText = ((alEast[0][1] - alEast[1][1]) + (alEast[1][2] - alEast[0][2]))/2 > 0 ? ((alEast[0][1] - alEast[1][1]) + (alEast[1][2] - alEast[0][2]))/2 : "-";
document.getElementById("alEastSecondDiff").innerText = alEast[1][3];

document.getElementById("alEastThirdName").innerText = alEast[2][0];
document.getElementById("alEastThirdWs").innerText = alEast[2][1];
document.getElementById("alEastThirdLs").innerText = alEast[2][2];
document.getElementById("alEastThirdPer").innerText = (alEast[2][1]/(alEast[2][1]+alEast[2][2])).toFixed(3) == 1 ? (alEast[2][1]/(alEast[2][1]+alEast[2][2])).toFixed(3) : (alEast[2][1]/(alEast[2][1]+alEast[2][2])).toFixed(3).toString().substr(1);
document.getElementById("alEastThirdGB").innerText = ((alEast[0][1] - alEast[2][1]) + (alEast[2][2] - alEast[0][2]))/2 > 0 ? ((alEast[0][1] - alEast[2][1]) + (alEast[2][2] - alEast[0][2]))/2 : "-";
document.getElementById("alEastThirdDiff").innerText = alEast[2][3];

document.getElementById("alEastFourthName").innerText = alEast[3][0];
document.getElementById("alEastFourthWs").innerText = alEast[3][1];
document.getElementById("alEastFourthLs").innerText = alEast[3][2];
document.getElementById("alEastFourthPer").innerText = (alEast[3][1]/(alEast[3][1]+alEast[3][2])).toFixed(3) == 1 ? (alEast[3][1]/(alEast[3][1]+alEast[3][2])).toFixed(3) : (alEast[3][1]/(alEast[3][1]+alEast[3][2])).toFixed(3).toString().substr(1);
document.getElementById("alEastFourthGB").innerText = ((alEast[0][1] - alEast[3][1]) + (alEast[3][2] - alEast[0][2]))/2 > 0 ? ((alEast[0][1] - alEast[3][1]) + (alEast[3][2] - alEast[0][2]))/2 : "-";
document.getElementById("alEastFourthDiff").innerText = alEast[3][3];

document.getElementById("alEastFifthName").innerText = alEast[4][0];
document.getElementById("alEastFifthWs").innerText = alEast[4][1];
document.getElementById("alEastFifthLs").innerText = alEast[4][2];
document.getElementById("alEastFifthPer").innerText = (alEast[4][1]/(alEast[4][1]+alEast[4][2])).toFixed(3) == 1 ? (alEast[4][1]/(alEast[4][1]+alEast[4][2])).toFixed(3) : (alEast[4][1]/(alEast[4][1]+alEast[4][2])).toFixed(3).toString().substr(1);
document.getElementById("alEastFifthGB").innerText = ((alEast[0][1] - alEast[4][1]) + (alEast[4][2] - alEast[0][2]))/2 > 0 ? ((alEast[0][1] - alEast[4][1]) + (alEast[4][2] - alEast[0][2]))/2 : "-";
document.getElementById("alEastFifthDiff").innerText = alEast[4][3];

