let score: string | number = 33
score = 'barbod'
score = 20


type User = {
    name: string
    id: number
}
type Admin = {
    username: string
    id: number
}
let info: Admin | User = {
    username: '',
    id: 5
}
info = { username: '', id: 5 }


const getId = (id: number | string) => {
    typeof id === 'string' && id.toUpperCase()
}

getId('5')
getId(5)

///////////array union

const array: (string | number)[] = ['1', 1]// it's mean in the array most be number or string 

const secondArray: string | number[] = [] // it's wrong cause it's mean this value should be or array of number   or just string


const thirdArray: string[] | number[] = ['1', '2'] //it's mean this array should be just array of numbers or array of strings

const forthArray: Array<number> | Array<string> = ['5', '5'] //it's mean this array should be just array of numbers or array of strings

let seat:'first'|'second'|'third'
seat = 'second'
// seat = 'every thing' //error

export {}