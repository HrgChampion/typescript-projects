<<<<<<< HEAD
import { PersonProps } from "./Person.types"
=======
type PersonProps={
    name:{
        first:string;
        last:string
    }
}
>>>>>>> 1bf8912777a893198ab49802bf3b35ce7331106c


export const Person=(props:PersonProps)=>{
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}