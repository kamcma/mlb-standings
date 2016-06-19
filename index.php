<?php
// initialize array of win/loss/run data
// team arrays are 0: name, 1: MLB id, 2: wins, 3: losses, 4: runs scored, 5: runs allowed
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
// loop over each team array and assign values from respective xml document
foreach ($baseball as &$league) {
	foreach($league as &$division) {
		foreach($division as &$team) {
			try {
				$xml = simplexml_load_file("http://gd2.mlb.com/components/team/stats/" . $team[1] . "-stats.xml");
				$team[2] = intval($xml->children()[1]['W']);
				$team[3] = intval($xml->children()[1]['L']);
				$team[4] = intval($xml->children()[0]['R']);
				$team[5] = intval($xml->children()[1]['R']);
			} catch (Exception $e) {
				// failed to retrieve xml page
			}
		}
		
		// division data loaded, perform sort
		usort($division, function($a, $b) {
			//sorting alphabetically
			return $a[0] < $b[0] ? -1 : 1;
		});
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
        <?php
        // loop over each league
        for ($i = 0; $i < count($baseball); $i++) {
        	echo '<div class="col-xs-12 col-sm-6">';
				echo '<h2>';
				switch ($i) {
					case 0:
						echo 'American';
						break;
					case 1:
						echo 'National';
						break;
					default:
						//error
				}
				echo ' League</h2>';
				echo '<div class="row">';
				// loop over each division
				for ($j = 0; $j < count($baseball[$i]); $j++) {
					echo '<div class="col-xs-12">';
						echo '<h3>';
						switch ($j) {
							case 0:
								echo 'East';
								break;
							case 1:
								echo 'Central';
								break;
							case 2:
								echo 'West';
								break;
							default:
								//error
						}
						echo '</h3>';
						echo '<table class="table table-bordered table-condensed">';
							echo '<tr class ="hidden-md hidden-lg">';
								echo '<th></th><th>W</th><th>L</th><th>%</th><th>GB</th><th>RΔ</th>';
							echo '</tr>';
							echo '<tr class ="hidden-xs hidden-sm">';
								echo '<th></th><th>Wins</th><th>Losses</th><th>Percentage</th><th>Games Back</th><th>Run Diff</th>';
							echo '</tr>';
							// loop over each team
						for ($k = 0; $k < count($baseball[$i][$j]); $k++) {
							$team = $baseball[$i][$j][$k][0];
							$wins = $baseball[$i][$j][$k][2];
							$losses = $baseball[$i][$j][$k][3];
							$runsScored = $baseball[$i][$j][$k][4];
							$runsAllowed = $baseball[$i][$j][$k][5];
							$winPercentage = $wins / ($wins + $losses);
							echo '<tr>';
								echo '<td class="teamName">';
									echo $team;
								echo '</td>';
								echo '<td>';
									echo $wins;
								echo '</td>';
								echo '<td>';
									echo $losses;
								echo '</td>';
								echo '<td>';
									echo number_format($winPercentage, 3);
								echo '</td>';
								echo '<td>';
									//echo $baseball[$i][$j][$k][2];
								echo '</td>';
								echo '<td>';
									echo $runsScored - $runsAllowed;
								echo '</td>';
							echo '</tr>';
						}
						echo '</table>';
					echo '</div>';
				}
				echo '</div>';
        	echo '</div>';
        }
        ?>
        </div>
        <h6>Data courtesy MLB. Copyright © <?php echo date("Y");?> Kyle McMahon.</h6>
    </div>
</body>
</html>