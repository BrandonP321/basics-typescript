const add = (a: number, b: number): number => {
    return a + b;
}
// TS can infere return values, but is always good to annotate return value


function divide(a: number, b:number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

const logger = (msg: string): void => { // void type returns no value, null, or undefined;
    console.log(msg)
}

const throwErr = (msg: string): never => { // throwing error never returns any value
    throw new Error(msg);
}

const today = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
    console.log(date);
    console.log(weather)
}

logWeather(today)