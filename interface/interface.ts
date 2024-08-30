interface User {
    username: string
    email: string
    phone?: number
    // method(): string
    method: () => string
    // coupon: (name: string, value: number) => number // it's didn't work
    coupon(name:string,value:number):number
}

const user: User = {
    username: 'barbod', email: 'example@google.com', method: () => 'Hello, world!',
    coupon: (barbodName: 'barbod', value: 5) => 10
}

// interface help you to write methods

export { }