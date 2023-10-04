import React from "react";
import MainPage from "./Pages/MainPage";
import About from "./Pages/About";
import HomeImage1 from './images/Home1.png'
import AboutImage1 from './images/Aboutus.jpeg'

function Home() {
  return (
    <>
      <MainPage
        mediumText="Online Heath Care"
        bigText="Health Care Application"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero assumenda nesciunt ut quaerat placeat dolore tenetur quisquam eos pariatur."
        btn="Search"
        imgLink={HomeImage1}
      />
      
      <About
        imgLink={AboutImage1}
        bigText="Over 1M+ Patients are cured"
        para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero assumenda nesciunt ut quaerat placeat dolore tenetur quisquam eos pariatur."
        para2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero assumenda nesciunt ut quaerat placeat dolore tenetur quisquam eos pariatur."
        btn="Explore More"
      />

    
    </>
  );
}

export default Home;
