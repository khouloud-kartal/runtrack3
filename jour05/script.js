let inscriptionButton = document.getElementById('inscription');
// console.log(inscriptionButton);

//Si on click sur le boutton inscription sur la home page
inscriptionButton.addEventListener('click', ()=>{

    //call the php inscription file
    fetch('inscription.php')
    .then((response)=>{
        return response.text();
    })
    .then((data)=>{
        // console.log(data);
        form = document.getElementById('form');
        form.innerHTML = data;

        //si on click sur le boutton inscription du formulaire
        register = document.getElementById('register');

        register.addEventListener('submit',()=>{

            

        })

    })

})