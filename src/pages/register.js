import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function Register() {

    const [ password, setPassword ] = useState('')
    const [ fullname, setFullname ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ contact, setContact ] = useState('')
    const [server, setServer] = useState([{}])

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(fullname, password);
    }

    useEffect(() =>{
      fetch('/api').then(
        res => res.json()
      ).then(
        data => setServer(data)
      )
      
    },[])

    return (
        <div className='loginPanel'>
          
          <h1>Register</h1>
          <form onSubmit={ onSubmit}>
            <div className="formItem">
            <label>Full Name</label>
            <input type="text" id='name' value={ fullname } onChange={(e) => setFullname(e.target.value)}/>
            </div>
            <div className="formItem">
            <label>Address</label>
            <input type="text" id='address' value={ address } onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div className="formItem">
            <label>Contact Number</label>
            <input type="text" id='contact' value={ contact } onChange={(e) => setContact(e.target.value)}/>
            </div>
            <div className="formItem">
            <label>Email</label>
            <input type="text" id='email' value={ email } onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="formItem">
            <label>Password</label>
            <input type="password" id='password' value={ password } onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button>Enter</button>
            <Link to={'/'}> <button>Login</button> </Link>
          </form>

          <div className="agreements">
            <Link to={'/agreements/dataprivacy'}><span>Data Privacy Policy</span></Link>
            <Link to={'/agreements/terms'}><span>Terms and Conditions</span></Link>
          </div>
        </div>
    )
}

export default Register;