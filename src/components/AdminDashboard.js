import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("https://your-backend-service.onrender.com/messages")
            .then((res) => res.json())
            .then((data) => setMessages(data))
            .catch((error) => console.error("Error fetching messages", error));
    }, []);
    

    return (
        <div>
            <h2>Admin Dashboard - Messages</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>
                        <p><strong>Name:</strong> {msg.name}</p>
                        <p><strong>Email:</strong> {msg.email}</p>
                        <p><strong>Message:</strong> {msg.message}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
