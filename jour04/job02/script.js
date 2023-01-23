
function jasonValueKey(file,key){

const body = document.querySelector('body');
    
    fetch(file)
        .then(function (response) {
            
            return response.json();
        })
        .then (function (data) {
            result = data[key];

            // console.log(data);
            // console.log(result);
            
            return body.innerHTML = result;
        })
    
}

jasonValueKey('ville.json' , 'city');



// async function jasonValueKey(json, key){

//     const json1 = json;
//     const response = await fetch(json1);
//     const data = await response.json();

//     const key1 = data.key;
//     return document.querySelector('body').textContent = key1;
// }

// jasonValueKey('ville.json', 'city');


