// let greet:Function;

// greet=()=>{
//     console.log("Hello");
// }
const add=(a:number,b:number,c:number|string=10)=>{
    console.log(c);
    return a+b;
}
console.log(add(1, 2,20));