class Pokemon{

    name = '';
    type = '';
    evolutions = [];

    constructor(name, type, evolutions) {
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
    }

    attack() {
        return `${this.name}, está atacando.`
    }

    evolve(evolution = 0) {
        const EVOLVE = this.evolutions[evolution] || "";
        let message = 'No puedo evolucionar';

        if(EVOLVE){

            message = `${this.name} está evoluvionando a ${EVOLVE}`;
            this.name = EVOLVE;
        
        }

        return message;
    }

}

const Charmander = new Pokemon('Charmander', 'Fuego', ['Charmaleon', 'Charizard']);
const Squirtle = new Pokemon("Squirtle", "Agua", ["Wartortle", "Blastoise"]);

console.log(Charmander.name);
console.log(Charmander.attack());
console.log(Charmander.evolve());
console.log(Charmander.name);
console.log(Charmander.attack())
console.log(Charmander.evolve(1));
console.log(Charmander.name);
console.log(Charmander.attack());

