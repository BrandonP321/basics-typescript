class Vehicle {
    // color: string; // creates a color field for the class
    // constructor(color: string) { // does same as contructore below
    //     this.color = color;
    // }

    constructor(public color: string) {} // short hand for also making color a field for class Vehicle

    public honk(): void { // public is default modifier
        console.log('beep');
    } // setting it to protected modifier would allow child classes to call honk() but could not be called outside of the classes
}

class Van extends Vehicle {
    constructor(public wheels: number, color: string) { // we don't need to add color as a field since the color is inherited from Vehicle
        super(color);
    }

    private drive(): void { // could not change drive() if it existed in super class
        console.log('vroom vroom')
    } // can not call drive() if it was defined in the parent class, must be in the exact same class as it is being called

    startDriving(): void {
        this.drive(); // can access drive method since they are in the same class
    }
}

const van = new Van(4, 'red');
// van.drive();
van.honk();