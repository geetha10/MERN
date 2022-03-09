class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power, res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }

    attack(target){
        target.res -=this.power;
    }
}

class Effect extends Card{
    constructor(name,cost,message,stat,magnitude){
        super(name,cost);
        this.magnitude=magnitude;
        this.stat=stat;
        this.message=message;
    }

    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat === "power"){
                target.power += this.magnitude;
            }
            if(this.stat === "resilience"){
                target.res += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

var redBeltNinja= new Unit("Red Belt Ninja", 3,3,4);
console.log("Inital Power" ,redBeltNinja.power);
console.log("Inital Res:", redBeltNinja.res);
var blackBeltNinja= new Unit("Black Belt Ninja", 4,5,4);

var hardAlgorithm=new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",+3) 
hardAlgorithm.play(redBeltNinja);
console.log("After hardAlgorithm Power" ,redBeltNinja.power);
console.log("After hardAlgorithm Res:", redBeltNinja.res);

var unhandledPromiseRejection=new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2) 
unhandledPromiseRejection.play(redBeltNinja);
console.log("After Unahandled Power: ",redBeltNinja.power);
console.log("After Unahandled Res: ",redBeltNinja.res);

var pairProgramming=new Effect("Pair Programming",3,"increase target's power by 2","power",+2) 
pairProgramming.play(redBeltNinja)
console.log("After pairProgramming Power: ",redBeltNinja.power);
console.log("After pairProgramming Res: ",redBeltNinja.res);

console.log("Res before attack: ", blackBeltNinja.res);
redBeltNinja.attack(blackBeltNinja);
console.log("Res after attack: ", blackBeltNinja.res);