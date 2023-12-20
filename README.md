
# URL Shortener App 

This repository contains the backend and frontend code for a URL shortener application. 
The backend provides functionalities for user authentication, URL shortening, and redirection.

## Backend

### Initialization
To get started, run the following command to install dependencies:
 - `npm install`
 
### Routes

#### User Routes
- `POST /user/register`: Register a new user
- `POST /user/login`: Login for existing users (Generates authentication token using bcrypt for password hashing)

#### URL Routes
- `POST /url/shorten`: Shorten a full-length URL
- `GET /url/:shortUrl`: Access the shortened URL to verify functionality

### Tech Stack
- Node.js
- MongoDB
- Express.js

## Frontend

### Functionality
The frontend provides the following functionalities:
- User login
- User signup
- Homepage for URL shortening

### Tech Stack
- HTML
- CSS
- JavaScript

## Usage
1. Start the backend server using `node index.js`.
2. Implement the frontend to interact with the backend API endpoints.

Feel free to customize and build upon this project to suit your requirements.
