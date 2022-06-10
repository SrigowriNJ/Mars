//Introduction --a better example
/*
function Person(name,age){
    this.name=name,
    this.age=age
}

const person1=new Person('John',23);
const person2=new Person('Jane', 22);

console.log(person1);
console.log(person2);
*/
//Object literal vs constructor function--why do we need constructor function?
/*
let person={
    name:'Sam'
}
function Person(){
    this.name='Sam'
}
let person1=new Person();
let person2=new Person();

person1.age=20;
*/
//Each object created from the constructor is unique and has the same properties as the constructor 
//or have new properties added.
/*
let person={
    name:'Sam'
}
console.log(person.name);

let student = person;
student.name='John'
console.log(person.name);
*/
//When an object is created with an object literal, any object variable derived from that object
//will act as a clone.Hence any changes made in one will reflect in the other
//----------------------------------------------------------------------------------------------------
//Adding methods to a constructor with a return statement
/*
function Person(name,age){
    this.name=name,
    this.age=age,
    this.greet=function(){
        return('Hi'+' '+this.name);
    }
}

const person1=new Person('John',23);
const person2=new Person('Jane', 22);

console.log(person1.greet());

//We cannot add any method to a constructor function outside of the constructor

person1.greetOutside=function(){
    console.log('Hello')
}
person1.greetOutside();
*/
//-------------------------------------------------------------------------------------------------------
//Adding a property outside of the constructor function

function Person(){
    this.name='John',
    this.name=23,
    this.eyecolor='Brown'
}
Person.nationality='English';
const person1=new Person();
//console.log(person1.nationality)

//The only way to add a property to a function is by using Prototypes--to be discussed later!
Person.prototype.nationality='American';
console.log(person1.nationality)
