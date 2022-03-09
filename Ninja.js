class Ninja{
    constructor(name,health=100){
        this.name=name;
        this.health=health; 
        this.speed=3;
        this.strength=3;
    }

    sayName(){
        console.log("Name of Ninja is: ", this.name);
        return this;

    }

    showStats(){
        console.log("Ninja Name: ", this.name)
        console.log("Ninja Health: ", this.health)
        console.log(`Ninja Strength:  ${this.strength}`)
        console.log("Ninja Speed: ", this.speed)
        return this;
    }

    drinkSake(){
        this.health +=10;
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName().showStats().drinkSake().showStats();

class Sensi extends Ninja{
    constructor(wisdom){
        super();
        this.wisdom=wisdom;
    }
    speakWisdom(){
        console.log(this.wisdom);
        return this;
    }
}

superSensi= new Sensi("Great Words by Geetha")
superSensi.name="Geetha";
superSensi.sayName().speakWisdom().showStats();