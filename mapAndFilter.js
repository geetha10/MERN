const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log(cubes);

const values1 = [1, 2, 3, 4, 5];
const evens = values1.filter( val => val % 2 === 0 );
console.log(evens);

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );
console.log(oFoods);

const values3 = [1, 2, 3, 4, 5];
const oddCubes = values3.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(oddCubes);