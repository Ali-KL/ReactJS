// import logo from './logo.svg';
import "./App.css";
import Navbar from "./componants/Navbar";
import Footer from "./componants/Footer";
// import Header from "./componants"
import Works from "./componants/Works";
import Contact from "./componants/Contact";
import Home from "./componants/Home";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="works" element={ <Works/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
