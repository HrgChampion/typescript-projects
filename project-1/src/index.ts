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



// import { Invoice } from "./classes/invoice";
// import {Payment} from "./classes/Payment";
// import { HasFormatter } from "./interfaces/Hasformatter";
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

// const form =document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// const type=document.querySelector("#type") as HTMLSelectElement;
// const tofrom=document.querySelector("#tofrom") as HTMLInputElement;
// const details=document.querySelector("#details") as HTMLInputElement;
// const amount=document.querySelector("#amount") as HTMLInputElement;

// form.addEventListener("submit",(e:Event)=>{
//     e.preventDefault();
//     let Doc:HasFormatter;
//     if(type.value==="invoice"){
//         Doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber);
//     }
//     else{
//         Doc=new Payment(tofrom.value,details.value,amount.valueAsNumber);
//     }

//     console.log(type.value,tofrom.value,details.value,amount.value);
// }
// );

// const addUid=<T extends {name:string}>(obj:T)=>{
//     let uid=Math.floor(Math.random()*100);
//     return {...obj,uid};
// }


// interface Resource<T>{
//     uid:number;
//     resourceName:string;
//     data:T;
// }

// let docOne=addUid({name:"Max",age:30});
// console.log(docOne.age);

// const docThree:Resource<object>={
//     uid:1,
//     resourceName:"book",
//     data:{
//         name:"Shaun",
//     }
// }

// const docFour:Resource<string[]>={
//     uid:2,
//     resourceName:"book",
//     data:["Shaun","Max","Anna"]
// }
// console.log(docThree,docFour);

enum ResourceType{BOOK,AUTHOR,FILM,DIRECTOR,PERSON}

interface Resource<T>{
    uid:number;
    resourseType:ResourceType;
    data:T;
}
const docOne:Resource<object>={
    uid:1,
    resourseType:ResourceType.BOOK,
    data:{title:'name of the wind'}
}
const docTwo:Resource<object>={
    uid:2,
    resourseType:ResourceType.PERSON,
    data:{name:'name of the wind'}
}

console.log(docOne,docTwo);


//tuples
let arr=["ryu",25,true];
arr[0]=false;
arr[1]="yoshi";
arr=[30,false,'yoshi'];

// let tup:[string,number,boolean]=["ryu",25,true];

// let student: [string, number];

// student=["Max",25];