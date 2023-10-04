import { Link, useNavigate } from "react-router-dom";
import Logo from '../images/medical-logo-removebg-preview.png'
import { isLogin ,isProfile } from "./Variable";
import { useEffect, useState } from "react";
import axios from "axios";

export const Navbar = () => {
  const navigate = useNavigate()
  const [isProfileset,setisProfile]=useState();
  const APIURL = 'http://localhost:8080/api/v1/profile/' + localStorage.getItem('email')
  const token = localStorage.getItem('jwt');
  const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
  };

  useEffect(()=>{
    axios.get(APIURL, { headers }).then(res => {
      if(res.data!="")
      setisProfile(true);
      else
      setisProfile(false)
      return true;
  }).catch(err => {
      console.log(err);
      return false;
  })
  },[])

  return (
    <nav id="navbar">
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <img
          src={Logo}
          style={{ maxWidth: '9rem' }}
        />

        <h2 style={{ marginTop: '3.5rem', fontFamily: 'Hind Siliguri', fontWeight: 'bold' }}>Health Care</h2>
      </div>

      <ul id="navlist">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/About">About Us</Link>
        <Link className="link" to="/user/Courses">Services</Link>
        
        {isProfileset ? <Link className="link" to="/user/Profile">Your Profile</Link> : <Link className="link" to="/user/Register">Your Profile</Link>}
        <Link className="link" to="/user/Appoinment">Online Hospitals</Link>
      </ul>
      {/* {isLogin() ?<button className="btn" onClick={()=>{localStorage.clear();navigate("/")}}>Log out</button> :<button className="btn" onClick={()=>{navigate('/Login')}}>Log in</button>}   */}

      {isLogin()?<div style={{display:'flex',justifyContent:'space-around'}}>
        <div className="dp">
          <img src=
            "https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
            className="dpicn"
            alt="dp" />
        </div>
        <button className="btn" onClick={()=>{localStorage.clear();navigate("/")}} style={{height:'35px',marginTop:'17px',paddingBottom:'30px'}}>Logout</button>
      </div> :<button className="btn" onClick={()=>{navigate('/Login')}}>Log in</button>
      }
      
    </nav>
  );
};
