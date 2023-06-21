
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


