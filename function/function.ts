const func=(number:number)=>{
    return number+2
}
func(5)

const toUpper=(value:string)=>{
    return value.toUpperCase()
}
toUpper("barbod")

const user=(name:string,email:string,isPaid:boolean=false)=>{}
user('barbod','barbod@gmail.com')
//////////////////////////////////////// part two
const addNumber=(number:number):number=>{
    return number+2
    // return "hello"
}
const value =addNumber(5)

// const heros=['thor','spiderMan','ironMan']
const heros=[1,2,5,5]


heros.map((e:number):string=>{
    return `name is : ${e}`
})

const consoleError=(error:string):void=>{
    console.log(error)
}// void mean this function doesn't return

const handleError=(errorMsg:string):never=>{
    throw new Error(errorMsg)
}// never mean this function never return any thing










export {}