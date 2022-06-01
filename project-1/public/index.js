"use strict";
// let greet:Function;
// greet=()=>{
//     console.log("Hello");
// }
const add = (a, b, c = 10) => {
    console.log(c);
    return a + b;
};
console.log(add(1, 2, 20));
