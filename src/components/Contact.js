import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(""); // To store success or error message

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://your-backend-service.onrender.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully! ✅");
                setFormData({ name: "", email: "", message: "" }); // Clear form after submission
            } else {
                setStatus("Error sending message. ❌ Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("Error sending message. ❌ Please check your connection.");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            
            {/* Show Success or Error Message */}
            {status && <p style={{ color: status.includes("✅") ? "green" : "red" }}>{status}</p>}
        </section>
    );
};

export default Contact;
