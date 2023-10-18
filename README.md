# Hospital Management System

## Introduction

The Hospital Management System is a web application developed using the MERN stack (MongoDB, Express, React, Node.js) that provides users with a secure platform for managing their healthcare needs. It allows users to book appointments, create profiles, and securely upload documents to help doctors better understand their health issues.

## Features

- User Authentication:
  - JWT-based user authentication for secure login and signup.
- User Dashboard:
  - Users can book appointments.
  - Users can create and update their profiles.
  - Secure document upload feature for sharing health-related documents with doctors.
- Doctor Dashboard (Upcoming Feature):
  - Doctors can access and manage appointment records.
- Database:
  - MongoDB Atlas is used as the database for storing user information and appointments.

## Technologies Used

- Frontend:
  - React.js
  - Redux for state management
  - Axios for API requests
- Backend:
  - Node.js
  - Express.js
  - JSON Web Tokens (JWT) for authentication
- Database:
  - MongoDB Atlas
- Deployment:
  - (Specify where and how the application is hosted, e.g., Heroku, AWS, etc.)

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.

```shell
git clone https://github.com/GawaliAbhishek/Hospital-Management-.git
```

2. Change to the 'Backend' directory and install the server dependencies.

```shell
cd Backend
npm install
```

3. Change to the 'Frontend' directory and install the client dependencies.

```shell
cd Frontend
npm install
```

## Configuration

- Create a `.env` file in the 'Backend' directory to store sensitive information like database connection strings and JWT secrets. An example `.env` file may look like:

```
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```

## Usage

1. Start the server in the 'Backend' directory.

```shell
cd Backend
npm start
```

2. Start the client in the 'Frontend' directory.

```shell
cd Frontend
npm start
```

3. Open your web browser and access the application at `http://localhost:3000`.

## Future Updates

In future updates, we plan to add the following features:

- Doctor Dashboard:
  - Access and manage appointment records.
- Email notifications for appointment confirmations and reminders.
- (Add any additional features you plan to implement)
