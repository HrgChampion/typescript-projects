// let greet:Function;
// greet=()=>{
//     console.log("Hello");
// }
// const add=(a:number,b:number,c:number|string=10)=>{
//     console.log(c);
//     return a+b;
// }
// console.log(add(1, 2,20));
// const minus=(a:number,b:number)=>{
//     return a-b;
// }
// let result=minus(10,5);
// type stringorNum=string|number;
// type objWithName={name:string,uid:stringorNum};
// const logDEtails=(uid:stringorNum,item:string)=>{
//     console.log(`${item} with ${uid}`);
// }
// const greet=(user:objWithName)=>{
//     console.log(user.name);
//     console.log(user.uid);
// }
// const greetAgain=(user:objWithName)=>{
//     console.log(user.name);
//     console.log(user.uid);
// }
//let greet:(a:string,b:string)=>void;
// greet=(name:string,greeting:string)=>{
//     console.log(`${name} says ${greeting}`);
// }
// let calc:(a:number,b:number,c:string)=>number;
// calc=(numOne:number,numTwo:number,action:string)=>{
//     if(action==="add"){
//         return numOne+numTwo;
//     }
//     else if(action==="minus"){
//         return numOne-numTwo;
//     }
//     else{
//         return 0;
//     }
// }
// type person={name:string,age:number}
// let logDetails=(obj:person)=>{
//     console.log(`${obj.name} with ${obj.age}`);
// }
// logDetails=(obj:{name:string,age:number})=>{
//     console.log(`${obj.name} with ${obj.age}`);
// }
// let anchor=document.querySelector("a")!;
// console.log(anchor.href);
//const form=document.querySelector("form")!;
//const form =document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);
// const type=document.querySelector("#type") as HTMLSelectElement;
// const tofrom=document.querySelector("#tofrom") as HTMLInputElement;
// const details=document.querySelector("#details") as HTMLInputElement;
// const amount=document.querySelector("#amount") as HTMLInputElement;
// form.addEventListener("submit",(e:Event)=>{
//     e.preventDefault();
//     console.log(type.value,tofrom.value,details.value,amount.value);
// }
// );
// class Invoice{
//     // client:string;
//     // details:string;
//     // amount:number;
//     constructor(readonly client:string,
//         private details:string,
//         public amount:number){}
//     format(){
//         return `${this.client} owes £${this.amount} for ${this.details}`;
//     }
// }
// const invOne=new Invoice("mario","work on the mario website",250);
// const invTwo=new Invoice("luigi","work on the luigi website",300);
// console.log(invOne,invTwo);
// let invoices:Invoice[]=[];
// invoices.push(invOne);
// invoices.push(invTwo);
// //console.log(invoices);
// invoices.forEach(inv=>{
//     console.log(inv.client,inv.amount,inv.format());
// }
// );
// interface isPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: isPerson = {
//     name: "Max",
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     }
//     ,
//     spend(amount: number): number {
//         console.log("I spent", amount);
//         return amount;
//     }
// };
// const greetPerson = (person: isPerson) => {
//     console.log("Hello", person.name);
// }
// greetPerson(me);
// console.log(me)
import { Invoice } from "./classes/invoice";
import { Payment } from "./classes/Payment";
// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// docOne=new Invoice("mario","work on the mario website",250);
// docTwo=new Payment("luigi","work on the luigi website",300);
// console.log(docOne,docTwo);
// let docs:HasFormatter[]=[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const form=document.querySelector("form")!;
const form = document.querySelector(".new-item-form");
console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let Doc;
    if (type.value === "invoice") {
        Doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        Doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(type.value, tofrom.value, details.value, amount.value);
});
