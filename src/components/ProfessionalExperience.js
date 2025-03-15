import React from "react";

const ProfessionalExperience = () => {
    return (
        <section id="experience" className="experience-section" data-aos="fade-up">
            <h2 className="section-title">Professional Experience</h2>

            <div className="experience-wrapper">
                
                {/* Summary Section */}
                <article className="experience-card">
                    <header>
                        <h3>Summary</h3>
                        <p className="name"><strong>Akhilesh Chaurasia</strong></p>
                    </header>
                    <p>
                        Java Developer with 2.5 years of experience in designing, developing, and maintaining 
                        scalable Java-based applications. Proficient in Java, Spring Boot, REST API, Hibernate, 
                        SQL (Oracle), Microservices, and Agile methodologies. 
                    </p>
                    <p>
                        Strong understanding of multi-threading, SOLID principles, and design patterns. 
                        Experienced in unit testing (JUnit), version control (Git), and CI/CD pipelines. 
                        Skilled in troubleshooting, debugging, and optimizing performance for enterprise applications.
                    </p>
                </article>

                {/* Education Section */}
                <article className="experience-card">
                    <header>
                        <h3>Education</h3>
                    </header>
                    <ul className="education-list">
                        <li>
                            <strong>Bachelor of Computer Applications</strong> – IIMT College of Engineering (2020) 
                            <span className="highlight"> 70%</span>
                        </li>
                        <li>
                            <strong>12th Grade</strong> – Uttar Pradesh State Board (2017) 
                            <span className="highlight"> 77%</span>
                        </li>
                        <li>
                            <strong>10th Grade</strong> – Uttar Pradesh State Board (2015) 
                            <span className="highlight"> 88%</span>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    );
};

export default ProfessionalExperience;
