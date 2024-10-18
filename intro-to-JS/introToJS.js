// hoisting


const myArray = [11, 22, 33, 44];
myArray[0] = "bob";

// console.log(myArray);

const person = {
    name: "john",
    favFood: "🍕",
    hobbies: ['ski', 'swim'],
    pet: {
        name: "spot",
        age: 3,
        isAGoodBoi: true
    }
};

person.name = "waldo";
person.age = 33;
// console.log(person);

// console.log(
//     person.pet.name
// );


// scope

const people = ['bob', 'sally', 'alice', 'ben'];


const [, , unicorn] = people;

// const firstPerson = people[0];
// const secondPerson = people[1];

// console.log(unicorn);


const person2 = {
    name: "john",
    favFood: "🍕",
    hobbies: ['ski', 'swim'],
    pet: {
        name: "spot",
        age: 3,
        isAGoodBoi: true
    }
};

// const personName = person2.name;

const { hobbies, name } = person2;

// console.log(name, hobbies);

// ---> arrow functions

const hello = function (someName) {
    return "hello " + someName;
};

const helloArrow = someName => {
    return "hello " + someName;
};

const response = helloArrow("bob");
// console.log('response: ', response);

// ------------------
// function hiThere() {
//     return "hi";
// }
const hiThere = () => {
    return "hi";
};


console.log(
    hiThere()
);