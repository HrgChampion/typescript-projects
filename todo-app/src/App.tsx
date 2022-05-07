import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import InputField from './components/InputField/InputField'




const App:React.FC=()=>{ //React.FC is a function component
  

  return (
    <div className="App">
     <span className='heading'>Todo-App</span>
     <InputField />
    </div>
  )
}

export default App
