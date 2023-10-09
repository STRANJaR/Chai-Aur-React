import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);


//  let counter = 5  



 const addValue = ()=>{
   if(counter <= 19){
     setCounter(counter + 1);

   }else{
    addValue.disable
   }
 }


 const removeValue = () =>{
  if(counter >= 1){
    setCounter(counter -1);
  }else{
    setCounter.disable
  }
 }
  return (
   <>
   <h1>Chai aur React 🚀</h1>
   <h2>Counter Value: {counter} </h2>

    {/* ADDING VALUE DYNAMICALLY  */}
   <button onClick={addValue}>Add Value {counter}</button> <br />

    {/* REMOVING VALUE DYNAMICALLY  */}
   <button onClick={removeValue}>Remove Value {counter}</button>
   </>
  )
}

export default App
