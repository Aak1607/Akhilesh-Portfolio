import React from "react";
import "./styles.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 data-aos="fade-right">Experience</h2>
        <div className="exp-box" data-aos="fade-up">
          <h3>Software Developer</h3>
          <p>LTIMindtree | 2020 - Present</p>
          <ul>
            <li>Developed and maintained RESTful APIs using Spring Boot.</li>
            <li>Implemented multi-threaded applications for high-performance processing.</li>
            <li>Worked in Agile teams, applied SOLID principles, and conducted code reviews.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
