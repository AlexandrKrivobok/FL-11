function Pokemon() {
    this.evolve = () => {
        if (this.prototype.constructor === Pokemon) {
            return this;
        }

        const ParentConstructor = this.prototype.constructor;
        
        return new ParentConstructor();
    }
}

function Charizard() {
    Pokemon.call(this);

    this.type = 'Fire';
    this.spiece = 'Flame Pokémon';
    this.isFlying = true;

    this.getType = () => this.type;
    this.getSpecie = () => this.spiece;
    this.canFly = () => this.isFlying;
    this.getPokemonType = () => this.constructor.name;

}

Charizard.prototype = Object.create(Pokemon);
Charizard.prototype.constructor = Charizard;

function Charmeleon() {
    Charizard.call(this);

    this.isFlying = false;
}

Charmeleon.prototype = Object.create(Charizard);
Charmeleon.prototype.constructor = Charmeleon;

function Charmander() {
    Charmeleon.call(this);

    this.spiece = 'Lizard Pokémon';
}

Charmander.prototype = Object.create(Charmeleon);
Charmander.prototype.constructor = Charmander;


function Raichu() {
    Pokemon.call(this);

    this.type = 'Electric';
    this.spiece = 'Mouse Pokémon';
    this.isFlying = false;

    this.getType = () => this.type;
    this.getSpecie = () => this.spiece;
    this.canFly = () => this.isFlying;
    this.getPokemonType = () => this.constructor.name;

}

Raichu.prototype = Object.create(Pokemon);
Raichu.prototype.constructor = Raichu;

function Pikachu() {
    Raichu.call(this);
}

Pikachu.prototype = Object.create(Raichu);
Pikachu.prototype.constructor = Pikachu;

function Pichu() {
    Pikachu.call(this);
}

Pichu.prototype = Object.create(Pikachu);
Pichu.prototype.constructor = Pichu;

//----------------------------- tests -------------------------//

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

console.log(charmander.getType()); // -> “Fire”
console.log(charmander.getType() === charmeleon.getType()); // -> true
console.log(charmeleon.getType() === charizard.getType()); // -> true

console.log(charmander.evolve().constructor === Charmeleon); // -> true
console.log(charmeleon.evolve().constructor === Charizard); // -> true

console.log(charmander.getSpecie()); // -> “Lizard Pokémon”
console.log(charmeleon.getSpecie()); // -> “Flame Pokémon”
console.log(charizard.getSpecie() === charmeleon.getSpecie()); // -> true

console.log(charmander.canFly()); // -> false
console.log(charmander.canFly() === charmeleon.canFly()); // -> true
console.log(charizard.canFly()); // -> true

const pichu = new Pichu();
console.log(pichu.getPokemonType()); // => Pichu

const pikachu = pichu.evolve();
console.log(pikachu.getPokemonType()); // Pikachu
console.log(pikachu.constructor === Pikachu); // true

const raichu = pikachu.evolve();
console.log(raichu.getPokemonType()); // Raichu
console.log(raichu.constructor === Raichu); // true

const raichu2 = raichu.evolve(); // return raichu back as it's maximum level
console.log(raichu2 === raichu); // true