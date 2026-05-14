# Complete Backend README.md

# Blog App Backend

A complete backend server for a MERN Stack Blog Application that manages authentication, authorization, article management, comments, file uploads, and role-based access control.

The backend is responsible for:

* Handling API requests from frontend
* Managing database operations
* Authenticating users using JWT
* Authorizing users based on roles
* Uploading images using Cloudinary
* Securing private routes
* Performing CRUD operations on articles
* Managing users and comments

This backend follows REST API architecture and uses MongoDB as the database.

Backend server for the MERN Blog Application built using Express.js, MongoDB, JWT Authentication, and Cloudinary.

---

# Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Multer
* Cloudinary
* Cookie Parser
* CORS

---

# Installation and Project Setup

## 1. Navigate to backend folder

```bash
cd backend
```

## 2. Install dependencies

```bash
npm init -y
```

## 3. Create .env file

Create a `.env` file inside backend folder.

Example:

```env
PORT=5000
DB_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# Run Backend Server

## Development mode

```bash
npm run dev
```

## Production mode

```bash
npm start
```

---

# Detailed Backend Folder Structure

```bash
backend/
│
├── APIs/                         # Contains all API route handlers
│   ├── AdminAPI.js               # Admin related APIs
│   ├── AuthorAPI.js              # Author related APIs
│   ├── CommonAPI.js              # Common/shared APIs
│   └── UserAPI.js                # User related APIs
│
├── config/                       # Configuration files
│   ├── cloudinary.js             # Cloudinary configuration
│   ├── cloudinaryUpload.js       # Upload helper functions
│   └── multer.js                 # Multer upload middleware
│
├── middlewares/                  # Custom middleware functions
│   └── VerifyToken.js            # JWT verification middleware
│
├── models/                       # MongoDB models
│   ├── ArticleModel.js           # Article schema
│   └── UserModel.js              # User schema
│
├── node_modules/                 # Installed packages
│
├── server.js                     # Main server entry point
├── package.json                  # Project metadata and dependencies
├── package-lock.json             # Dependency lock file
└── .env                          # Environment variables
```

---

# Detailed Important Files Explanation

## server.js

This is the heart of the backend application.

It performs all backend initialization tasks.

Main responsibilities:

1. Imports required packages
2. Creates Express application
3. Connects MongoDB database
4. Enables middleware
5. Configures CORS
6. Parses incoming JSON data
7. Registers API routes
8. Handles errors globally
9. Starts the server on specified PORT

Example flow:

```bash
Frontend Request
      ↓
Express Server
      ↓
Middleware Execution
      ↓
API Route Handler
      ↓
MongoDB Operation
      ↓
Response Sent Back
```

Important middleware configured here:

```js
app.use(express.json())
app.use(cors())
app.use(cookieParser())
```

API route registration example:

```js
app.use('/user-api', userApp)
app.use('/author-api', authorApp)
app.use('/admin-api', adminApp)
```

Main entry point of the backend.

Responsibilities:

* Creates Express server
* Connects MongoDB database
* Enables CORS
* Adds middleware
* Registers API routes
* Handles invalid routes
* Global error handling

Main route mappings:

```js
/user-api
/author-api
/admin-api
/auth
```

---

## models/UserModel.js

Defines schema for users.

Stores:

* username
* email
* password
* role
* profile image
* status

Purpose:

* User authentication
* Role-based authorization
* User management

---

## models/ArticleModel.js

Defines schema for blog articles.

Stores:

* title
* content
* category
* author details
* article image
* comments
* status

Purpose:

* Article creation
* Article updates
* Fetching blog posts
* Managing comments

---

## middlewares/VerifyToken.js

JWT verification middleware.

Responsibilities:

* Verifies JWT token
* Protects private routes
* Authenticates users before API access

Used in:

* Author routes
* Admin routes
* Protected user actions

---

## config/cloudinary.js

Configures Cloudinary connection.

Purpose:

* Image storage
* Uploading article images
* Uploading profile images

---

## config/multer.js

Handles multipart/form-data.

Purpose:

* File upload handling
* Image upload validation

---

# Detailed API Modules

## APIs/UserAPI.js

Handles all operations related to normal users.

Main APIs:

### User Registration

```http
POST /user-api/user
```

Purpose:

* Registers new users
* Stores user data in database
* Hashes password securely

---

### User Login

```http
POST /user-api/login
```

Purpose:

* Validates email and password
* Generates JWT token
* Sends authentication response

---

### Get Articles

```http
GET /user-api/articles
```

Purpose:

* Fetches all published articles

---

### Add Comment

```http
POST /user-api/comment/:articleId
```

Purpose:

* Adds comment to specific article

---

Technologies used:

* JWT
* bcryptjs
* MongoDB queries
* Express routing

Handles user-related operations.

Important APIs:

* User registration
* User login
* Get articles
* Add comments

---

## APIs/AuthorAPI.js

Handles author functionality.

Important APIs:

* Create article
* Edit article
* Delete article
* View author articles

---

## APIs/AdminAPI.js

Handles admin operations.

Important APIs:

* Manage users
* Manage articles
* Block/unblock accounts

---

## APIs/CommonAPI.js

Contains common authentication-related APIs.

Purpose:

* Shared authentication routes
* General utilities

---

# Middleware Used

| Middleware     | Purpose                                |
| -------------- | -------------------------------------- |
| express.json() | Parses JSON data                       |
| cookie-parser  | Reads cookies                          |
| cors           | Enables frontend-backend communication |
| multer         | Handles file uploads                   |

---

# Backend Features

* JWT Authentication
* Role-based Access
* Protected Routes
* CRUD Operations
* File Uploads
* Cloudinary Integration
* Error Handling Middleware
* MongoDB Integration

---

# Common Backend Commands

## Install packages

```bash
npm install
```

## Start development server

```bash
npm run dev
```

## Start production server

```bash
npm start
```
Add this section before the `# Author` section in your README.

