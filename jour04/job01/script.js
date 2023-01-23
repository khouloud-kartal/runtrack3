const expression = document.getElementById('button');


//créer une fonction pour récupérer et afficher le contenu du ficher texte
function loadTxt(){

    const data = document.getElementById('para');

    const p = document.createElement("p");

    data.appendChild(p);



    fetch('expression.txt')
    .then(function(response){

        return response.text();
    })
    .then(function(expression){
        // console.log(expression);
        p.innerHTML = expression;
        
    })
}


expression.addEventListener("click",loadTxt);