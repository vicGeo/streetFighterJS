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
        enemy.life -= (this.strength * 0.5) - enemy.defense;
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

//Función selección de jugador

let selectCharacter = (character) => {

    if (player1 =="") {
        player1 = allplayers[character];

        document.getElementById(character).className = "avatar2";
        document.getElementById(character).onclick = "";

        imagePlayer1 = document.getElementById("fighter1");
        namePlayer1 = document.getElementById("namePlayer1")


        imagePlayer1.innerHTML = `<img class="fighter1" src="img/characters/player1/${player1.name}-stay-p1.gif">`
        namePlayer1.innerHTML = `<img class="namePlayer1" src="img/${player1.name}_name.png">`

    } else {
        player2 = allplayers[character];

        document.getElementById(character).className = "avatar2";
        document.getElementById(character).onclick = "";

        imagePlayer2 = document.getElementById("fighter2");
        namePlayer2 = document.getElementById("namePlayer2")
        fightImage = document.getElementById("stats");

        imagePlayer2.innerHTML = `<img class="fighter2" src="img/characters/player2/${player2.name}-stay-p2.gif">`
        namePlayer2.innerHTML = `<img class="namePlayer1" src="img/${player2.name}_name.png">`
        fightImage.innerHTML = `<img class="stats" src="img/fightScreen02.png">`

        //Cargar player1 y player2 en la pantalla3

        showPlayer1 = document.getElementById("battle1");
        showPlayer2 = document.getElementById("battle2");

        showPlayer1.innerHTML = `<img class="fighter1" src="img/characters/player1/${player1.name}-stay-p1.gif">`
        showPlayer2.innerHTML = `<img class="fighter1" src="img/characters/player2/${player2.name}-stay-p2.gif">`

        //LLamamos a la funcion delay para cambiar de pantalla con 1s de retraso

        resolveIn(1300).then(delay => {
            changeScreen("fase2", "fase3");
        })

    }
};

//Función atacar en la pantalla3

const damage = () => {

    turn = Math.floor(Math.random() * 2);
    superAttack = Math.floor(Math.random() * 5)
    infoAttack = document.getElementById("infoPlayer");
    healthPlayer1 = document.getElementById("healthPlayer1");
    healthPlayer2 = document.getElementById("healthPlayer2");

    if (turn == 0) {
        if (superAttack >= 3) {
            player1.specialAttack(player2);
            infoAttack.innerHTML = `${player1.name} hits with special attack ${player2.name}`;
        } else {
            player2.attack(player1);
            infoAttack.innerHTML = `${player2.name} hits ${player1.name}`;

        }
    } else {
        if(superAttack >= 4) {
            player2.specialAttack(player1);
            infoAttack.innerHTML = `${player2.name} hits with special attack ${player1.name}`;

        } else {
            player1.attack(player2);
            infoAttack.innerHTML = `${player1.name} hits ${player2.name}`;
        }
    };
    // console.log(player1.life);
    // console.log(player2.life);
//Barra de vida del jugador

winner = document.getElementById("playerWin");
winnerName = document.getElementById("nameWinner");
winnerGif = document.getElementById("gifWinner");

if (player2.life < 1) {
    winner.innerHTML = `<img id="winnerImage" src=img/characters/winner/${player1.name}-win2.png>`;
    winnerGif.innerHTML = `<img id="winnerGif" src=img/characters/winner/${player1.name}-win.gif>`;
    winnerName.innerHTML = `${player1.name} wins`;

    resolveIn(1200).then(delay => {

        changeScreen("fase3","fase4");

    })

    } else if (player1.life < 1) {
        winner.innerHTML = `<img id="winnerImage" src=img/characters/winner/${player2.name}-win2.png>`;
        winnerGif.innerHTML = `<img id="winnerGif" src=img/characters/winner/${player2.name}-win.gif>`;
        winnerName.innerHTML = `${player2.name} wins`;

        resolveIn(1200).then(delay => {

            changeScreen("fase3","fase4");

        })

    } else {

        healthPlayer1.e = `${player1.life}`;
        healthPlayer2.e = `${player2.life}`;

    };

};


//Funcion RESET

const reset = document.getElementById('playAgain');

reset.addEventListener('click', () => {
    window.location.reload();
})






//Funcion delay

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));

