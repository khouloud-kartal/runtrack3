


function getType(){

    const body = document.querySelector('body');

    const button = document.getElementById('button');

    fetch('pokemon.json')

        .then(function (response){

            return response.json();

        })

        .then(function (data){

            let usedTypes = [];

            select = document.querySelector('select');
            
                data.forEach(element => {

                    pok_type = element.type;
                    
                    // console.log(pok_type);
                    
                    for (let index = 0; index < pok_type.length; index++) {

                        const types = pok_type[index];
                        
                        let typesUsed = (usedTypes.includes(types)) ? true : false;
                        
                        if (!typesUsed) {

                            usedTypes.push(types);

                        } else {

                            continue;
                        }
                        
                        console.log(types);
                        
                        
                        option = document.createElement('option');

                        option.textContent = types;

                        select.appendChild(option);
                        
                        
                    }
                    

                });
        })
}

button.addEventListener("click", getType());