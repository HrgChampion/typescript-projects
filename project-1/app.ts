
import {Invoice} from "../project-1/src/classes/invoice";
import {Payment} from "../project-1/src/classes/Payment";
import { HasFormatter } from "./src/interfaces/Hasformatter";
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
const form =document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

const type=document.querySelector("#type") as HTMLSelectElement;
const tofrom=document.querySelector("#tofrom") as HTMLInputElement;
const details=document.querySelector("#details") as HTMLInputElement;
const amount=document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit",(e:Event)=>{
    e.preventDefault();
    let Doc:HasFormatter;
    if(type.value==="invoice"){
        Doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    }
    else{
        Doc=new Payment(tofrom.value,details.value,amount.valueAsNumber);
    }

    console.log(type.value,tofrom.value,details.value,amount.value);
}
);
