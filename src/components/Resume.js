import React from "react";

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <h2>My Resume</h2>
            <p>Click the button below to download my resume.</p>
            <a href="https://drive.google.com/file/d/1zmtFZA39SI2YWv6b2DUmCCYxnAXg9YSf/view" download="https://drive.google.com/file/d/1zmtFZA39SI2YWv6b2DUmCCYxnAXg9YSf/view" className="btn btn-primary">
                Download Resume
            </a>
        </section>
    );
};

export default Resume;
