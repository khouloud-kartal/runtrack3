window.addEventListener('resize', ()=>{

    let query1 = window.matchMedia("(max-width: 1920px) and (min-width: 1680px)");
    let query2 = window.matchMedia("(max-width: 1680px) and (min-width: 1280px)");
    let query3 = window.matchMedia("(max-width: 1280px)");

    link = document.querySelector('#link');

    if( query1.matches){

        link.href = 'style2.css';

    }else if (query2.matches){

        link.href = 'style3.css'; 
    }else if (query3.matches){

        link.href = 'style4.css'; 
    }else{
        link.href = 'style1.css';
    }

});