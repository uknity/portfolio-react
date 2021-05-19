import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";


function App() {
  
  return (
    <Router>
      <div>
        <Header>
          </Header> 
        <Wrapper>
          <Homepage />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
