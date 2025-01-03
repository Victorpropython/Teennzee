const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const dotenv = require('dotenv');
dotenv.config();

const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const eventsRoutes = require('./routes/eventsRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/mentors', mentorRoutes);
app.use('/api/users', userRoutes);

if (process.env.SKIP_DB !== 'true') {
  connectDB().catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    // Exit the process if the connection fails and skipping is not allowed
    process.exit(1);
  });
} else {
  console.log('Skipping MongoDB connection...');
}

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
