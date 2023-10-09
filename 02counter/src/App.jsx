import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);


//  let counter = 5  

 const addValue = ()=>{
   console.log('Clicked')
   setCounter(counter + 1);
 }

 const removeValue = () =>{
  setCounter(counter -1);
 }
  return (
   <>
   <h1>Chai aur React</h1>
   <h2>Counter Value: {counter} </h2>

    {/* ADDING VALUE DYNAMICALLY  */}
   <button onClick={addValue}>Add Value {counter}</button> <br />

    {/* REMOVING VALUE DYNAMICALLY  */}
   <button onClick={removeValue}>Remove Value {counter}</button>
   </>
  )
}

export default App
