// JS Objects (aka Dictionaries in Python)

// Key - Value

// quotes around the keys in JS are JSON
var myDoggo = {
    name: "Spark",
    age: 6,
    isAGoodBoi: true,
    hobbies: ['chewing', 'barking', 'play fetch']
}

myDoggo.name // "Spark"
myDoggo['name'] // "Spark"

myDoggo.owner = "Bob"

console.log(myDoggo);

// looping over an object in JS
for (var dogKey in myDoggo) {
    console.log("key:", dogKey);
    console.log("value:", myDoggo[dogKey]);
}

console.log("----------------");

var myNumbers = [11,22,33,44]
// ! for arrays in JS we use the FOR OF
for (var num of myNumbers){
    console.log(num);
}
