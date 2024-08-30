// const createUser = ({ name: string, isPaid: boolean }): {} => {
//     return {}
// }

// const createCourse = (): { name: string, price: number } => {
//     return { name: 'barbod', price: 20 }
// }  //only return an object with two key name and price



//type Aliases
// type User={
//     name:string;
//     email:string;
//     isPaid:boolean
// }

// const getInfo=(user:User):User=>{
//     return {name:'',email:'',isPaid:true}}


// getInfo({name:'',email:'',isPaid:true})

////////////////////////////////////////////////////////////  readonly

// type User={
//     readonly _id:string
//     name:string
//     email:string
//     isActive:boolean
//     phone?:number//this sign (?) mean obtional chening like js
// }

// const user:User={
//     _id:'62545d5d1f5df1d',
//     name:'barbod',
//     email:'barbod@gmail.com',
//     isActive:true
// }
// user.email='barbod.com'
// user._id='try to change'// it's don't change because it read only 


type cardNumber = {
    cardNumber: number
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}
const getCardUser = (info: cardDetails) => { }

getCardUser({ cardDate: '2024', cardNumber: 285121, cvv: 2545 })




export { }