const express = require('express');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');
const axios = require('axios');
//const authRoutes = require('./routes/authRoutes');


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
  origin: (origin, callback) => {
    // Allow requests from specific origins
    const allowedOrigins = ['http://127.0.0.1:3000', 'http://localhost:3000'] // Add your production frontend URL here
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only GET, POST, PUT, DELETE requests
}));

const corsOptions = {
  origin: process.env.REACT_APP_FRONTEND_URL || 'http://127.0.0.1:3000',
  optionsSuccessStatus: 200,
};
app.use('*', cors(corsOptions));


app.use(express.json()); // Parse incoming JSON requests

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes

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
  res.send('Hello from the AI!');
});

// axios.get('http://localhost:4000/api/endpoint')
//   .then(response => console.log(response))
//   .catch(error => console.error('Error fetching data:', error));


app.post('/api/auth/register', (req, res) => {
  res.status(200).json({
    message: 'okay'

  });
});

app.use('/api/auth', authRoutes);
app.use((req, res, next) => {
  res.send('Hello from the API!');
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

//Debugging middleware to the console

app.use((req, res, next) => {
  console.log("Incoming Request:", req.method, req.url);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next();
});


// In your Express backend file
app.use('/api/protected-route', (req, res, next) => {
  if (!req.user) {
    res.redirect('/login');
  } else {
    next();
  }
});

// Example Node.js/Express route
app.get('/api/mentors/dashboard', async (req, res) => {
  try {
    const mentorId = req.query.mentorId; // Assuming you pass mentorId as a query param
    const mentorData = await MentorModel.findById(mentorId); // Replace with your DB query logic
    if (!mentorData) {
      return res.status(404).json({ message: "Mentor not found" });
    }
    res.json(mentorData);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
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
