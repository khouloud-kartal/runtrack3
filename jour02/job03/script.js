document.addEventListener("DOMContentLoaded", function(){

        const button = document.querySelector("#button");
        const compteur = document.querySelector("#compteur");

        
        function addone() {
            button.addEventListener("click",() =>{

                //parseInt: convert a string into number
                compteur.textContent= parseInt(compteur.textContent) + 1 ;
            })
        }

addone();
})