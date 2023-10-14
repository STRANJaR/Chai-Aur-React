import { useState, useCallback } from "react"

function App() {
const [length, setLength] = useState(8);
const [numberAllowed, setNumberAllowed] = useState(false)
const [charAllowed, setCharAllowed] = useState(false)
const [Password, setPassword] = useState('')

const passwordGenerator = useCallback(() =>{
  let pass = '';
  let str = 'ABCDEFGHIJKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  if(numberAllowed) str += '0123456789';
  if(charAllowed) str += '!@#$%^&*';

  for (let i = 1; i < length.length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    // console.log(char)

    pass = str.charAt(char)
    
  } 
  setPassword(pass)
}, [length, numberAllowed, charAllowed])

  return (
    <div>
        <h1 className="text-3xl text-center p-3 font-bold">Password Generator</h1>

        <div className="w-full max-w-md mx-auto shadow-md
        rounded-lg px-4 my-8 text-orange-500 bg-gray-800"></div>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly 
          />
        <button className="outline-none bg-blue-600 text-white
        px-3 py-0.5 shrink-0">Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={6}
            max={15}
            value={length}
            className="cursor-pointer"
            onChange={(e)=> {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="chracterInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="chracterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
        
    </div>
  )
}

export default App
