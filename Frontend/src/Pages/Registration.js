import React, { useState ,useEffect } from 'react'
import './Registration.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Registration() {
    const[fname,setfname]=useState();
    const[lname,setlname]=useState();
    const[email,setemail]=useState();
    const[phone,setphone]=useState();
    const[gender,setgender]=useState();
    const[age,setage]=useState();
    const[height,setheight]=useState();
    const[weight,setweight]=useState();
    const[medicalhistroy,setmedicalhistroy]=useState();
    const[docurl,setdocurl]=useState();
    const [selectedFile, setSelectedFile] = useState(null);
    const[isFileUpload,setFileUpload]=useState(true);
    const navigate=useNavigate();
    
  // console.log(isFileUpload);
    const token = localStorage.getItem('jwt');
    const APIURL='http://localhost:8080/api/v1/profile/basicinfo/' + localStorage.getItem('email');
    // Set the Authorization header with the token
    // const headers = {
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}`
    // };
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    useEffect(() => {
        axios.get(APIURL).then(res => {
            console.log(res);
            setfname(res.data.fname);
            setlname(res.data.lname);
            setemail(res.data.email);
        }).catch(err => { console.log(err); })
    }, [])

    const cleardata=()=>{
        setemail("");
        setage("")
        setfname("")
        setlname("")
        setdocurl("")
        setgender("")
        setheight("")
        setweight("")
        setmedicalhistroy("")
        setphone("")
    
    }

    const uploadFile= async (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedFile);
        console.log("here");
        try {
            console.log("inside try");
          const response = await axios.post('http://localhost:8084/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log(response.data);
          setdocurl(response.data);
          setFileUpload(false);
          alert('File Uploded Successfully..')
        } catch (error) {
          console.error(error);
        }
    
    }

    const Create=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8080/api/v1/profile/save',{
            fname,
            lname,
            email,
            phone,
            gender,
            age,
            height,
            weight,
            medicalhistroy,
            docurl
        }).then(res=>{
            console.log(res);
            alert('from submitted succesfully')
            cleardata()
            navigate('/user/Profile')
        }).catch(err=>{console.log(err); cleardata()})
    }
    return (
        <>
        <h2 style={{textAlign:'center',fontWeight:'bold',margin:'3rem'}}>Registration</h2>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'2rem'}}>
            
                <div class="container">
                    

                    <form action="#">
                        <div class="form first">
                            <div class="details personal">
                                <span class="title">Personal Details</span>

                                <div class="fields">
                                    <div class="input-field">
                                        <label>First Name</label>
                                        <input value={fname} onChange={(e)=>{setfname(e.target.value)}} type="text" placeholder="Enter your First Name" required  name='fname'/>
                                    </div>
                                    <div class="input-field">
                                        <label>Last Name</label>
                                        <input value={lname} onChange={(e)=>{setlname(e.target.value)}} type="text" placeholder="Enter your Last Name" required name='lname'/>
                                    </div>

                                    <div class="input-field">
                                        <label>Email</label>
                                        <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="Enter your email" required />
                                    </div>

                                    <div class="input-field">
                                        <label>Mobile Number</label>
                                        <input value={phone} onChange={(e)=>{setphone(parseInt(e.target.value))}} type="number" placeholder="Enter mobile number" required />
                                    </div>

                                    <div class="input-field">
                                        <label>Gender</label>
                                        <select required defaultValue={'Male'} onChange={(e)=>{setgender(e.target.value)}}>
                                            <option disabled selected>Select gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </select>
                                    </div>

                                    <div class="input-field">
                                        <label>Age</label>
                                        <input value={age} onChange={(e)=>{setage(parseInt(e.target.value))}} type="number" placeholder="Enter your Age" required />
                                    </div>
                                </div>
                            </div>

                            <div class="details ID">
                                <span class="title">Basic Health Details</span>

                                <div class="fields">
                                    <div class="input-field">
                                        <label>Height</label>
                                        <input value={height} onChange={(e)=>{setheight(parseFloat(e.target.value))}} type="number" placeholder="Enter your height" required />
                                    </div>

                                    <div class="input-field">
                                        <label>Weight</label>
                                        <input value={weight} onChange={(e)=>{setweight(parseFloat(e.target.value))}} type="number" placeholder="Enter your weight" required />
                                    </div>

                                    <div class="input-field">
                                        <label>Medical Report</label>
                                       <div style={{display:'flex'}}> 
                                        <input type="file" placeholder="Enter Report" required id='file' onChange={(event)=>{setSelectedFile(event.target.files[0]);}} />
                                        <button style={{width:'100px',height:'40px'}} onClick={uploadFile}>upload file</button>
                                        </div>
                                    </div>

                                    <div class="input-field">
                                        <label>Any Disease</label>
                                        <input value={medicalhistroy} onChange={(e)=>{setmedicalhistroy(e.target.value)}} type="text" placeholder="Enter Medical Histroy" required />
                                        
                                    </div>

                                </div>

                                <button class="nextBtn" onClick={Create} disabled={isFileUpload}>
                                    <span class="btnText">Submit</span>
                                    <i class="uil uil-navigator"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration