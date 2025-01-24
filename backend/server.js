const express = require('express');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');
const axios = require('axios');


require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const eventsRoutes = require('./routes/eventsRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const userRoutes = require('./routes/userRoutes');
const fileRoutes = require('./routes/fileRoutes');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(cors({
  origin: process.env.REACT_APP_FRONTEND_URL || 'http://127.0.0.1:3000', // 'http://127.0.0.1:4001', // Update with your frontend URL
  credentials: true, // Allow cookies and authentication
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json()); // Parse incoming JSON requests

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use((req, res, next) => {
  res.send('Hello from the API!');
});
app.use('/api/files', fileRoutes)
app.use('/api/auth', authRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/mentors', mentorRoutes);
app.use('/api/users', userRoutes);

// Test route
app.get('/api/test', (req, res) => {
  console.log('Received GET request to /api/test');
  res.send('Hello from the API!');
});

// axios.get('http://localhost:4000/api/endpoint')
//   .then(response => console.log(response))
//   .catch(error => console.error('Error fetching data:', error));


app.post('/api/auth/register', (req, res) => {
  res.send({
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "123456",
    "role": "student",
    "profile": {
      "bio": "Learning React",
      "skills": ["JavaScript", "Node.js"],
      "courses": ["React Basics", "Node.js Basics"]
    }
  });
});


// Handle 404 for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found." });
});

// Generic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong." });
});

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    console.log(colors.green('MongoDB connected successfully!'));

    // Start the server after successful connection
    app.listen(port, () => {
      console.log(colors.blue(`Server running on port ${port}`));
    });
  })
  .catch((err) => {
    console.error(colors.red('Failed to connect to MongoDB:', err.message));
    process.exit(1); // Exit the application on MongoDB connection failure
  });
