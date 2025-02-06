# TeenZee: A MERN-Stack Guidance And Counselling Application For Teens And Younger Youth

Welcome to **TeenZee**, a **Webstack Portfolio Project**! 
  This is a project Built for Teenagers, Back then while growing up faced alot of challenges on which sometimes i wish i was never born.
The pains and suffering 
Not having an elder one who you could relate to personally without Holding back any thing, was not there. Except your parent, which implies that not everything will be said.
So on that note i dont want another generation to pass through same pains as i did,
So Teenzee was born A place one can meet a life coach, express whole heartedly without holding back and its being giving a guidiance and a family on how and what to Do.

Teennzee : Every ones life counts and Greatness is Possible

This project covers frontend user interface, backend server logic, database management, and integration with third-party libraries.

## Table of Contents

1. [Introduction](#introduction)
2. [User Interface](#user-interface)
   - [Home Page](#home-page)
   - [About Us](#full-product-list)
   - [Login / Registration](#cart-page)
   - [User Dashboard](#checkout-page)
   - [Chat Room](#Chat-Room)
4. [Features](#features)
5. [Technologies Used](#technologies-used)
6. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
7. [Project Structure](#project-structure)
8. [Running the Application](#running-the-application)
9. [Testing the APIs](#testing-the-apis)
10. [OpenAPI Specification](#openapi-specification)
    - [Using the `openapi.key` File](#using-the-openapi key)
12. [License](#license)
13. [Creator](#creator)

## Introduction

This project is a demonstration of building an  application using the MERN stack, which consists of MongoDB (database), Express.js (server), React.js (frontend), and Node.js (runtime environment). The application allows users to access our services , register, proceed to meeting a mentor, and the mentor taking charge, thereby modelling the mentee and making sure the mentee achieve its purpose and living a fulfilled life . It includes basic validations for user inputs and  process on the backend.

## Local Deployment

The application is deployed locally . You can access it at the following URL: [TeennZee](https://localhost/300).


> **Note**: The backend server may take a few seconds to wake up if it has been inactive for a while. For your information, it is hosted on the free tier of Render, with 0.1 CPU and 512 MB of memory only, so it may take a bit longer to respond to requests, especially after periods of inactivity.

## User Interface

### Home Page

<p align="center">
    <img src="" alt="TeenZee Homepage" style="border-radius: 10px" width="100%"/>
</p>

### Contact Page

<p align="center">
    <img src="docs/" alt="TeenZee Contact page" style="border-radius: 10px" width="100%"/>
</p>

### Login Page

<p align="center">
    <img src="docs/login page" alt="TeenZee Login Page" style="border-radius: 10px" width="100%"/>
</p>

### Register Page

<p align="center">
    <img src="docs/register" alt="TeenZee Register Page" style="border-radius: 10px" width="100%"/>
</p>

### Forgot Password Page

<p align="center">
    <img src="docs/forgot-password" alt="TeenZee Forgot Password Page" style="border-radius: 10px" width="100%"/>
</p>

### Reset Password Page

<p align="center">
    <img src="docs/reset-passwordg" alt="TeenZee Reset Password Page" style="border-radius: 10px" width="100%"/>
</p>


## Features

- **Product Management:**
    - Motivational Qoutes.
    - View detailed information about our Mentors .
    - Some motivational Videos.

- **Login and Dashboard Process:**
    - Access the Dashboard.
    - Access some courses and view your grading
    - Receive review from mentors.

## Technologies Used

- **Frontend:**
    - React.js
    - Tailwind for styling
    - Axios for API requests
    - `react-router-dom` for routing
    - `react-hook-form` for form validation
    - `react-toastify` for toast notifications
    - Jest and React Testing Library for testing

- **Backend:**
    - Node.js
    - Express.js
    - MongoDB (with Mongoose ODM)
    - Axios for external API requests
    - JsonWebToken for user authentication
    - Bcrypt for password hashing
    - Dotenv for environment variables
    - Cors for cross-origin resource sharing
    - Nodemon for server hot-reloading
    - **Middleware**: JWT for securing API endpoints

- **Development Tools:**
    - Postman (for API testing)
    - Git (version control)
    - npm (package manager)

## Project Structure

The project is organized into two main "stacks": The backend is in the `backend` directory having a logic and the frontend `frontend` all in the `root` directory. Here is an overview of the project structure:

```
fullstack-TeenZee WebApp/

Teennzee/
├── backend/
│   ├── config/
│   │   ├── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── chatController.js
│   │   ├── dashboardController.js
│   │   ├── eventController.js
│   │   ├── mentorController.js
│   │   ├── userController.js
│   ├── middleware/
│   │   ├── Middleware.js
│   ├── models/
│   │   ├── Chat.js
│   │   ├── Events.js
│   │   ├── mentor.js
│   │   ├── mentorStudent.js
│   │   ├── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── chatRoutes.js
│   │   ├── dashboardRoutes.js
│   │   ├── eventsRoutes.js
│   │   ├── fileRoutes.js
│   │   ├── mentorRoutes.js
│   │   ├── userRoutes.js
│   ├── utils/
│   │   ├── chatbot.js
│   │   ├── filehandler.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│
├── frontend/
│   ├── public/
│   │   ├── assets
│   ├── src/
│   │   ├── api/
│   │   │   ├── Api.jsx
│   │   ├── auth/
│   │   │   ├── authService.jsx
│   │   │   ├── authSlice.jsx
│   │   │   ├── env.js
│   │   │   ├── store.jsx
│   │   ├── components/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── chatbot.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── FileUpload.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MentorDashboard.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ResetPassword.jsx
│   │   ├── Layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── MainLayout.jsx
│   │   │   ├── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Jobs.jsx
│   │   ├── utils/
│   │   │   ├── axiosinstance.jsx
│   │   ├── App.js
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── package.json
│   ├── .env
│
├── .env
├── .gitignore
├── README.md
├── package-lock.json
├── package.json

```
## Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (with npm)
- MongoDB (with  remote instance (Mongo Atlass (having a link to the cluster for compass or vscode)))
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Victorpropython/Teennzee.git
   cd Teennzee  # Fix the path if necessary
   ```

2. Install project dependencies:
   ```bash
   # Install server (backend) dependencies
   cd backend
   npm install

   # Install client (frontend) dependencies
   cd ..
   npm install
   ```
   
3. Set up the backend:

   - Create a `.env` file in the `backend/` directory and add the following environment variable (replace the URI with your MongoDB connection string):
     ```
     MONGO_URI=mongodb://****/****
     JWT_SECRET=your_secret_key
     ```
     
     For your information, I am using MongoDB Atlas for this project. You can create a free account and get your connection  from there if you want to deploy the application to the cloud.
 
    - Ensure that your MongoDB server is running. If you're using Mac, you can start the MongoDB server with the following command:
     ```bash
     brew services start mongodb-community
     ``` 

   - Seed the database with sample data:
     ```bash
     cd backend/seed
     node productSeeds.js dev
     ```
   - You can run both backend and frontend concurrently by installing conconcurrent
     ```bash
     npm install concurrent
     npm run dev
     ```
   - Run the backend server: (first `cd` into the backend directory)
     ```bash
     cd ..
     npm run dev
     ``` 
     
4. Set up the frontend:
   - First, `cd` into the `root` directory if you are not already there:
     ```bash
     cd ..
     ```
     Or
        ```bash
        cd frontend
        ```
   - Start the frontend development server:
     ```bash
     npm start
     ```
   - **Note:** The frontend server will run on `http://localhost:3000` by default. And the backend will run on `http://localhost:4000`

## Running the Application

- Open your browser and navigate to `http://localhost:3000` to view the application.

## Testing the APIs

- Simply open your browser and navigate to `http://localhost:5000/api/home` to view the Homepage.



## OpenAPI Key

### Using the `openapi key ` File

1. **How to generate OpenAi Key**
- Open [ChatGPT](https://chatgpt.com/).
- goto developer option `openapi key` file or paste its content on the .env file.
- This is for the chatbot interactions.


## Contributing

Contributions to this project are welcome! Here are some ways you can contribute:

- Report bugs and request features by opening issues.
- Implement new features or enhancements and submit pull requests.
- Improve documentation and README files.

## 📜 License
- **This project is licensed under the MIT License. See the LICENSE file for details.**

## Creator

- **Victor Chibuike** - [victorpropython](https://github.com/Victorpropython)
- **Email:** [victorchibuzor3109@gmail.com](mailto:victorchibuzor3109@gmail.com).

---



Thank you for exploring **TeenZee - A project for Teens Guidance and counselling**! If you have any questions or feedback, feel free to reach out or open an issue.

**Happy programming! 🚀**