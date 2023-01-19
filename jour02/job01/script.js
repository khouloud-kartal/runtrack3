document.addEventListener("DOMContentLoaded", function(){

    //cibler un élément
    //syntaxe: const var = document.querySelector("l'id de l'élément");
    // const citation = document.querySelector("#citation");
    const button = document.querySelector("#button");

    //la cration d'un élément
    const article = document.createElement("article");
    const cit = document.createElement("p");

    //la création de texte dans l'élément paragraphe
    cit.textContent = "La vie a beaucoup plus d'imagination que nous";

    //ajouter l'élément paragraphe à l'élément article;
    article.appendChild(cit);

    //écouter l'événement sur l'élément
    function citation(cit){
        button.addEventListener("click",() =>{

            console.log(cit.textContent);
            // document.write (citation.textContent);

        })
    }

citation(cit);


})