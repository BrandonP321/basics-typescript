const carMakers = ['ford', 'toyota', 'chevy']; // ts will infere that this is an array of strings
const carMakrers2: string[] = ['ford', 'toyota', 'chevy'];

const cars: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake : string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

const myCars: { make: string; model: string }[] = [
    {
        make: 'ford',
        model: 'taurus'
    },
    {
        make: 'toyota',
        model: 'corolla'
    }
]


// help inference when extracting values
const myCar = carMakers[0] // infers that myCar's value is of type string
const myCar2 = carMakers.pop();


// prevent incompatible values
carMakers.push(100) // carMakers is an array of strings; can't push a number


// help with map
carMakers.map((car: string): string => {
    return car;
})


// flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'] // array of more than one type