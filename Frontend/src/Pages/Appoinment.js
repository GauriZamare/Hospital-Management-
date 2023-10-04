import React, { useEffect, useState } from 'react'
import './Appoinment.css'
import axios from 'axios';

function Appoinment() {
    const [fname, setfname] = useState();
    const [lname, setlname] = useState();
    const [phone, setphone] = useState();
    const [docname, setdocname] = useState();
    const [date, setdate] = useState();
    const [time, setTime] = useState();
    const [age, setage] = useState();

    const token = localStorage.getItem('jwt');
    const APIURL='http://localhost:8080/api/v1/profile/basicinfo/' + localStorage.getItem('email');
    // Set the Authorization header with the token
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    useEffect(() => {
        axios.get(APIURL, {headers}).then(res => {
            console.log(res);
            setfname(res.data.fname);
            setlname(res.data.lname);
        }).catch(err => { console.log(err); })
    }, [])

    const clearData=()=>{
        setfname("");
        setlname("");
        setage();
        setTime("");
        setdate("")
        setdocname("")
        setphone("")
    }
    const Book=()=>{
       axios.post('http://localhost:8082/',{
        fname,
        lname,
        phone,
        docname,
        age,
        date,
        time 
       }).then(res=>{
        console.log(res);
        alert('Appoinment Booked Successfully')
        clearData();
       }).catch(err=>{
        console.log(err);
        alert('Something went wrong')
        clearData();
       })
    }
    return (
        <>
            <div style={{ margin: '5rem' }}>
                <center>
                    <h1>Appointment Form</h1>
                </center>
                <div>
                    <div className="formbold-main-wrapper">
                        <div className="formbold-form-wrapper">
                            <div className="formbold-mb-5">
                                <label for="fname" className="formbold-form-label"> First Name </label>
                                <input
                                    type="text"
                                    value={fname}
                                    name="fname"
                                    id="name"
                                    placeholder="First Name"
                                    className="formbold-form-input"
                                    onChange={(e)=>{setfname(e.target.value)}}
                                />
                            </div>
                            <div className="formbold-mb-5">
                                <label for="lname" className="formbold-form-label"> Last Name </label>
                                <input
                                    type="text"
                                    value={lname}
                                    name="lname"
                                    id="name"
                                    placeholder="Last Name"
                                    className="formbold-form-input"
                                    onChange={(e)=>{setlname(e.target.value)}}
                                />
                            </div>
                            <div className="formbold-mb-5">
                                <label for="phone" className="formbold-form-label"> Phone Number </label>
                                <input
                                    type="text"
                                    value={phone}
                                    name="phone"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    className="formbold-form-input"
                                    onChange={(e)=>{setphone(parseInt(e.target.value))}}
                                />
                            </div>
                            <div className="formbold-mb-5">
                                <label for="email" className="formbold-form-label"> Doctor Name </label>
                                <input
                                    type="text"
                                    value={docname}
                                    name="docname"
                                    id="email"
                                    placeholder="Doctor Name"
                                    className="formbold-form-input"
                                    onChange={(e)=>{setdocname(e.target.value)}}
                                />
                            </div>
                            <div className="flex flex-wrap formbold--mx-3">
                                <div className="w-full sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5 w-full">
                                        <label for="date" className="formbold-form-label"> Date </label>
                                        <input
                                            type="date"
                                            value={date}
                                            name="date"
                                            id="date"
                                            className="formbold-form-input"
                                            onChange={(e)=>{setdate(e.target.value)}}
                                        />
                                    </div>
                                </div>
                                <div className="w-full sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                        <label for="time" className="formbold-form-label"> Time </label>
                                        <input
                                            type="time"
                                            value={time}
                                            name="time"
                                            id="time"
                                            className="formbold-form-input"
                                            onChange={(e)=>{setTime(e.target.value)}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap formbold--mx-3">
                                <div className="w-full sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                        <label for="age" > Age </label>
                                        <br />
                                        <br />
                                        <input
                                            type="number"
                                            name="age"
                                            value={age}
                                            onChange={(e)=>{setage(parseInt(e.target.value))}}
                                            id="area"
                                            placeholder="Enter age"
                                            className="formbold-form-input"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="formbold-btn" onClick={Book}>Book Appointment</button>
                    </div>

                </div >
            </div >
        </>
    )
}

export default Appoinment