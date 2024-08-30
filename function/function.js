"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var func = function (number) {
    return number + 2;
};
func(5);
var toUpper = function (value) {
    return value.toUpperCase();
};
toUpper("barbod");
var user = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
user('barbod', 'barbod@gmail.com');
//////////////////////////////////////// part two
var addNumber = function (number) {
    return number + 2;
    // return "hello"
};
var value = addNumber(5);
// const heros=['thor','spiderMan','ironMan']
var heros = [1, 2, 5, 5];
heros.map(function (e) {
    return "name is : ".concat(e);
});
var consoleError = function (error) {
    console.log(error);
}; // void mean this function doesn't return
var handleError = function (errorMsg) {
    throw new Error(errorMsg);
}; // never mean this function never return any thing
