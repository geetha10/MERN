const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//Tesla, Mercedes

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name);
console.log(otherName);

//Undefined  Error, Elon

const person1 = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person1;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//12345,undefined


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//2,5,2
//flase true

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// [1,5,1,8,3,3]
//Output: value, [1,5,1,8,3,3], 1 , 5

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };

  const { firstName, lastName, ...attributes } = person;

  console.log("... :", attributes)

const personCopy = { ...person };
console.log(personCopy === person)
// => false
console.log(personCopy.addresses === person.addresses)
// => true
