<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src ="./script.js" defer></script>
    <title>Job 03</title>
</head>
<body>
    <form action="POST">
        <input type="text" name="id" id="id">
        <label for="id" placeholder="id">Id</label>
        <input type="text" name="nom" id="nom">
        <label for="nom" placeholder="nom">Nom</label>
        <select name="type" id="type">
            <option value="type">Type</option>
        </select>
        <input type="button" value="filtrer" id="button">
    </form>

    <div id="results"></div>
</body>
</html>