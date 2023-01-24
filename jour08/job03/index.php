<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Job 03</title>
</head>
<body class="w-screen">
    <header class="w-screen bg-red-200 py-8">

    <nav class="flex justify-around ">
        <a href="" class="">Acceuil</a>
        <a href="">inscription</a>
        <a href="">Connexion</a>
        <a href="">Recherche</a>
    </nav>

    </header>

    <main>

    <h2>Formulaire</h2>

    <form action="">

        <div class="civility">

            <p>Select Your Civility</p>
        
            <input type="radio" name="civility" id="male">
            <label for="male">Male</label><br>

            <input type="radio" name="civility" id="female">
            <label for="female">Female</label><br>

            <input type="radio" name="civility" id="other">
            <label for="other">Other</label><br>

        </div>

        <div class="formulaire">

            <p>Fill All Your Information</p>

            <input type="text" name="prenom" id="prenom">
            <label for="prenom">First Name</label><br>

            <input type="text" name="nom" id="nom">
            <label for="nom">Last Name</label><br>

            <input type="text" name="adresse" id="adress">
            <label for="adresse">Adress</label><br>

            <input type="email" name="email" id="email">
            <label for="email">Adress Email</label><br>

            <input type="password" name="password" id="password">
            <label for="password">Password</label><br>

            <input type="password" name="confirm_password" id="confirm_password">
            <label for="confirm_password">Confirm Password</label><br>

            <p>Choose your passions</p>
            
            <input type="checkbox" name="informatique" id="informatique">
            <label for="informatique">Computer Science</label><br>

            <input type="checkbox" name="voyage" id="voyage">
            <label for="voyage">Traveling</label><br>

            <input type="checkbox" name="sport" id="sport">
            <label for="sport">Sport</label><br>

            <input type="checkbox" name="lecture" id="lecture">
            <label for="lecture">Reading</label><br>

            <input type="button" value="valider">

        </div>
    </form>

    </main>

    <footer class="w-screen bg-neutral-400 py-8 ">

    <ul class="flex justify-around">
        <li><a href="">Acceuil</a></li>
        <li><a href="">inscription</a></li>
        <li><a href="">Connexion</a></li>
        <li><a href="">Recherche</a></li>
    </ul>

    </footer>
</body>
</html>