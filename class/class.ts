class User {
    name: string
    age: number
    private readonly city: string = ''
    protected _curseCount = 1
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    get allUsers(): string {
        return `your username is ${this.name}`
    }
    get allCurseCount(): number {
        return this._curseCount
    }
    // when you write set you can't define type like number,string or anything to function
    set addUsers(number: number) {
        if (number <= 1) {
            throw new Error('number most be bigger than 1')
        }
        this._curseCount = number
    }
}

///////////////////////////////important (protected)

// when you use private for a variable, you don't access to variable and more that any your class child can't access the variable 
// to fix that  use protected this key give you access to use this variable in all your class child but it's not public   

class SubUser extends User {
    isFamily: boolean;
    changeCourseCount() {
        this._curseCount = 20
    }
}
const newUser = new User('Barbod', 20)
newUser.allUsers // when you use get you can't write arguman to function 
// newUser.allUsers() it's wrong










export { }