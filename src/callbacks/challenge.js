const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';


/* En lo incios de JS */

function fetchData (urlAPI, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET',urlAPI,true);
    xhttp.onreadystatechange = function(event) {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error' + urlAPI);
                return callback(error,null);
            }
        }        

    }

    xhttp.send();
}

// Get products
    //Get product
        //get product cat


//!CALLBACK HELL
fetchData(`${API}/products`, function(error,data ) {
    if(error) return console.error(error) ;

    fetchData(`${API}/products/${data[0].id}`, function(error2,data2){
        if(error2) return console.error(error2) ;
       
        fetchData(`${API}/categories/${data2?.category?.id}`,function(error3,data3){
            if(error3) return console.error(error3) ;

            console.log(data[0]);
            console.log(data2.title);
            console.log(data3.name);
        })
      
    });
});