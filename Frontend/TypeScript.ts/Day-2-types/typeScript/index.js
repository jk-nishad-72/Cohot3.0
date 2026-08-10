"use strict";
// 1) Inference & Annotation
Object.defineProperty(exports, "__esModule", { value: true });
// Inference: ts automatically take data type of assigned data ,
//  and it take only data whos data type is same that stored first else it give error
let a = 90;
a = 190;
//Annotation:  assign data type 
let b = 'jaykishan';
console.log(a, b);
/**
 * 2) premitieves data types
a)number
b)string,
c)bigInt
d)boolean
e)symbol
 */
let n = 40;
let name = 'jay';
let bg = 158903423n;
let bool = true;
let sy = Symbol('hii');
console.log(n, name, bg, bool, sy);
//3) any vs unknown vs never 
let ex; // like js variable
ex = 90;
ex = 'jfkjaslkdf';
ex = true;
// unknown
let exe;
exe = 'jay';
exe = 'fjka;sdjkfa';
exe = 393;
let nev;
/**
4) Array
5) tupples
 */
let arr = [1, 2, 3, {}, [], 'he', false];
let arr1 = [1, 2, 3, {}, [], 'he', false];
// let arr2:number[] = ['fj'] ❌
let arr2 = [1, 2, 3, 4, 5, 5,]; //✔️✅
// tupples
// let arr3:[number , string , boolean] = [2 , 'jakjs', true , 50] ❌
let arr3 = [2, 'jakjs', true]; // ✅ 
let arr4 = [{ name: 'jay', id: true }, { age: 58 }];
console.log(arr4);
//6)enum 
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["SUP"] = 1] = "SUP";
    Role[Role["ADMIN"] = 2] = "ADMIN";
})(Role || (Role = {}));
let user = Role.USER;
console.log(user); //0
/**
 7) Union types
 8) literel types
 */
// union
let yolo = "rahul";
yolo = 90;
let status = "success";
console.log(yolo, status);
//# sourceMappingURL=index.js.map