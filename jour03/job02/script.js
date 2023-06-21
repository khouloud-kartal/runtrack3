$(document).ready(function() {
    
    let mixBtn = $('#mixBtn');

    mixBtn.click(function(){
        let results = $('.results')
        results.text('')
        let image = $('.image');
        mixImages(image);
        order = '';
        
        let images = $('#imageContainer', '.image');

        for (const key in images) {
            if (Object.hasOwnProperty.call(images, key)) {
                // console.log(key);
                
                image = $(images[key]);

                image.off('click'); // Unbind previous click event handlers

                image.click(function(){
                    let gameContainer  = $('#gameContainer');
                    gameContainer.append($(this));
                    
                    console.log($(this)[0].id)
                    order += $(this)[0].id;
                    checkOrder(order)

                    console.log(order)

                })
                
            };
    }
    })
    
    function mixImages(images){
        let container = $('#imageContainer');
        container.empty();
        while (images.length){
            let randomIndex = Math.floor(Math.random() * images.length);
            let image = images.splice(randomIndex, 1)[0];
            container.append(image);
        }
    
        return container;
    }

    function checkOrder(order) {
        let results = $('.results')
        if(order.length == 6){
            if(order == '123456'){
                results.text('You won');
                results.removeClass('lost')
                results.addClass('won');

            }else{
                results.text('You lost');
                results.removeClass('won')
                results.addClass('lost')
            }
        }

    }

    
})