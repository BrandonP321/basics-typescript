const drinks = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// type alias for structure of tuple
type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]
const tea: Drink = ['brown', false, 0]