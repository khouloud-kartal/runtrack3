window.addEventListener('resize', ()=>{

    let query1 = window.matchMedia("(max-width: 1920px) and (min-width: 1680px)");
    let query2 = window.matchMedia("(max-width: 1680px) and (min-width: 1280px)");
    let query3 = window.matchMedia("(max-width: 1280px)");

    body = document.querySelector('body');
    link = document.getElementById('link');

    if( query1.matches){

        body.style.backgroundColor = '#ffca4b';

    }else if (query2.matches){

        body.style.backgroundColor = '#275fa0';
    }else if (query3.matches){

        body.style.backgroundColor = '#ffffff';
    }else{
        body.style.backgroundColor = '#88c1d0';
    }

});