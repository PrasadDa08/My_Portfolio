import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Projects from "./Components/ProjectComponents/Projects";
import {ContactUs} from "./Components/Contact";
import CircularBar from "./Components/CircularBar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <CircularBar />
      {/* <Resume /> */}
      <Projects />
      <ContactUs />
    </>
  );
}

export default App;
