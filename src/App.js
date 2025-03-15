import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications"; 
import Resume from "./components/Resume";  
import Contact from "./components/Contact";
import "./assets/styles.css";  

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <div>
            <Header />
            <Skills />
            <ProfessionalExperience />
            <Projects />
            <Certifications />
            <Resume /> 
            <Contact />
        </div>
    );
}

export default App;
