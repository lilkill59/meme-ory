<?php
// Récupérer les données JSON envoyées
$data = json_decode(file_get_contents('php://input'), true);

// Vérifier que toutes les données nécessaires sont présentes
if (isset($data['pseudo'], $data['temps'], $data['coups'], $data['niveau'], $data['score'])) {
    // Extraire les informations envoyées
    $pseudo = $data['pseudo'];
    $temps = $data['temps'];
    $coups = $data['coups'];
    $niveau = $data['niveau'];
    $score = $data['score'];

    // Connexion à la base de données (exemple avec PDO)
    try {
        $pdo = new PDO('mysql:host=127.0.0.1;port=3307;dbname=memory', 'root', 'root1234');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Récupérer l'ID de l'utilisateur à partir du pseudo
        $queryUtilisateur = "SELECT id FROM utilisateurs WHERE pseudo = ?";  // Modifié pour utiliser la table 'utilisateurs'
        $stmtUtilisateur = $pdo->prepare($queryUtilisateur);
        $stmtUtilisateur->execute([$pseudo]);
        $utilisateur = $stmtUtilisateur->fetch(PDO::FETCH_ASSOC);

        if ($utilisateur) {
            // Si l'utilisateur existe, insérer les données dans la table 'scores'
            $utilisateurId = $utilisateur['id'];
            $queryScore = "INSERT INTO scores (utilisateur_id, niveau, temps, coups, date_partie, score) 
                           VALUES (?, ?, ?, ?, NOW(), ?)";
            $stmtScore = $pdo->prepare($queryScore);
            $stmtScore->execute([$utilisateurId, $niveau, $temps, $coups, $score]);

        } else {
            // Si l'utilisateur n'existe pas, renvoyer une erreur
            echo json_encode(['message' => 'Utilisateur non trouvé']);
        }

    } catch (PDOException $e) {
        // Gérer les erreurs de connexion à la base de données
        echo json_encode(['message' => 'Erreur lors de la connexion à la base de données', 'error' => $e->getMessage()]);
    }
} else {
    // Répondre avec une erreur si les données sont manquantes
    echo json_encode(['message' => 'Données manquantes']);
}
?>


