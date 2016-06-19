<?php
$baseball = array(
    array(
    	array(
			array("Baltimore", 110, 0, 0, 0, 0),
			array("Boston", 111, 0, 0, 0, 0),
			array("New York", 147, 0, 0, 0, 0),
			array("Tampa Bay", 139, 0, 0, 0, 0),
			array("Toronto", 141, 0, 0, 0, 0)
    	),
    	array(
			array("Chicago", 145, 0, 0, 0, 0),
			array("Cleveland", 114, 0, 0, 0, 0),
			array("Detroit", 116, 0, 0, 0, 0),
			array("Kansas City", 118, 0, 0, 0, 0),
			array("Minnesota", 142, 0, 0, 0, 0)
		),
		array(
			array("Houston", 117, 0, 0, 0, 0),
			array("Los Angeles", 108, 0, 0, 0, 0),
			array("Oakland", 133, 0, 0, 0, 0),
			array("Seattle", 136, 0, 0, 0, 0),
			array("Texas", 140, 0, 0, 0, 0)
		)
    ),
    array(
		array(
			array("Atlanta", 144, 0, 0, 0, 0),
			array("Miami", 146, 0, 0, 0, 0),
			array("New York", 121, 0, 0, 0, 0),
			array("Philadelphia", 143, 0, 0, 0, 0),
			array("Washington", 120, 0, 0, 0, 0)
		),
		array(
			array("Chicago", 112, 0, 0, 0, 0),
			array("Cincinnati", 113, 0, 0, 0, 0),
			array("Milkwaukee", 158, 0, 0, 0, 0),
			array("Pittsburgh", 134, 0, 0, 0, 0),
			array("Saint Louis", 138, 0, 0, 0, 0)
		),
		array(
			array("Arizona", 109, 0, 0, 0, 0),
			array("Colorado", 115, 0, 0, 0, 0),
			array("Los Angeles", 119, 0, 0, 0, 0),
			array("San Diego", 135, 0, 0, 0, 0),
			array("San Francisco", 137, 0, 0, 0, 0)
		)
    )
);


