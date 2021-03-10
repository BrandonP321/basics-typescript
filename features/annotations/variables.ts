let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;


// built in objects
let now: Date = new Date();


// array
let colors: string[] = ['red', 'green', 'blue']; // array of strings
let nums: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, false, true];


// classes
class Car {
}
let car: Car = new Car();


// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}


// function
// takes in number parameter i and returns type void
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}


// when to use annotations

// 1.) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coords: { x: number; y: number } = JSON.parse(json);
// coords.a will now throw an error

// 2.) When we declare a variable on one line and initalize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let word of words) {
    if (word === 'green') {
        foundWord = true;
        break;
    }
}


// 3.) Variable whose type can't be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let j of numbers) {
    if (j > 0) {
        numberAboveZero = j;
    }
}