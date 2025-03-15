import React from "react";

const skills = [
    "Java 8+", "Multi-threading", "REST API", "OOP",
    "Spring Boot", "Spring MVC", "Hibernate", "Microservices",
    "MySQL", "Oracle", "JUnit", "Mockito",
    "Git", "GitHub", "Agile (Scrum)", "CI/CD"
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section" data-aos="fade-up">
            <h2>Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-box">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
