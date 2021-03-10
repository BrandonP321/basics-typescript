const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true
};

const logCar = (car: { name: string; year: number; broken: boolean }): void => {
    console.log(car.name)
    console.log(car.year)
    console.log(car.broken)
}

logCar(oldCivic)

const taurus = {
    name: "Taurus",
    year: 2007,
    broken: false,
    summary() {
        return `${this.year} ${this.name} ${this.broken ? 'broken': 'not broken'}`
    }
}

interface Vehicle { // capitalize first letter
    name: string;
    year: number;
    broken: boolean;
    summary(): string; // method with a return value type annotation
}

const printCar = (car: Vehicle) => {
    console.log(car.name)
    console.log(car.year)
    console.log(car.broken)
    console.log(car.summary())
}

printCar(taurus)