
import React from "react";
import About from "../components/About/index";
import Projects from "../components/Projects/index";
import Footer from "../components/Footer/index";


import { Parallax, Background } from "react-parallax";



const Homepage = () => {

    return (
      <div>

        {/* <Parallax strength={500}>
          <About />
          <div style={{
            position: "absolute",
            transform: "translate(-50%,-50%)"
          }}>
          <Projects />
          </div>
          </Parallax>  */}
          
        


       <About />
       <Projects />
       <Footer />
       
           </div>
    );
  }


export default Homepage;

