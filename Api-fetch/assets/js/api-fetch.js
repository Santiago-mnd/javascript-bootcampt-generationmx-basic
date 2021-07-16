// Fetch es una API de JavaScript.
// XMLHttpRequest También sirve para hacer peticiones HTTP.
// En el API-fetch se utilizan "promesas" para manejar información asincrona. (Es in información que no tiene en el momento, sino que hay tiempo de espera).
// Info promesas https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises


let button = document.querySelector('button');
button.addEventListener('click', () => {
    let apiFetch = fetch('https://api.thecatapi.com/v1/images/search');
    apiFetch
        .then(resp => resp.json())
        .then(data => {
            let cat = document.querySelector('#cat');
            cat.src = data[0].url;
            console.log(data[0].url);
    
    }).catch(e => console.log(e))
});