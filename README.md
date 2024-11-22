# School Management System API

This repository contains the backend API for a School Management System, providing endpoints for CRUD operations for students, teachers, and classes. It is built using Node.js, Express.js, and MongoDB with JWT-based authentication.

## Prerequisites

Before you begin, ensure that you have the following installed:

- Node.js (v14 or higher)
- MongoDB (or MongoDB Atlas account)
- Postman or any other API testing tool
- A JWT authentication token

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/School_API.git
   cd school-management-system
   npm install
   cp .env.example .env
   npm start

2. Ensure you configure the following environment variables in your .env file:
   ```bash
   MONGO_URI=mongodb://localhost:27017/school_management
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

3. API Endpoints
 - Add a new student
 - Method: POST
 - Endpoint: /students
 - Request Body:
   ```bash
    {
   "name": "John Doe",
   "email": "john.doe@example.com",
   "classId": "60b1e8e9f4e0b8b8c93be8d4",
   "profileImage": "image_url"
   }
- Response Body:
  ```bash
  {
  "name": "John Doe",
  "email": "john.doe@example.com",
  "classId": "60b1e8e9f4e0b8b8c93be8d4",
  "profileImageUrl": "image_url",
  "createdAt": "2024-11-21T12:34:56Z",
  "_id": "60b2a1f8f6a1d1b8c93be8f1"
  }
- Get all students:
- Method: GET
- Endpoint: /students?page=1&limit=10
- Response Body:
  ```bash
  [
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "classId": "60b1e8e9f4e0b8b8c93be8d4",
    "profileImageUrl": "image_url",
    "createdAt": "2024-11-21T12:34:56Z",
    "_id": "60b2a1f8f6a1d1b8c93be8f1"
  },
  {
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "classId": "60b1e8e9f4e0b8b8c93be8d4",
    "profileImageUrl": "image_url",
    "createdAt": "2024-11-22T12:34:56Z",
    "_id": "60b2a1f8f6a1d1b8c93be8f2"
  }
  ]

- Get a single student by ID
- Method: GET
- Endpoint: /students/{studentId}
  ```bash
  {
  "name": "John Doe",
  "email": "john.doe@example.com",
  "classId": "60b1e8e9f4e0b8b8c93be8d4",
  "profileImageUrl": "image_url",
  "createdAt": "2024-11-21T12:34:56Z",
  "_id": "60b2a1f8f6a1d1b8c93be8f1"
  }
- Update a student:
- Method: PUT
- Endpoint: /students/{studentId}
- Request Body:
  ```bash
  {
  "name": "John Doe Updated",
  "classId": "60b1e8e9f4e0b8b8c93be8d5"
  }
- Response Body:
  ```bash
  {
  "name": "John Doe Updated",
  "email": "john.doe@example.com",
  "classId": "60b1e8e9f4e0b8b8c93be8d5",
  "profileImageUrl": "image_url",
  "createdAt": "2024-11-21T12:34:56Z",
  "_id": "60b2a1f8f6a1d1b8c93be8f1"
  }
- Soft delete a student
- Method: DELETE
- Endpoint: /students/{studentId}
- Response Body:
 ```bash
 {
   "message": "Student deleted successfully"
 }


