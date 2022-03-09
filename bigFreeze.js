const arr = Object.freeze([1,2,3,4]);
//arr.push(300);

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

//const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
//console.log(groceryList);


const needThyme = groceryList.concat( [{ "item": "thyme", "haveIngredient": false } ] );
//console.log(needThyme); 

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];
console.log("gotTheThyme : ",gotTheThyme)

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
const sortedItems = [...items].sort();
console.log("sortedItems: ",sortedItems);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("sortedFruitss: ",fruits.sort());
console.log("sorted Reversed Fruitss: ",fruits.reverse());

const numbers = [10, 5, 3, 12, 22, 8];
console.log("sortedNumbers: ",numbers.sort());

const points = [40, 100, 1, 5, 25, 10];
console.log("sortedNumbers: ",points.sort(function(a, b){return a-b}));

const sortedGroceries = [...groceryList].sort( (a, b) => {
    console.log("a: ",a);
    console.log("b: ",b);
    a.item > b.item ? 1 : -1});

console.log("sortedGroceries", sortedGroceries)
