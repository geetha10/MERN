const sayHello = (name) => {
    console.log(`Hello ${name}`);
};

const square = n => n * n;

sayHello('Geetha')
console.log(square(4));

// const returnObjLonghand = () => {
//     return { 
//         firstName: 'John',
//         lastName: 'Wick'
//     }
// };

// console.log(returnObjLonghand());

const returnObj = () => ({firstName: 'John', lastName: 'Wick' });
console.log(returnObj())
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = []; 
    suits.forEach(suit => {
        faces.forEach(face => {
        deck.push(this.createCard(suit, face));
        });
    });
    }
}

let d= new Deck();


