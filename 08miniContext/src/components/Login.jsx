import  {useState, useContext} from 'react'
import UserContext  from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const  {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
        
    }
  return (
    <div>
        <h2>Login</h2>
        <input
         type="text"
          placeholder='usrename'
          value={username}
           onChange={(e)=> setUsername(e.target.value)}
           />


        <input 
        type="text"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
         placeholder='password'
          />
          
        <button onClick={handleSubmit}>submit</button>
        
    </div>
  )
}

export default Login