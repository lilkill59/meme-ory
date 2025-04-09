<?php
// Connexion à la base de données
try {
    $pdo = new PDO('mysql:host=127.0.0.1;port=3307;dbname=memory', 'root', 'root1234');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

// Récupérer les meilleurs scores par niveau
function getTopScores($niveau) {
    global $pdo;
    $query = "SELECT u.pseudo, s.score, s.temps, s.coups 
              FROM scores s
              JOIN utilisateurs u ON s.utilisateur_id = u.id
              WHERE s.niveau = ?
              ORDER BY s.score DESC
              LIMIT 5";  // Limite à 5 meilleurs scores
    $stmt = $pdo->prepare($query);
    $stmt->execute([$niveau]);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Récupérer les meilleurs scores pour chaque niveau
$topScoresNiveau1 = getTopScores(1);
$topScoresNiveau2 = getTopScores(2);
$topScoresNiveau3 = getTopScores(3);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MEME-ORY</title>
    <link rel="stylesheet" type="text/css" href="scores.css" />
</head>
<body>
    <header>
        <h1 Align = center >MEME-Ory</h1>
    </header>
    <div class="affichage">
        <h1 Align="center">Classement :</h1>
    </div>

    <!-- Classement Niveau 1 -->
    <div class="classement">
        <h2>Niveau 1 - Top 5 Scores</h2>
        <table class="tableau">
            <thead>
                <tr>
                    <th>Rang</th>
                    <th>Pseudo</th>
                    <th>Score</th>
                    <th>Temps Restant (sec)</th>
                    <th>Coups</th>
                </tr>
            </thead>
            <tbody>
                <?php if (!empty($topScoresNiveau1)): ?>
                    <?php foreach ($topScoresNiveau1 as $index => $score): ?>
                        <tr>
                            <td><?php echo $index + 1; ?></td>
                            <td><?php echo htmlspecialchars($score['pseudo']); ?></td>
                            <td><?php echo $score['score']; ?></td>
                            <td><?php echo $score['temps']; ?></td>
                            <td><?php echo $score['coups']; ?></td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr><td colspan="5">Aucun score disponible pour ce niveau.</td></tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>

    <!-- Classement Niveau 2 -->
    <div class="classement">
        <h2>Niveau 2 - Top 5 Scores</h2>
        <table class="tableau">
            <thead>
                <tr>
                    <th>Rang</th>
                    <th>Pseudo</th>
                    <th>Score</th>
                    <th>Temps Restant (sec)</th>
                    <th>Coups</th>
                </tr>
            </thead>
            <tbody>
                <?php if (!empty($topScoresNiveau2)): ?>
                    <?php foreach ($topScoresNiveau2 as $index => $score): ?>
                        <tr>
                            <td><?php echo $index + 1; ?></td>
                            <td><?php echo htmlspecialchars($score['pseudo']); ?></td>
                            <td><?php echo $score['score']; ?></td>
                            <td><?php echo $score['temps']; ?></td>
                            <td><?php echo $score['coups']; ?></td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr><td colspan="5">Aucun score disponible pour ce niveau.</td></tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>

    <!-- Classement Niveau 3 -->
    <div class="classement">
        <h2>Niveau 3 - Top 5 Scores</h2>
        <table class="tableau">
            <thead>
                <tr>
                    <th>Rang</th>
                    <th>Pseudo</th>
                    <th>Score</th>
                    <th>Temps Restant (sec)</th>
                    <th>Coups</th>
                </tr>
            </thead>
            <tbody>
                <?php if (!empty($topScoresNiveau3)): ?>
                    <?php foreach ($topScoresNiveau3 as $index => $score): ?>
                        <tr>
                            <td><?php echo $index + 1; ?></td>
                            <td><?php echo htmlspecialchars($score['pseudo']); ?></td>
                            <td><?php echo $score['score']; ?></td>
                            <td><?php echo $score['temps']; ?></td>
                            <td><?php echo $score['coups']; ?></td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr><td colspan="5">Aucun score disponible pour ce niveau.</td></tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</body>
</html>
