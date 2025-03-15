import React from "react";

const projects = [
    {
        title: "Project Gladiator - Online Banking System",
        description: "Developed a user-friendly banking application for fund transfers, balance inquiries, and profile updates. Created secure login, admin, and customer registration modules. Worked on UI enhancements and backend bug fixes."
    },
    {
        title: "Travel Booking Application",
        description: "Created RESTful APIs using Spring Boot to handle core functionalities like user registration, travel search, booking management, and payment processing. Defined data models, repositories, and services using Spring Data JPA and Hibernate to manage travel-related entities (flights, hotels, bookings). Collaborated with frontend team using Angular and managed the project with Git and Postman."
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section" data-aos="fade-up">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
