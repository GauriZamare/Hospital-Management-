import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import { Courses } from "./Pages/Courses";
import Resources from "./Pages/Resource";
import { OnlineLearning } from "./Pages/OnlineLearning";
import { Navbar } from './Pages/Navbar'
import Home from "./Home";
import AboutImage1 from './images/Aboutus.jpeg'
import Footer from "./Pages/Footer";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Profile from "./Pages/Profile";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute";
import Appoinment from "./Pages/Appoinment";



export default function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About imgLink={AboutImage1}
            bigText="Health Care"
            para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero assumenda nesciunt ut quaerat placeat dolore tenetur quisquam eos pariatur."
            para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero assumenda nesciunt ut quaerat placeat dolore tenetur quisquam eos pariatur."
            btn="Know More" />} />
          <Route path="/Login" element={<Login />} />
          
          <Route path="/user" element={<PrivateRoute />}>
            <Route path="Profile" element={<Profile />} />
            <Route path="Register" element={<Registration />} />
            <Route path="Courses" element={<Courses />} />
            <Route path="Resources" element={<Resources />} />
            <Route path="Appoinment" element={<Appoinment />} />
           
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}