---

# Complete Deployment Guide

# Backend Deployment on Render

## Step 1: Push Backend Code to GitHub

Initialize git and push backend project:

```bash
git init
git add .
git commit -m "backend deployment"
git branch -M main
git remote add origin your_github_repo_link
git push -u origin main
```

---

## Step 2: Create Render Account

Visit:

```bash
https://render.com
```

Login using:

* GitHub
* Google
* Email

---

## Step 3: Create New Web Service

Inside Render Dashboard:

```bash
New +
   ↓
Web Service
```

Select your backend repository.

---

## Step 4: Configure Backend Deployment

Fill deployment details:

| Field          | Value        |
| -------------- | ------------ |
| Name           | blog-backend |
| Root Directory | backend      |
| Runtime        | Node         |
| Build Command  | npm install  |
| Start Command  | npm start    |

---

## Step 5: Add Environment Variables

Inside Render → Environment Variables:

```env
PORT=5000
DB_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Step 6: Deploy Backend

Click:

```bash
Create Web Service
```

Render generates backend URL.

Example:

```bash
https://blog-backend.onrender.com
```



# MongoDB Atlas Setup

## Step 1: Create MongoDB Atlas Account

Visit:

```bash
https://www.mongodb.com/atlas
```

---

## Step 2: Create Cluster

```bash
Create Cluster
      ↓
Choose Free Tier
      ↓
Create Database
```

---

## Step 3: Create Database User

Add:

* Username
* Password

---

## Step 4: Configure Network Access

Add:

```bash
0.0.0.0/0
```

Purpose:

* Allows database access from anywhere

---

## Step 5: Get MongoDB Connection String

Example:

```bash
mongodb+srv://username:password@cluster.mongodb.net/blogdb
```

Use inside:

```env
DB_URL=
```

---

# Production Deployment Flow

```bash
React Frontend (Vercel)
            ↓
Axios API Requests
            ↓
Express Backend (Render)
            ↓
MongoDB Atlas Database
            ↓
Response Returned
            ↓
Frontend UI Updated
```

---

# Important Deployment Notes

## Backend Notes

* Never upload `.env` file to GitHub
* Always use environment variables
* Enable CORS properly
* Use MongoDB Atlas for production database



# Common Deployment Errors

| Error                     | Solution                      |
| ------------------------- | ----------------------------- |
| CORS Error                | Enable cors middleware        |
| API not working           | Verify backend URL            |
| MongoDB connection failed | Check DB_URL                  |
| Render build failed       | Install dependencies properly |
| Blank frontend screen     | Check VITE_API_URL            |
| Cloudinary upload failed  | Verify Cloudinary keys        |

---
