"use strict";
// sometimes you want in a function what type you passed in, you return exactly that type 
//  for example you pass to function string should the function return string  
// so how it's possible? if you write type (any) maybe you pass string and function return number or any thing like that 
Object.defineProperty(exports, "__esModule", { value: true });
var passed = function (value) {
    return value;
};
passed('string'); //maybe the function return number to me and it's ok i didn't have error but it's not i want
// for fix that we use generic
function identity(value) {
    return value;
}
// with arrow function
var identityTwo = function (value) { return value; };
identity(3);
// shortcut
var identityThree = function (value) { return value; };
identityTwo(true);
identityTwo({ brand: 'brand', type: 5 });
// generics in array  
var getSearch = function (products) { return products[2]; };
// the (,) mean this not a tag or component this generic type
////////////////////////generics class
var anotherFunction = function (valueOne, valueTwo) {
    return { valueOne: valueOne, valueTwo: valueTwo };
};
// anotherFunction(5,'5') wrong x
anotherFunction(20, 21);
// you can write any word you like D,O,N anything 
var dbFunction = function (valueOne, valueTwo) {
    return { valueOne: valueOne, valueTwo: valueTwo };
};
dbFunction(20, { username: 'barbodmsd', password: 2021545121 });
////////////////////////generic with class
var Sell = /** @class */ (function () {
    function Sell() {
        this.cart = [];
    }
    Sell.prototype.addProduct = function (product) {
        this.cart.push(product);
    };
    return Sell;
}());
