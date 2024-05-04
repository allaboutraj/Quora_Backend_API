# Quora Backend

## Overview
This repository contains the backend implementation for Quora, a question and answer platform. The backend is built using Node.js, Express.js, and MongoDB, providing a robust foundation for managing users, questions, answers, and interactions within the platform.

## Features
- **User Management:** Handle user registration, login, profile management, and authentication using JWT.
- **Question Management:** CRUD operations for creating, reading, updating, and deleting questions.
- **Answer Management:** Implement functionalities for users to post, edit, and delete answers to questions.
- **Interaction:** Enable users to upvote/downvote answers and follow/unfollow questions.
- **Search Functionality:** Implement search functionality to allow users to search for questions and answers based on keywords.
- **Authorization and Authentication:** Implement role-based access control to ensure secure access to resources.
- **Middleware:** Utilize middleware functions for error handling, logging, and request validation.

## Installation
1. Clone the repository:
https://github.com/allaboutraj/Quora_Backend_API.git

2. Install dependencies:
npm install

3.  Set up environment variables:
- Create a `.env` file in the root directory.
- Define the following environment variables:
  ```
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/quora
  ```

4. Start the server:
npm start

## License
This project is licensed under the [MIT License](LICENSE).
