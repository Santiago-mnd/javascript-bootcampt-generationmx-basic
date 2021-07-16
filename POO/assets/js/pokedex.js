class Pokedex {
    getinfo(name) {
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            const [DATA = null] = data;
            const MESSAGE = DATA || `El pokemón ${name} no existe`;

            console.log(MESSAGE);
        })
    }
}

// Desestructuración
// const lista = ['Dragon Ball', 'Code Geass', 'Sailor Moon'];
// const [, anime2, anime3] = lista;
// console.log(anime2,anime3);
// console.log(lista[1]);
// console.log(data);

const POKEDEX = new Pokedex();
POKEDEX.getinfo('Bulbasaur');