foreach ($baseball as &$league) {
	foreach($league as &$division) {
		foreach($division as &$team) {
			$xml = simplexml_load_file("http://gd2.mlb.com/components/team/stats/" . $team[1] . "-stats.xml");
			//$team[2] = intval($xml->children()[1]['W']);
			//$team[3] = intval($xml->children()[1]['L']);
			$team[4] = intval($xml->children()[0]['R']);
			$team[5] = intval($xml->children()[1]['R']);
		}
	}
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>MLB Standings</title>
    <meta name="description" content="A beautifully simple MLB standings pages">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <h2>American League</h2>
                <div class="row">
                    <div class="col-xs-12">
                        <h3>East</h3>
                        <table class="table table-bordered table-condensed">
                            <tr class="hidden-md hidden-lg">
                                <th></th>
                                <th>W</th>
                                <th>L</th>
                                <th>%</th>
                                <th>GB</th>
                                <th>RΔ</th>
                            </tr>
                            <tr class="hidden-xs hidden-sm">
                                <th></th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Percentage</th>
                                <th>Games Back</th>
                                <th>Run Diff</th>
                            </tr>
                            <tr>
                                <td class="teamName"><?php echo $baseball[0][0][0][0];?></td>
                                <td><?php echo $baseball[0][0][0][2];?></td>
                                <td><?php echo $baseball[0][0][0][3];?></td>
                                <td><?php echo number_format($baseball[0][0][0][2]/($baseball[0][0][0][2]+$baseball[0][0][0][3]),3);?></td>
                                <td>&nbsp;</td>
                                <td><?php echo $baseball[0][0][0][4] - $baseball[0][0][0][5];?></td>
                            </tr>
                            <tr>
                                <td class="teamName"><?php echo $baseball[0][0][1][0];?></td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td class="teamName"><?php echo $baseball[0][0][2][0];?></td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td class="teamName"><?php echo $baseball[0][0][3][0];?></td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td class="teamName"><?php echo $baseball[0][0][4][0];?></td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>                               
                        </table>
                    </div>
                    <div class="col-xs-12">
                        <h3>Central</h3>
                        <table class="table table-bordered table-condensed">
                            <tr class="hidden-md hidden-lg">
                                <th></th>
                                <th>W</th>
                                <th>L</th>
                                <th>%</th>
                                <th>GB</th>
                                <th>RΔ</th>
                            </tr>
                            <tr class="hidden-xs hidden-sm">
                                <th></th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Percentage</th>
                                <th>Games Back</th>
                                <th>Run Diff</th>
                            </tr>
                            <tr>
                                <td id="alCentralFirstName" class="teamName">&nbsp;</td>
                                <td id="alCentralFirstWs">&nbsp;</td>
                                <td id="alCentralFirstLs">&nbsp;</td>
                                <td id="alCentralFirstPer">&nbsp;</td>
                                <td id="alCentralFirstGB">&nbsp;</td>
                                <td id="alCentralFirstDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="alCentralSecondName" class="teamName">&nbsp;</td>
                                <td id="alCentralSecondWs">&nbsp;</td>
                                <td id="alCentralSecondLs">&nbsp;</td>
                                <td id="alCentralSecondPer">&nbsp;</td>
                                <td id="alCentralSecondGB">&nbsp;</td>
                                <td id="alCentralSecondDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="alCentralThirdName" class="teamName">&nbsp;</td>
                                <td id="alCentralThirdWs">&nbsp;</td>
                                <td id="alCentralThirdLs">&nbsp;</td>
                                <td id="alCentralThirdPer">&nbsp;</td>
                                <td id="alCentralThirdGB">&nbsp;</td>
                                <td id="alCentralThirdDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="alCentralFourthName" class="teamName">&nbsp;</td>
                                <td id="alCentralFourthWs">&nbsp;</td>
                                <td id="alCentralFourthLs">&nbsp;</td>
                                <td id="alCentralFourthPer">&nbsp;</td>
                                <td id="alCentralFourthGB">&nbsp;</td>
                                <td id="alCentralFourthDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="alCentralFifthName" class="teamName">&nbsp;</td>
                                <td id="alCentralFifthWs">&nbsp;</td>
                                <td id="alCentralFifthLs">&nbsp;</td>
                                <td id="alCentralFifthPer">&nbsp;</td>
                                <td id="alCentralFifthGB">&nbsp;</td>
                                <td id="alCentralFifthDiff">&nbsp;</td>
                            </tr>                               
                        </table>
                    </div>
                    <div class="col-xs-12">
                        <h3>West</h3>
                        <table class="table table-bordered table-condensed">
                            <tr class="hidden-md hidden-lg">
                                <th></th>
                                <th>W</th>
                                <th>L</th>
                                <th>%</th>
                                <th>GB</th>
                                <th>RΔ</th>
                            </tr>
                            <tr class="hidden-xs hidden-sm">
                                <th></th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Percentage</th>
                                <th>Games Back</th>
                                <th>Run Diff</th>
                            </tr>
                            <tr>
                                <td id="alWestFirstName" class="teamName">&nbsp;</td>
                                <td id="alWestFirstWs">&nbsp;</td>
                                <td id="alWestFirstLs">&nbsp;</td>
                                <td id="alWestFirstPer">&nbsp;</td>
                                <td id="alWestFirstGB">&nbsp;</td>
                                <td id="alWestFirstDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="alWestSecondName" class="teamName">&nbsp;</td>
                                <td id="alWestSecondWs">&nbsp;</td>
                                <td id="alWestSecondLs">&nbsp;</td>
                                <td id="alWestSecondPer">&nbsp;</td>
                                <td id="alWestSecondGB">&nbsp;</td>
                                <td id="alWestSecondDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="alWestThirdName" class="teamName">&nbsp;</td>
                                <td id="alWestThirdWs">&nbsp;</td>
                                <td id="alWestThirdLs">&nbsp;</td>
                                <td id="alWestThirdPer">&nbsp;</td>
                                <td id="alWestThirdGB">&nbsp;</td>
                                <td id="alWestThirdDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="alWestFourthName" class="teamName">&nbsp;</td>
                                <td id="alWestFourthWs">&nbsp;</td>
                                <td id="alWestFourthLs">&nbsp;</td>
                                <td id="alWestFourthPer">&nbsp;</td>
                                <td id="alWestFourthGB">&nbsp;</td>
                                <td id="alWestFourthDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="alWestFifthName" class="teamName">&nbsp;</td>
                                <td id="alWestFifthWs">&nbsp;</td>
                                <td id="alWestFifthLs">&nbsp;</td>
                                <td id="alWestFifthPer">&nbsp;</td>
                                <td id="alWestFifthGB">&nbsp;</td>
                                <td id="alWestFifthDiff">&nbsp;</td>
                            </tr>                               
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <h2>National League</h2>
                <div class="row">
                    <div class="col-xs-12">
                        <h3>East</h3>
                        <table class="table table-bordered table-condensed">
                            <tr class="hidden-md hidden-lg">
                                <th></th>
                                <th>W</th>
                                <th>L</th>
                                <th>%</th>
                                <th>GB</th>
                                <th>RΔ</th>
                            </tr>
                            <tr class="hidden-xs hidden-sm">
                                <th></th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Percentage</th>
                                <th>Games Back</th>
                                <th>Run Diff</th>
                            </tr>
                            <tr>
                                <td id="nlEastFirstName" class="teamName">&nbsp;</td>
                                <td id="nlEastFirstWs">&nbsp;</td>
                                <td id="nlEastFirstLs">&nbsp;</td>
                                <td id="nlEastFirstPer">&nbsp;</td>
                                <td id="nlEastFirstGB">&nbsp;</td>
                                <td id="nlEastFirstDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="nlEastSecondName" class="teamName">&nbsp;</td>
                                <td id="nlEastSecondWs">&nbsp;</td>
                                <td id="nlEastSecondLs">&nbsp;</td>
                                <td id="nlEastSecondPer">&nbsp;</td>
                                <td id="nlEastSecondGB">&nbsp;</td>
                                <td id="nlEastSecondDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="nlEastThirdName" class="teamName">&nbsp;</td>
                                <td id="nlEastThirdWs">&nbsp;</td>
                                <td id="nlEastThirdLs">&nbsp;</td>
                                <td id="nlEastThirdPer">&nbsp;</td>
                                <td id="nlEastThirdGB">&nbsp;</td>
                                <td id="nlEastThirdDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="nlEastFourthName" class="teamName">&nbsp;</td>
                                <td id="nlEastFourthWs">&nbsp;</td>
                                <td id="nlEastFourthLs">&nbsp;</td>
                                <td id="nlEastFourthPer">&nbsp;</td>
                                <td id="nlEastFourthGB">&nbsp;</td>
                                <td id="nlEastFourthDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="nlEastFifthName" class="teamName">&nbsp;</td>
                                <td id="nlEastFifthWs">&nbsp;</td>
                                <td id="nlEastFifthLs">&nbsp;</td>
                                <td id="nlEastFifthPer">&nbsp;</td>
                                <td id="nlEastFifthGB">&nbsp;</td>
                                <td id="nlEastFifthDiff">&nbsp;</td>
                            </tr>                               
                        </table>
                    </div>
                    <div class="col-xs-12">
                        <h3>Central</h3>
                        <table class="table table-bordered table-condensed">
                            <tr class="hidden-md hidden-lg">
                                <th></th>
                                <th>W</th>
                                <th>L</th>
                                <th>%</th>
                                <th>GB</th>
                                <th>RΔ</th>
                            </tr>
                            <tr class="hidden-xs hidden-sm">
                                <th></th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Percentage</th>
                                <th>Games Back</th>
                                <th>Run Diff</th>
                            </tr>
                            <tr>
                                <td id="nlCentralFirstName" class="teamName">&nbsp;</td>
                                <td id="nlCentralFirstWs">&nbsp;</td>
                                <td id="nlCentralFirstLs">&nbsp;</td>
                                <td id="nlCentralFirstPer">&nbsp;</td>
                                <td id="nlCentralFirstGB">&nbsp;</td>
                                <td id="nlCentralFirstDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="nlCentralSecondName" class="teamName">&nbsp;</td>
                                <td id="nlCentralSecondWs">&nbsp;</td>
                                <td id="nlCentralSecondLs">&nbsp;</td>
                                <td id="nlCentralSecondPer">&nbsp;</td>
                                <td id="nlCentralSecondGB">&nbsp;</td>
                                <td id="nlCentralSecondDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="nlCentralThirdName" class="teamName">&nbsp;</td>
                                <td id="nlCentralThirdWs">&nbsp;</td>
                                <td id="nlCentralThirdLs">&nbsp;</td>
                                <td id="nlCentralThirdPer">&nbsp;</td>
                                <td id="nlCentralThirdGB">&nbsp;</td>
                                <td id="nlCentralThirdDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="nlCentralFourthName" class="teamName">&nbsp;</td>
                                <td id="nlCentralFourthWs">&nbsp;</td>
                                <td id="nlCentralFourthLs">&nbsp;</td>
                                <td id="nlCentralFourthPer">&nbsp;</td>
                                <td id="nlCentralFourthGB">&nbsp;</td>
                                <td id="nlCentralFourthDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="nlCentralFifthName" class="teamName">&nbsp;</td>
                                <td id="nlCentralFifthWs">&nbsp;</td>
                                <td id="nlCentralFifthLs">&nbsp;</td>
                                <td id="nlCentralFifthPer">&nbsp;</td>
                                <td id="nlCentralFifthGB">&nbsp;</td>
                                <td id="nlCentralFifthDiff">&nbsp;</td>
                            </tr>                               
                        </table>
                    </div>
                    <div class="col-xs-12">
                        <h3>West</h3>
                        <table class="table table-bordered table-condensed">
                            <tr class="hidden-md hidden-lg">
                                <th></th>
                                <th>W</th>
                                <th>L</th>
                                <th>%</th>
                                <th>GB</th>
                                <th>RΔ</th>
                            </tr>
                            <tr class="hidden-xs hidden-sm">
                                <th></th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>Percentage</th>
                                <th>Games Back</th>
                                <th>Run Diff</th>
                            </tr>
                            <tr>
                                <td id="nlWestFirstName" class="teamName">&nbsp;</td>
                                <td id="nlWestFirstWs">&nbsp;</td>
                                <td id="nlWestFirstLs">&nbsp;</td>
                                <td id="nlWestFirstPer">&nbsp;</td>
                                <td id="nlWestFirstGB">&nbsp;</td>
                                <td id="nlWestFirstDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="nlWestSecondName" class="teamName">&nbsp;</td>
                                <td id="nlWestSecondWs">&nbsp;</td>
                                <td id="nlWestSecondLs">&nbsp;</td>
                                <td id="nlWestSecondPer">&nbsp;</td>
                                <td id="nlWestSecondGB">&nbsp;</td>
                                <td id="nlWestSecondDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="nlWestThirdName" class="teamName">&nbsp;</td>
                                <td id="nlWestThirdWs">&nbsp;</td>
                                <td id="nlWestThirdLs">&nbsp;</td>
                                <td id="nlWestThirdPer">&nbsp;</td>
                                <td id="nlWestThirdGB">&nbsp;</td>
                                <td id="nlWestThirdDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="nlWestFourthName" class="teamName">&nbsp;</td>
                                <td id="nlWestFourthWs">&nbsp;</td>
                                <td id="nlWestFourthLs">&nbsp;</td>
                                <td id="nlWestFourthPer">&nbsp;</td>
                                <td id="nlWestFourthGB">&nbsp;</td>
                                <td id="nlWestFourthDiff">&nbsp;</td>
                            </tr>
                            <tr>
                                <td id="nlWestFifthName" class="teamName">&nbsp;</td>
                                <td id="nlWestFifthWs">&nbsp;</td>
                                <td id="nlWestFifthLs">&nbsp;</td>
                                <td id="nlWestFifthPer">&nbsp;</td>
                                <td id="nlWestFifthGB">&nbsp;</td>
                                <td id="nlWestFifthDiff">&nbsp;</td>
                            </tr>                               
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <h6>Data courtesy MLB. Copyright © <?php echo date("Y");?> Kyle McMahon.</h6>
    </div>

    <script src="https://code.jquery.com/jquery-2.2.3.min.js" integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</body>
</html>