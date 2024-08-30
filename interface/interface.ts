interface User {
    username: string
    email: string
    phone?: number
    // method(): string
    method: () => string
    // coupon: (name: string, value: number) => number // it's didn't work
    coupon(name:string,value:number):number
}
interface User{// you can add to your interface type
githubToken?:string
}

interface Admin extends User{}// you can extends from any interface you want

// const user: User = {
//     username: 'barbod', email: 'example@google.com', method: () => 'Hello, world!',
//     githubToken:'https://github.com/barbodmsd',
//     coupon: (barbodName: 'barbod', value: 5) => 10
// }

const user: Admin = {
    username: 'barbod', email: 'example@google.com', method: () => 'Hello, world!',
    githubToken:'https://github.com/barbodmsd',
    coupon: (barbodName: 'barbod', value: 5) => 10
}

// interface help you to write methods

export { }