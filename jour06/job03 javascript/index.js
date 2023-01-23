window.addEventListener('resize', ()=>{

    let query1 = window.matchMedia("(max-width: 1599px) and (min-width: 768px)");
    let query2 = window.matchMedia("(max-width: 767px)");
    let query3 = window.matchMedia("(min-width: 1600px)");

    let body = document.querySelector('body');
    
    let section = document.querySelectorAll('.section');

    section.forEach(section => {
        
        if( query1.matches){

            document.body.style.flexWrap = 'wrap';
            section.style.width = '45vw';
    
        }else if (query2.matches){
    
            document.body.style.flexDirection = 'column';
            section.style.width = '80vw';
            document.body.gap = '5vh'

        }else if (query3.matches) {
            document.body.style.flexDirection = 'row';
            document.body.style.alignItems = 'center';
            section.style.width = '20vw';

        }

    });

});

