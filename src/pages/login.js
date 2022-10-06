import { useState } from "react";
import { Link } from 'react-router-dom'
import '../Auth.css'


function Login() {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(username, password);
    }

    return (
        <div className='loginPanel'>
          <h1>Login</h1>
          <form action='' onSubmit={ onSubmit}>
            <div className="formItem">
            <label>Username</label>
            <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="formItem">
            <label>Password</label>
            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <Link to={'/user'}> <button>Enter</button> </Link> 
            <Link to={'/register'}> <button>Register</button> </Link>
          </form>

        </div>
    )
}

export default Login;