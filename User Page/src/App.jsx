import { useState } from 'react'
import logo from "./assets/instagram.png"
import './App.css'

function App() {
  const [login, setlogin] = useState(true)

  function loginSwitch(){
    setlogin(!login)
  }

  return (
    <div id='container'>
        <div id='user'>
            <img src={logo}/>
            <input hidden={login} type="text" placeholder='Mobile Number or Email' name="" id="" />
            <input hidden={login} type="text" placeholder='Full Name' name="" id="" />
            <input type="text" placeholder='Phone number, username , or email'  name="" id="" />
            <input type="text" placeholder='Password'  name="" id="" />
            <button>{login ? "Sign in":"Sign up"}</button>

            <div id='footer'>
              {login?"Don't have account?":"Have an account?"}
              <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
            </div>
        </div>
    </div>
  )
}

export default App
