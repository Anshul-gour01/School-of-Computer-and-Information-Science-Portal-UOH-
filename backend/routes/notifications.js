import express from 'express';
import Notification from '../models/Notification.js'; // Import the Mongoose model

const router = express.Router(); // Declare only once

// GET endpoint to fetch all notifications
router.get('/', async (req, res) => {
  try {
    // Fetch all notifications sorted by creation date
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// POST endpoint to add a new notification
router.post('/', async (req, res) => {
  const { message } = req.body;

  // Validate request
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Save the notification to the database
    const newNotification = new Notification({ message });
    await newNotification.save();

    // Return the saved notification in the response
    res.status(201).json(newNotification);
  } catch (error) {
    console.error('Error saving notification:', error);
    res.status(500).json({ error: 'Failed to save notification' });
  }
});

export { router }; // Export the router
