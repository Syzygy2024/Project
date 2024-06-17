
# Health Monitoring Web Application

## Project Scope Definition
This project aims to create a web application for monitoring blood pressure, sugar levels, and other health conditions. The application allows users to register, log in, and input their health data for tracking and analysis.

## Features and Functionalities
- User registration and authentication
- Input and track blood pressure and sugar levels
- View historical health data
- Responsive design for optimal viewing on various devices
- Accessible interface for users with disabilities

## Technology Stack
- **Front-end**: HTML5, CSS3, JavaScript
- **Back-end**: Node.js, Express.js
- **Database**: MongoDB
- **Version Control**: Git, GitHub

## Project Structure
```
health-monitoring-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── controllers/
│   │   └── userController.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── scripts.js
│   └── index.html
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Step 1: Clone the Repository
```sh
git clone <repository-url>
cd health-monitoring-app
```

### Step 2: Set Up the Backend
Navigate to the backend directory and install the dependencies:
```sh
cd backend
npm install
```

Create a `.env` file in the backend directory:
```plaintext
PORT=5000
MONGO_URI=mongodb://localhost:27017/health_monitoring_db
```

### Step 3: Start the Backend Server
```sh
npm start
```
You should see `Server running on port 5000` and `MongoDB connected: localhost`.

### Step 4: Open the Frontend in a Browser
Open the `frontend/index.html` file in your browser to access the Health Monitoring App.

## Usage

### User Registration
1. Open the registration form in the browser.
2. Fill in the name, email, and password fields.
3. Click the "Register" button.

### Input Health Data
- After registering and logging in, users can input their blood pressure and sugar levels.
- The data will be saved and displayed in a historical view.

## Version Control
- Use Git for version control.
- Host the repository on GitHub.
- Follow Git best practices, including meaningful commit messages and branching strategies.

## Coding Standards
- Follow HTML, CSS, JavaScript, and Node.js best practices and coding conventions.
- Use meaningful and descriptive variable, function, and file names.
- Ensure consistent indentation and formatting throughout the codebase.

## Responsive Design
- Develop a responsive layout to ensure optimal viewing experience across various devices and screen sizes.

## Accessibility
- Implement accessibility best practices to ensure the website is usable by individuals with disabilities.
- Use semantic HTML elements and attributes appropriately.

## Security
- Implement user authentication and authorization mechanisms securely.
- Protect your routes and ensure data is transmitted securely.

## License
This project is licensed under the MIT License.

## Contact
For any questions or support, please contact Zotel Mabiria at mabiriazotel98@gmail.com.
