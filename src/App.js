import React from "react";
import ContactMe from "./Components/Home/ContactMe";
import Navbar from "./Components/Home/Navbar";
import MySkills from "./Components/Home/MySkills";
import Footer from "./Components/Home/Footer";
import Projects from "./Components/Home/Projects";
import Home from "./Components/Home/HomeScreen/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Projects />
      <MySkills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
