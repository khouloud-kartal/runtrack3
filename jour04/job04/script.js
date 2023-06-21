const button = document.getElementById('button');

button.addEventListener('click', function(){
    const tbody = document.querySelector('tbody');
    tbody.textContent = '';

    fetch('users.php')
    .then(function (response){
        return response.json();
    }).then(function(data){
        // console.log(data)
        data.forEach(user => {
            let row = "<tr><td>" + user.id + "</td><td>" + user.nom + "</td><td>" + user.prenom + "</td><td>" + user.email +"</td></tr>";
            tbody.innerHTML += row;
        });
    })
})