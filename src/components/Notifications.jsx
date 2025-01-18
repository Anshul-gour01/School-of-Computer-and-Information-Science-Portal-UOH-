import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import "./Notifications.css";
const socket = io("http://localhost:3000"); // Replace with your backend URL

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch initial notifications from the backend
    axios
      .get("http://localhost:3000/api/notifications") // Replace with your backend URL
      .then((res) => {
        console.log("Fetched notifications:", res.data); // Debugging
        setNotifications(res.data);
      })
      .catch((err) => console.error("Error fetching notifications:", err));

    // Listen for real-time notifications via Socket.IO
    socket.on("notification", (data) => {
      console.log("Received notification:", data); // Debugging
      setNotifications((prev) => [data, ...prev]);
    });

    // Cleanup socket connection
    return () => {
      socket.off("notification");
    };
  }, []);

  return (
    // <div>
    //   <h1>Notifications</h1>
    //   <ul>
    //     {notifications.map((notif) => (
    //       <li key={notif._id || notif.createdAt}>{notif.message}</li> // Use a fallback key if _id is not present
    //     ))}
    //   </ul>
    // </div>
    <div className="main_container">
      <br></br>
      <div class="notifications-container">
        <h1>NEWS AND EVENTS</h1>

        <ul>
          {notifications.map((notif) => (
            <li key={notif._id || notif.createdAt}>
              <i className="fas fa-bell"></i> {notif.message}
            </li>
          ))}
        </ul>
      </div>
      <div className="image_container">
        <img
          src="pulic/dean.jpg"
          alt="School Image"
          width="700"
          height="400"
        />
      </div>
    </div>
  );
};

export default Notifications;
