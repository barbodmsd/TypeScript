const firstFunction = (value: number | string) => {
    if (typeof value === 'string') {
        return value.toLowerCase()
    }
    return value.toFixed(2)
}// this happen when you don't sure what is exactly the argument to fix that we should write condition 


const secondFunction = (id: string | null) => {
    if (!id) {
        console.log(`ID not exist`)
        return
    }
    return id.trim()
}

// if we have three type in argument
const thirdFunction = (val: string | string[] | null) => {
    if (val) {
        if (typeof val === 'object') {
            for (const e of val) {
                console.log(e)
            }
        } else if (typeof val === 'string') {
            console.log('string')
        }
    }
}


interface User {
    name: string
    password: number
}

interface Admin {
    name: string
    password: number
    isAdmin: boolean
}

// const adminAccount = (account: User | Admin) => {
//      when you don't 100% sure typeof account is Admin you can't access to what not in User , you just access to what both of them have
//      return account.isAdmin
// }


// to fix that you 100% sure the typeof account is Admin use (in) 
const adminAccount = (account: User | Admin) => {
    if ('isAdmin' in account) {
        return account.isAdmin
    }
    return false
}

///////////////instanceof jut for methods like new Date or new Array and ....
const forthFunction = (val: Date | string) => {
    // if(typeof val ==='Date'){} // you ca't do this you got an error
    if (val instanceof Date) {
        return val.getDate()
    } else {
        return val.toLowerCase()
    }

}

type Fish = { swim: () => void }
type Bird = { fly: () => void }

const isFish = (pet: Fish | Bird):pet is Fish => {
    return (pet as Fish).swim !== undefined // if the pet was fish it's return true
}

const getFood=(pet:Fish|Bird)=>{
    if(isFish(pet)){
        pet
        return 'fish food'
    }else {
        pet
        return 'bird food '
    }
}


export { }