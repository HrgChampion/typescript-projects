import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Greet } from './Components/Greet'
import { Person } from './Components/Person'
import { PersonList } from './Components/PersonList'
import { Status } from './Components/Status'
import { Heading } from './Components/Haeding'
import { Oscar } from './Components/Oscar'

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
    </div>
  )
}

export default App
