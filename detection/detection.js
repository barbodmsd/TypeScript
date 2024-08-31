"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firstFunction = function (value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    return value.toFixed(2);
}; // this happen when you don't sure what is exactly the argument to fix that we should write condition 
var secondFunction = function (id) {
    if (!id) {
        console.log("ID not exist");
        return;
    }
    return id.trim();
};
// if we have three type in argument
var thirdFunction = function (val) {
    if (val) {
        if (typeof val === 'object') {
            for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                var e = val_1[_i];
                console.log(e);
            }
        }
        else if (typeof val === 'string') {
            console.log('string');
        }
    }
};
// const adminAccount = (account: User | Admin) => {
//      when you don't 100% sure typeof account is Admin you can't access to what not in User , you just access to what both of them have
//      return account.isAdmin
// }
// to fix that you 100% sure the typeof account is Admin use (in) 
var adminAccount = function (account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
    return false;
};
