import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [fname, SetFname] = useState("");
  const [lname, SetLname] = useState("");
  const [Semail, SetSemail] = useState("");
  const [Spassword, SetSPassword] = useState("");
  const [email, Setemail] = useState("");
  const [password, SetPassword] = useState("");
  const navigate=useNavigate();

  const clearData = () => {
    SetFname("");
    SetLname("");
    SetSemail("");
    SetSPassword("");
    Setemail("")
    SetPassword("")
  }

  const SignUp = (e) => {
    e.preventDefault();
    //console.log(fname+" "+lname+" "+Semail+" "+Spassword);
    axios.post('http://localhost:8080/api/v1/auth/register', {
      fname,
      lname,
      "email":Semail,
      "password":Spassword
    }).then(res => {
      console.log(res);
      alert('Signup Succesfull!...');
      clearData();
    }).catch(err => {
      console.log(err);
      alert('Invalid Details')
      clearData();
    })
  }

  const Login = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/v1/auth/authenticate', {
      email,
      password
    }).then(res => {
       console.log(res);
       localStorage.setItem("jwt",res.data.token)
       localStorage.setItem('email',email);
      alert('Login Succesfull!....');
      clearData();
      navigate("/");
    }).catch(err => {
      console.log(err);
      alert('Invalid Details')
      clearData();
    })
  }


  return (
    <>
      <div className='abhiContainer'>
        <div class="abhimain">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="abhisignup">
            
              <label for="chk" aria-hidden="true">Sign up</label>
              <input type="text" name="fname" placeholder="First name" required="" value={fname} onChange={(e) => { SetFname(e.target.value) }} />
              <input type="text" name="lname" placeholder="Last name" required="" value={lname} onChange={(e) => { SetLname(e.target.value) }} />
              <input type="email" name="email" placeholder="Email" required="" value={Semail} onChange={(e) => { SetSemail(e.target.value) }} />
              <input type="password" name="password" placeholder="Password" required="" value={Spassword} onChange={(e) => { SetSPassword(e.target.value) }} />
              <button onClick={SignUp}>Sign up</button>
            
          </div>

          <div class="login">
           
              <label for="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" required="" value={email} onChange={(e) => { Setemail(e.target.value) }} />
              <input type="password" name="password" placeholder="Password" required="" value={password} onChange={(e) => { SetPassword(e.target.value) }} />
              <button onClick={Login} >Login</button>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Login