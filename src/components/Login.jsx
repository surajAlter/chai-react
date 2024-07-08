import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder='username'
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder='password'
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login
