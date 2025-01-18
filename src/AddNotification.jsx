import React, { useState } from "react";
import axios from "axios";
import "./AddNotification.css";
const AddNotification = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/notifications", { message });
      alert("Notification added successfully!");
      setMessage("");
    } catch (error) {
      console.error("Error adding notification:", error);
      alert("Failed to add notification.");
    }
  };

  return (
    // <div>
    //   <h1>Add Notification</h1>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //       placeholder="Enter your notification"
    //       required
    //     />
    //     <button type="submit">Add Notification</button>
    //   </form>
    // </div>
    <div class="notification-container">
      <div class="notification-box">
        <h1 class="notification-title">Add Notification</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            class="notification-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your notification"
            required
          />
          <button type="submit" class="notification-button">
            Add Notification
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotification;
