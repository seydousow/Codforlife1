// Example one
const tast 

//example 2
class Jason{
    constructor(name,homeTown,power,weakness,health,powerlevel,specialAttack){

 
        this . name = name;
        this . homeTown = homeTown;
        this . power = power;
        this . weakness = weakness;
        this . health = health;
        this . powerlevel = powerlevel;
        this . specialAttack = specialAttack
        }
        dobge(){
        }
        block(){
        }
        powerUp(){
            if(this.powerlevel >= 96)
            this.powerlevel = 100
            console.log('${this.name} power level is full special Availadle');
        }else{
            this.powerLevel += 4;
            console.log('${this.name} power level is now at ${this.powerlevel}%');
        }
        
        }
        specialAttack(opponent){
            if (this.powerLevel == 100){
                console.log("swindler unleashes her special attack!!! Being smart!!!");
                this.powerLevel -= 40;
                opponent.health -= this.speciaDamage;
                console.log 
            }
        }
        //create two attacks each one being its on function 
        // 1. 20% damage 
        //2. 10% damage
        TimeSkip(opponent){
            opponent.health -= 20;
            console.log(`${opponent.name}:skip time when opponent is going to attack ${opponent.name}s HEALTH: ${opponent.health}% ****`);
        }
        Areaoftime(opponent){
            opponent.health -=10;
            console.log(`makes a ball of time that ages you 60 yaers in to the future${opponent.name}s HEALTH: ${opponent.health}% ****`);
        }
        SeeAll(opponent){
            opponent.health -=0;
            console.log(`see 6 second in to the future ${opponent.name}s HEALTH: ${opponent.health}% ****`);
        } 