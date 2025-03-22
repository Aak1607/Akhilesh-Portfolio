import React, { useState } from "react";
import "../assets/styles.css";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    const renderMenuIcon = isMobile ? <FaTimes /> : <FaBars />;

    return (
        <>
            {/* Top Navigation Bar */}
            <nav className="top-navbar">
                <div className="menu-icon" onClick={() => setIsMobile(!isMobile)}>
                    {renderMenuIcon}
                </div>
                <ul className={`nav-links ${isMobile ? "nav-links-mobile" : ""}`} onClick={() => setIsMobile(false)}>
                <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Professional Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#certifications">Certifications & Awards</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <header id="home" className="hero-section">
                <div className="container">
                    <div className="image-container">
                        <img src={`${process.env.PUBLIC_URL}/DP.jpg`} alt="Profile" />
                    </div>
                    <div className="text-container">
                        <h1>Hi, I'm Akhilesh Chaurasia</h1>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/akhilesh-chaurasia-05474a170" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="social-icon" />
                            </a>
                            <a href="https://github.com/Aak1607" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="social-icon" />
                            </a>
                            <a href="https://aak1607.github.io/Akhilesh-Portfolio/" target="_blank" rel="noopener noreferrer">
                                <FaGlobe className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
