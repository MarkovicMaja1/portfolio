
import "./App.css";
import Home from "./Components/Home/Home";
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Technologies from "./Components/Technologies/Technologies";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Aboutme from "./Components/Aboutme/Aboutme";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
      <div id="navbar">
          <Navbar />
        </div>
        <div id="home">
          <Home />
        </div>
        <div id="portfolio">
          <About/>
        </div>
        <div id="technologies">
          <Technologies/>
        </div>
        <div id="aboutme">
          <Aboutme/>
        </div>
        <div id="contact">
          <Contact/> 
        </div>
        <div id="about">
          <Footer/>
        </div>
        {/* <div id="about">
          <About />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

