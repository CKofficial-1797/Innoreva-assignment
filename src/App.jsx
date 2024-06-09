// 2.	Develop an animated web-based app for a product of your choice.

// import './App.css'
// import "./scroll.js"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./Components/Navbar/Navbar"
import Carosuel from "./Components/Carosuel"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer/Footer.jsx"
import Loading from "./Components/Loading"
import React, { useState, useEffect } from 'react';
import Text from "./Components/Text/Text.jsx"
// import SignIn from "./Components/SignIn/SignIn"
function App() {
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading  />
      ) : (
        <>
        
       <Navbar/>
       <Text/>
       
       {/* <SignIn/> */}
       
       <Carosuel/>
       <Cards/>
      
     <Footer/>
     </>
        
        // Your application content goes here

      )}
    </div>
  );
  // return (

  //   <>
  //   


  //   </>
  
}

export default App
