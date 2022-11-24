import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function Func () {
    return (
      <div className="App">
       {/*} <Router>*/}
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/contact" exact element={<Contact/>} />
          </Routes>
          </BrowserRouter>
          <Footer />
    {/*  </Router> */}
      </div>
    );
  }

export default Func