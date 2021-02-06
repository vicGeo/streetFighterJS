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