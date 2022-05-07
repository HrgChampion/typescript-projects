//Basics of TypeScript
// let name:string;
// let age:number | string;
// let isMarried:boolean;
// let hobbies:string[];
// let role:[number,string]; //object

// type Person ={
//   name:string,
//   age?:number
// }
// let person:Person={
//   name:'John',

// }
// function printName(name:string){
//   console.log(name);
// }
// printName('John');

// let printsomething :(name:string)=>void;
// let notprint:(name:string)=>never;
// let something:unknown;

// interface Person {
//   name:string,
//   age?:number
// }
// interface AnotherPerson extends Person {
//   profession:string,
//   age:number
// }

// type X={
//   a:string,
//   b:number
// }
// type Y= X &{
//   c:string,
//   d:number
// }
// let y : Y={
// c:'c',
// d:1,
// a:'a',
// b:1
// }