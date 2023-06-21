
const button = document.getElementById('button');

button.addEventListener('click', ()=>{
    const id = document.getElementById('id').value;
    const nom = document.getElementById('nom').value;
    const type = document.getElementById('type').value;

    fetch("pokemon.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // console.log(data);
        let filteredData = data.filter(function(pokemon) {
            return (id === "" || pokemon.id.toString() === id) &&
                   (nom === "" || pokemon.name.toLowerCase().includes(name.toLowerCase())) &&
                   (type === "type" || pokemon.type.includes(type));
        });
        console.log(filteredData)
        displayResults(filteredData);
    })
})




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
                        
                        // console.log(types);
                        
                        
                        option = document.createElement('option');

                        option.textContent = types;

                        select.appendChild(option);   
                    }
                    

                });
        })
}

function displayResults(filteredData){
    const results = document.getElementById('results');
    results.innerHTML = '';

    if(filteredData.length === 0){
        results.innerHTML = "We did not found a pokemon that match with your filters."
        return results;
    }

    for (let i = 0; i < filteredData.length; i++) {
    
        const pokemon = filteredData[i];
        let pokemonDiv = document.createElement("div");
        console.log(pokemon.name.english)
        pokemonDiv.innerHTML = "ID: " + pokemon.id + "<br>" +
                                "Nom: " + pokemon.name.english + "<br>" +
                                "Type: " + pokemon.type + "<br><br>";
        results.appendChild(pokemonDiv);
        
    }

}

button.addEventListener("click", getType());