$(document).ready(function (){
    
    var teamsArray = [
        [
            "alEast",
            [
                ["New York", 147, null, null, null, false],
                ["Boston", 111, null, null, null, false],
                ["Tampa Bay", 139, null, null, null, false],
                ["Toronto", 141, null, null, null, false],
                ["Baltimore", 110, null, null, null, false]            
            ]
        ],
        [
            "alCentral",
            [
                ["Cleveland", 114, null, null, null, false],
                ["Detroit", 116, null, null, null, false],
                ["Chicago", 145, null, null, null, false],
                ["Minnesota", 142, null, null, null, false],
                ["Kansas City", 118, null, null, null, false]         
            ]
        ],
        [
            "alWest",
            [
                ["Los Angeles", 108, null, null, null, false],
                ["Seattle", 136, null, null, null, false],
                ["Oakland", 133, null, null, null, false],
                ["Texas", 140, null, null, null, false],
                ["Houston", 117, null, null, null, false]            
            ]
        ],
        [
            "nlEast",
            [
                ["Washington", 120, null, null, null, false],
                ["New York", 121, null, null, null, false],
                ["Miami", 146, null, null, null, false],
                ["Philadelphia", 143, null, null, null, false],
                ["Atlanta", 144, null, null, null, false]            
            ]
        ],
        [
            "nlCentral",
            [
                ["Chicago", 112, null, null, null, false],
                ["St. Louis", 138, null, null, null, false],
                ["Pittsburgh", 134, null, null, null, false],
                ["Milwaukee", 158, null, null, null, false],
                ["Cincinnati", 113, null, null, null, false]            
            ]
        ],
        [
            "nlWest",
            [
                ["Los Angeles", 119, null, null, null, false],
                ["San Francisco", 137, null, null, null, false],
                ["San Diego", 135, null, null, null, false],
                ["Arizona", 109, null, null, null, false],
                ["Colorado", 115, null, null, null, false]           
            ]
        ]
    ];

    var tablePositions = [
        "First",
        "Second",
        "Third",
        "Fourth",
        "Fifth"
    ];

    var generateDataParseFunction = function(teamArray) {
        return function(xmlData) {
            teamArray[2] = parseInt(xmlData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("W"), 10);
            teamArray[3] = parseInt(xmlData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("L"), 10);
            teamArray[4] = parseInt(xmlData.firstChild.nextSibling.firstChild.getAttribute("R"), 10) - parseInt(xmlData.firstChild.nextSibling.firstChild.nextSibling.getAttribute("R"), 10);
            teamArray[5] = true;
            console.log(teamArray);
        }
    };

    for (var i = 0; i < teamsArray.length; i++) {    
        console.log("Making " + teamsArray[i][0] + " requests");
        for (var j = 0; j < teamsArray[i][1].length; j++) {
            console.log("\tMaking " + teamsArray[i][1][j][0] + " request");
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://gd2.mlb.com/components/team/stats/"+teamsArray[i][1][j][1]+"-stats.xml", false);
            xhr.onload = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log("\tLoading " + teamsArray[i][1][j][0] + " data");
                    generateDataParseFunction(teamsArray[i][1][j])(xhr.responseXML);
                    console.log("\t" + teamsArray[i][1][j][0] + " data loaded");
                }
            };
            xhr.send();
        }   
    }

    //separating (generating xhrs and parsing data) and (sorting arrays and placing data in dom) for future asynchronization of xhrs
     
    for (var i = 0; i < teamsArray.length; i++) {
        
        console.log("Sorting " + teamsArray[i][0]);
        teamsArray[i][1].sort(function (a, b) {
        return b[2]/b[3] - a[2]/a[3];
        });
        console.log(teamsArray[i][1]);
        
        for (var j = 0; j < teamsArray[i][1].length; j++) {
            console.log("Writing "+ teamsArray[i][1][j][0]);
            document.getElementById(teamsArray[i][0] + tablePositions[j] + "Name").innerText = teamsArray[i][1][j][0];
            document.getElementById(teamsArray[i][0] + tablePositions[j] + "Ws").innerText = teamsArray[i][1][j][2];
            document.getElementById(teamsArray[i][0] + tablePositions[j] + "Ls").innerText = teamsArray[i][1][j][3];
            document.getElementById(teamsArray[i][0] + tablePositions[j] + "Per").innerText = (teamsArray[i][1][j][2]/(teamsArray[i][1][j][2]+teamsArray[i][1][j][3])).toFixed(3) == 1 ? (teamsArray[i][1][j][2]/(teamsArray[i][1][j][2]+teamsArray[i][1][j][3])).toFixed(3) : (teamsArray[i][1][j][2]/(teamsArray[i][1][j][2]+teamsArray[i][1][j][3])).toFixed(3).toString().substr(1);
            document.getElementById(teamsArray[i][0] + tablePositions[j] + "GB").innerText = ((teamsArray[i][1][0][2] - teamsArray[i][1][j][2]) + (teamsArray[i][1][j][3] - teamsArray[i][1][0][3]))/2 > 0 ? (((teamsArray[i][1][0][2] - teamsArray[i][1][j][2]) + (teamsArray[i][1][j][3] - teamsArray[i][1][0][3]))/2).toFixed(1) : "-";
            document.getElementById(teamsArray[i][0] + tablePositions[j] + "Diff").innerText = teamsArray[i][1][j][4];
        }
    }

});