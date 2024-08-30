// sometimes you want in a function what type you passed in, you return exactly that type 
//  for example you pass to function string should the function return string  
// so how it's possible? if you write type (any) maybe you pass string and function return number or any thing like that 

const passed = (value: any): any => {
    return value
}
passed('string')//maybe the function return number to me and it's ok i didn't have error but it's not i want

// for fix that we use generic


// const identity<Type>=(value:Type):Type=>value
function identity<Type>(value: Type): Type {
    return value
}

identity(3)

// shortcut
function identityTwo<T>(value: T): T {
    return value
}
identityTwo(true)

// you can pass your own type generic 

interface Bottle {
    brand: string
    type: number
}
identityTwo<Bottle>({ brand: 'brand', type: 5 })
