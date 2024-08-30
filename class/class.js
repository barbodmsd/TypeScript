"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        this.city = '';
        this._curseCount = 1;
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(User.prototype, "allUsers", {
        get: function () {
            return "your username is ".concat(this.name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "allCurseCount", {
        get: function () {
            return this._curseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "addUsers", {
        // when you write set you can't define type like number,string or anything to function
        set: function (number) {
            if (number <= 1) {
                throw new Error('number most be bigger than 1');
            }
            this._curseCount = number;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
///////////////////////////////important (protected)
// when you use private for a variable, you don't access to variable and more that any your class child can't access the variable 
// to fix that  use protected this key give you access to use this variable in all your class child but it's not public   
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._curseCount = 20;
    };
    return SubUser;
}(User));
var newUser = new User('Barbod', 20);
newUser.allUsers; // when you use get you can't write arguman to function 
