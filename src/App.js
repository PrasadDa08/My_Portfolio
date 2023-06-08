import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/resume" element= {<Resume/>}/>
        <Route path="/projects" element= {<Projects/>}/>
        <Route path="/contact" element= {<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
