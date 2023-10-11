
import './App.css'
import Card from './components/Card'
function App() {
  
  let myObj ={
    username: 'Stranger',
    age: 20
  }

  return (
    <>
    <h1 className='bg-blue-400 p-3 rounded-xl '>Tailwind</h1>
    <Card username="chaiaurcode" someObj={myObj} />
    <Card username="HP ProBook" someObj={myObj} />
    <button className='bg-red-500 p-2 rounded'>Submit</button>
    </>
  )
}

export default App
