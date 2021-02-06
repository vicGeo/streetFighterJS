//Clases

class Fighter {

    constructor(name, life, strength, defense, luck) {
        this.name = name;
        this.life = life;
        this.strength = strength;
        this.defense = defense;
        this.luck = luck;
        this.handicap = luck - Math.floor(Math.random() * 5);
    }

    attack(enemy) {
        enemy.life -= (this.strength - enemy.defense) * (this.luck - this.handicap);
    }

    specialAttack(enemy) {
        enemy.life -= (this.strength * 0.5 + this.strength) - enemy.defense;
    }

};

//Instancias y variables globales
// name, life, strength, defense, luck

let fighter1 = new Fighter("Ryu",250,60,35,7);
let fighter2 = new Fighter("Ken",250,60,30,6);
let fighter3 = new Fighter("Chunli",250,40,25,6);
let fighter4 = new Fighter("Blanka",250,60,20,4);
let fighter5 = new Fighter("Zangief",250,60,10,4);
let fighter6 = new Fighter("Guile",250,50,35,6);
let fighter7 = new Fighter("Honda",250,60,20,3);
let fighter8 = new Fighter("Dhalsim",250,40,50,5);
let fighter9 = new Fighter("Balrog",250,60,40,8);
let fighter10 = new Fighter("Vega",250,55,50,5);
let fighter11 = new Fighter("Sagat",250,60,50,7);
let fighter12 = new Fighter("Bison",250,70,70,5);

let player1 = "";

let player2 = "";

//Traductor

let allplayers = {
    "Ryu": fighter1,
    "Ken": fighter2,
    "Chunli": fighter3,
    "Blanka": fighter4,
    "Zangief": fighter5,
    "Guile": fighter6,
    "Honda": fighter7,
    "Dhalsim": fighter8,
    "Balrog": fighter9,
    "Vega": fighter10,
    "Sagat": fighter11,
    "Bison": fighter12
};

//Función cambio de pantalla

const changeScreen = (phase, newPhase) => {

    currentScreen = document.getElementById(phase);
    nextScreen = document.getElementById(newPhase);

    currentScreen.style.display = "none";
    nextScreen.style.display = "block";

};
