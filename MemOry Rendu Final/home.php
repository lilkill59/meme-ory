<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv=X-UA-Compatible content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>MEME-ORY</title>
        <link rel="stylesheet" type="text/css" href="Interface.css" />
    </head>
    <body>
        <header>
            <h1><Div Align=center>MEME-Ory</Div></h1>
            <h2><Div Align=center>Bienvenue !</Div></h2>
        </header>
        <div class="menu">
            <div Align=center class ="niveaux_et_stop">
                <form method="POST" align="center">
                    <br>
                    <label for ="Pseudo">Pseudo :</label>
                    <input type="text" name="pseudo" id="Pseudo" placeholder="Entrez votre pseudo" required><br>
                    <br><br>
                    <label for ="Diff">Niveau de difficulté :</label><br><br>
                    <select name="niveau" id="niveau">
                        <option value="lvl1">Niveau 1</option>
                        <option value="lvl2">Niveau 2</option>
                        <option value="lvl3">Niveau 3</option>
                    </select><br><br><br><br>
                    <button  id="start" class="start" type="submit">Jouer</button> 
                </form>
            </div>
        </div>
    </body>
    <?php
    try {
        $pdo = new PDO('mysql:host=127.0.0.1;port=3307;dbname=memory', 'root', 'root1234');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  // Pour afficher des erreurs PDO
    } catch (PDOException $e) {
        echo "Erreur de connexion : " . $e->getMessage();
        exit();  // Arrête l'exécution du script si la connexion échoue
    }

    // Gestion du formulaire
    if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['pseudo'], $_POST['niveau'])) {
        $pseudo = htmlspecialchars(trim($_POST['pseudo']));
        $niveau = $_POST['niveau'];

        // Vérifie si l'utilisateur existe
        $stmt = $pdo->prepare("SELECT id FROM utilisateurs WHERE pseudo = ?");
        $stmt->execute([$pseudo]);

        if ($stmt->rowCount() === 0) {
            $insert = $pdo->prepare("INSERT INTO utilisateurs (pseudo) VALUES (?)");
            $insert->execute([$pseudo]);
        }

        // Redirection selon le niveau
        header("Location: page_$niveau.html?pseudo=" . urlencode($pseudo));
        exit();
    }
    ?>
</html>