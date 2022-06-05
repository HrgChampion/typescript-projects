
import './App.css'
import { Greet } from './Components/Greet'
import { Person } from './Components/Person'
import { PersonList } from './Components/PersonList'
import { Status } from './Components/Status'
import { Heading } from './Components/Haeding'
import { Oscar } from './Components/Oscar'
import { Button } from './Components/Button'
import { Input } from './Components/Input'
import { Container } from './Components/Container'

function App() {

  const personName={
    first:'Sachin',
    last:'Tendulkar'
  }

  const nameList=[
    {
      first:"Sachin",
      last:"Tendulkar"
    },{
      first:"Rahul",
      last:"Dravid"
    },
    {
      first:"Virat",
      last:"Kohli"
    }
  ]

  return (
    <div className="App">
      <Greet name="Himanshu"  isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Heading</Heading>
      <Oscar>
        <Heading> Oscar Goes to Leonardo DeCaprio! </Heading>
      </Oscar>
      <Button handleClick={(event,id)=>{

        console.log('Button Clicked',event,id)
      }}/>

      <Input value='' handleChange={(event)=>console.log(event)}/>

      <Container styles={{border:'1px solid black',padding:'1rem'}}/>
    </div>
  )
}

export default App
