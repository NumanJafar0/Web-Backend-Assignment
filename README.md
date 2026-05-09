# Web-Backend-Assignment

**Name:** Numan Jafar
**Roll Number:** 23F-0645  
**Class:** BS(CS) 6E  
**Course:** CS4032 - Web Programming

## Project Overview
This repository contains the backend implementation for Assignment 4, focusing on RESTful API design, database management, and relational data modeling. The project is divided into two distinct, fully modularized Node.js applications:

1. **Task 1: Student Management System API** A complete CRUD API for managing university student records, featuring custom Mongoose schema validations, regex-based searching, pagination, and soft-delete functionality.
   
2. **Task 2: Blog Application API with Relationships** A relational database API for a blogging platform. This task demonstrates the use of MongoDB `ObjectId` references, Mongoose virtuals for `.populate()`, `bcrypt` password hashing, and cascade deletion across Users, Posts, and Comments.

## Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Security:** bcrypt (Password Hashing)
* **Environment Management:** dotenv

## Folder Structure
As per the assignment requirements, each task is separated into its own directory with an independent `package.json` and modular MVC (Model-View-Controller) architecture.

```text
Assignment_4/
├── Task1_StudentManagement/
│   ├── config/          # Database connection
│   ├── controllers/     # Business logic for students
│   ├── models/          # Student schema
│   ├── routes/          # API endpoint definitions
│   ├── .env             # Environment variables
│   ├── package.json
│   └── server.js        # Entry point (Port 5000)
│
└── Task2_BlogAPI/
    ├── config/          # Database connection
    ├── controllers/     # Business logic (users, posts, comments)
    ├── models/          # Relational schemas & virtuals
    ├── routes/          # API endpoint definitions
    ├── .env             # Environment variables
    ├── package.json
    └── server.js        # Entry point (Port 5001)

```

## How to Run Locally

### Prerequisites

* Node.js installed on your machine.
* MongoDB installed locally (or a MongoDB Atlas URI).

### Setup Instructions

You will need to run the servers for Task 1 and Task 2 independently.

**For Task 1 (Student API):**

1. Navigate to the folder: `cd Task1_StudentManagement`
2. Install dependencies: `npm install`
3. Ensure your `.env` file is configured:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/university_db

```


4. Start the server: `node server.js`

**For Task 2 (Blog API):**

1. Navigate to the folder: `cd Task2_BlogAPI`
2. Install dependencies: `npm install`
3. Ensure your `.env` file is configured:
```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/blog_db

```


4. Start the server: `node server.js`

## API Endpoints Summary

### Task 1: Students (`http://localhost:5000/api/students`)

* `POST /` - Add a new student
* `GET /` - Retrieve all students (Supports `?department=` & pagination)
* `GET /search?name=` - Search students by name
* `GET /:id` - Retrieve a single student
* `PUT /:id` - Update all fields
* `PATCH /:id` - Update partial fields
* `PATCH /:id/deactivate` - Soft delete a student
* `DELETE /:id` - Permanently delete a student

### Task 2: Blog Platform (`http://localhost:5001/api`)

* **Users:**
* `POST /users/register` - Register a new user (hashes password)
* `GET /users` - Retrieve all users (excludes passwords)
* `GET /users/:id` - Get user by ID (populates authored posts)


* **Posts:**
* `POST /posts` - Create a new post
* `GET /posts` - Retrieve all posts (populates author)
* `GET /posts/tag/:tag` - Retrieve posts by tag
* `GET /posts/:id` - Retrieve single post (populates author and nested comments)
* `PUT /posts/:id` - Update a post
* `DELETE /posts/:id` - Delete post (cascade deletes all associated comments)

* **Comments:**
* `POST /posts/:postId/comments` - Add a comment to a post
* `GET /posts/:postId/comments` - Retrieve all comments for a post
* `DELETE /comments/:id` - Delete a comment

## Testing

All API endpoints have been thoroughly tested using Thunder Client/Postman to ensure proper HTTP status codes (`200`, `201`, `400`, `404`, `500`), error handling, and schema validation. A comprehensive PDF report with screenshots of requests and responses is included in the submission folder.

```

```
