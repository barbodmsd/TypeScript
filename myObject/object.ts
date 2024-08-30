const createUser=({name:string,isPaid:boolean}):{}=>{
    return {}
}

const createCourse=():{name:string,price:number}=>{
    return {name:'barbod',price:20}
}  //only return an object with two key name and price



//type Aliases
type User={
    name:string;
    email:string;
    isPaid:boolean
}

const getInfo=(user:User):User=>{
    return {name:'',email:'',isPaid:true}}


getInfo({name:'',email:'',isPaid:true})