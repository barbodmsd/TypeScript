// sometimes you want in a function what type you passed in, you return exactly that type 
//  for example you pass to function string should the function return string  
// so how it's possible? if you write type (any) maybe you pass string and function return number or any thing like that 

const passed = (value: any): any => {
    return value
}
passed('string')//maybe the function return number to me and it's ok i didn't have error but it's not i want

// for fix that we use generic



function identity<Type>(value: Type): Type {
    return value
}
// with arrow function

const identityTwo = <Type>(value: Type): Type => value
identity(3)

// shortcut
const identityThree = <T>(value: T): T => value

identityTwo(true)

// you can pass your own type generic 

interface Bottle {
    brand: string
    type: number
}
identityTwo<Bottle>({ brand: 'brand', type: 5 })

// generics in array  
const getSearch = <T,>(products: Array<T>): T => products[2]

// the (,) mean this not a tag or component this generic type

////////////////////////generics class

const anotherFunction = <T, N extends number>(valueOne: T, valueTwo: N): object => {
    return { valueOne, valueTwo }
}

// anotherFunction(5,'5') wrong x
anotherFunction(20, 21)

interface DataBase {
    username: string
    password: number
}
// you can write any word you like D,O,N anything 
const dbFunction = <T, D extends DataBase>(valueOne: T, valueTwo: D): object => {
    return { valueOne, valueTwo }
}

dbFunction(20, { username: 'barbodmsd', password: 2021545121 })

////////////////////////generic with class

class Sell<T> {
    cart: T[] = []
    addProduct(product: T) {
        this.cart.push(product)
    }
}