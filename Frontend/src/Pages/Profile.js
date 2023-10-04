import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Profile.css'
import Image from '../images/cartoon-couple-doctors-waving-free-vector-transformed.png'
import axios from 'axios';
function Profile() {
const[name,setname]=useState();
const[email,setemail]=useState();
const[phone,setphone]=useState();
const[gender,setgender]=useState();
const [age,setAge]=useState();
const [height,setheight]=useState();
const[Weight,setWeight]=useState();
const[medicalhistroy,setmedicalhistroy]=useState();

useEffect(()=>{
axios.get('http://localhost:8080/api/v1/profile/'+localStorage.getItem('email')).then(res=>{
    setname(res.data.fname+" "+res.data.lname);
    setemail(res.data.email);
    setphone(res.data.phone);
    setgender(res.data.gender);
    setAge(res.data.age);
    setheight(res.data.height);
    setWeight(res.data.weight);
    setmedicalhistroy(res.data.medicalhistroy);
})
},[])
    return (

        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '4rem' }}>
                <div class="card green">
                    <div class="additional">
                        <div class="user-card" style={{display:'flex',justifyContent:'center',alignItems:'center',left:'85px'}}>
                            <div>
                                <img src={Image} style={{ maxWidth: '20rem' }}></img>
                            </div>
                            <div class="points center">
                                5,312 Points
                            </div>
                        </div>
                        <div class="more-info">
                            <h1>{name}</h1>
                            <div class="coords">
                                <span>Height</span>
                                <span>{height}</span>
                            </div>
                            <div class="coords">
                                <span>Weight</span>
                                <span>{Weight+"kg"}</span>
                            </div>
                            <div class="coords">
                                <span>Health Histroy</span>
                            </div>
                            <div class="coords">
                                <span>{medicalhistroy}</span>
                            </div>


                        </div>
                    </div>
                    <div class="general">
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <h1 style={{ textAlign: 'center' }}>{name}</h1>

                            <span style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '2.5px' }}>
                                <p>{email} </p>
                                <p> Phone no-{phone}</p>
                                <p> Gender -{gender} </p>
                                <p>  Age -{age}</p>
                            </span>
                            <span class="more">Mouse over  for helth info</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile