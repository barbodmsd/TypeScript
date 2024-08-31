const firstFunction=(value:number |string)=>{
    if (typeof value ==='string'){
        return value.toLowerCase()
    }
    return value.toFixed(2)
}
// this happen when you don't sure what is exactly the argument to fix that we should write condition 


const secondFunction=(id:string|null)=>{
    if(!id){
        console.log(`ID not exist`)
        return 
    }
    return id.trim()
}

// if we have three type in argument
const thirdFunction=(val:string|string[]|null)=>{
    if(val){
        if(typeof val==='object'){
            for(const e of val){
                 console.log(e)
            }
        }else if (typeof val==='string' ){
            console.log('string')
        }
    }
}