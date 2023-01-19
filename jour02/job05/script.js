document.querySelector("footer").style.width = '0px';

//Execute a JavaScript immediately after a page has been loaded
window.onload, () => {

window.addEventListener("scroll",() =>{

    //calculate the height of the page
    //the scrollHeight property: returns the height of an element in pixels, including padding
    //innerHeight: returns the height of a window's content area
    //documentElement: get the name of the document element
    //the scrolable height = the entire document height - the window height
    let hauteur = document.documentElement.scrollHeight - window.innerHeight;
    
    //clientWidth: afficher la largeur de l'élément 
    let largeur = document.documentElement.clientWidth;

    // the amount that the user scoll down
    let position = window.scrollY;

    // On calcul la largeur de la barre
    let barre = position / hauteur * largeur;
    

    // On modifie la largeur du footer
    document.querySelector("footer").style.width = barre+"px";

})  

}


