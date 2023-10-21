import React, {useState, useContext} from 'react'
import UserContext  from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const  {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser
        
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='usename' />
        <input type="text" placeholder='password' />
        <button onClick={handleSubmit}>submit</button>
        
    </div>
  )
}

export default Login