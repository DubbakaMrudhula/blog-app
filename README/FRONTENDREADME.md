
---

# Complete Frontend README.md

# Blog App Frontend

Frontend application for the MERN Stack Blog Application developed using React and Vite.

This frontend provides:

* User authentication UI
* Article management interface
* Protected routing
* Admin dashboard
* Author dashboard
* User dashboard
* Responsive blog viewing experience
* API integration with backend

The frontend communicates with backend APIs using Axios and manages global state using Zustand.

Frontend of the MERN Blog Application built using React, Vite, Tailwind CSS, Zustand, and React Router.

---

# Tech Stack

* React.js
* Vite
* Tailwind CSS
* React Router
* Axios
* Zustand
* React Hook Form
* React Hot Toast

---

# Project Setup

## 1. Navigate to frontend folder

```bash
cd frontend
```

## 2. Install dependencies

```bash
npm install
```

## 3. Create .env file

Example:

```env
VITE_API_URL=http://localhost:5000
```

---

# Run Frontend

## Development mode

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

---

# Detailed Frontend Folder Structure

```bash
frontend/
│
├── public/                         # Static files
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   │
│   ├── assets/                     # Images and static assets
│   ├── components/                 # Reusable React components
│   ├── store/                      # Zustand global stores
│   ├── styles/                     # CSS and styling files
│   ├── utils/                      # Utility/helper functions
│   │
│   ├── App.jsx                     # Main routing component
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles
│
├── node_modules/                   # Installed dependencies
├── package.json                    # Dependency list
├── vite.config.js                  # Vite configuration
└── .env                            # Environment variables
```

---

# Important Files Explanation

## src/main.jsx

Application entry point.

Responsibilities:

* Renders React app
* Connects React with DOM
* Loads App component

---

## src/App.jsx

Main routing component of the frontend.

Responsibilities:

* Defines all routes
* Controls navigation flow
* Loads components dynamically
* Protects secure routes
* Manages layout rendering

Example routing:

```jsx
<Route path='/' element={<Home />} />
<Route path='/login' element={<Login />} />
<Route path='/register' element={<Register />} />
```

Protected routes are used for:

* Admin pages
* Author dashboard
* User profile
* Article editing pages

Main routing component.

Responsibilities:

* Defines application routes
* Connects all pages/components
* Controls navigation flow

---

## src/store/authStore.js

Global authentication state management using Zustand.

Stores:

* Logged-in user data
* JWT token
* Authentication status

Purpose:

* Global auth handling
* Session persistence
* Easy access to user information

---

## src/utils/url.js

Contains backend base URL.

Purpose:

* Centralized API endpoint management
* Easy environment switching

---

## src/components/ProtectedRoute.jsx

Protects private routes.

Responsibilities:

* Checks authentication
* Restricts unauthorized access
* Redirects users when not logged in

---

# Important Components

## Header.jsx

Navigation bar component.

Contains:

* Navigation links
* Login/Register buttons
* User profile access

---

## Home.jsx

Landing page of the application.

Displays:

* Blog articles
* Featured content
* Latest posts

---

## Login.jsx & Register.jsx

Authentication components.

Features:

* User login
* User registration
* Form validation
* API integration

---

## WriteArticles.jsx

Used by authors to create articles.

Features:

* Create blog posts
* Upload article images
* Submit article data to backend

---

## EditArticle.jsx

Used to update existing blog posts.

---

## ArticleByID.jsx

Displays complete article details.

Features:

* Article content
* Comments
* Author information

---

## AdminProfile.jsx

Admin dashboard component.

Features:

* Manage users
* Manage articles
* Administrative controls

---

## AuthorProfile.jsx

Author dashboard.

Features:

* View own articles
* Edit/Delete articles
* Manage content

---

## UserProfile.jsx

User dashboard component.

Displays:

* User details
* User activity
* Personalized information

---

# Detailed Frontend Features

## Authentication System

* Login functionality
* Registration functionality
* JWT token storage
* Persistent sessions

---

## Protected Routing

Only authenticated users can access:

* Dashboard pages
* Article creation pages
* Edit pages
* Admin controls

---

## Role-Based UI

Different UI is shown based on role:

| Role   | Access                     |
| ------ | -------------------------- |
| User   | View articles, comment     |
| Author | Create and manage articles |
| Admin  | Full system control        |

---

## API Integration

Axios is used for:

* Login requests
* Fetching articles
* Posting comments
* Creating articles
* Updating data

---

## Zustand State Management

Used for:

* Authentication state
* User information
* Global data sharing

---

## React Hook Form

Provides:

* Form validation
* Cleaner form handling
* Better performance

---

## Responsive UI

Application supports:

* Mobile devices
* Tablets
* Desktop screens

---

## Toast Notifications

Used to display:

* Success messages

* Error messages

* Login alerts

* Validation feedback

* Authentication System

* Protected Routes

* Role-based UI

* CRUD Operations

* State Management using Zustand

* Form Handling using React Hook Form

* Responsive Design

* API Integration with Axios

* Toast Notifications

---

# Frontend Routing Flow

```bash
App.jsx
   ↓
RootLayout.jsx
   ↓
Pages/Components
   ↓
Protected Routes
```

---

# Common Frontend Commands

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

## Create production build

```bash
npm run build
```

## Preview build

```bash
npm run preview
```

---

# Full Project Flow

```bash
Frontend (React)
        ↓
Axios API Requests
        ↓
Backend (Express APIs)
        ↓
MongoDB Database
        ↓
Response Sent Back
        ↓
Frontend UI Updates
```

---

# Environment Variables Summary

## Backend

```env
PORT=
DB_URL=
SECRET_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Frontend

```env
VITE_API_URL=
```

---

# Deployment Suggestions

## Frontend Deployment

* Vercel
* Netlify

## Backend Deployment

* Render


## Database

* MongoDB Atlas

---

# Author

Developed as a MERN Stack Blog Application using React, Node.js, Express.js, and MongoDB.


---

# Frontend Deployment on Vercel

## Step 1: Push Frontend Code to GitHub

```bash
git add .
git commit -m "frontend deployment"
git push
```

---

## Step 2: Create Vercel Account

Visit:

```bash
https://vercel.com
```

Login using GitHub.

---

## Step 3: Import Frontend Repository

Inside Vercel:

```bash
Add New Project
       ↓
Import Git Repository
```

Select frontend repository.

---

## Step 4: Configure Frontend Deployment

| Field            | Value         |
| ---------------- | ------------- |
| Framework Preset | Vite          |
| Root Directory   | frontend      |
| Build Command    | npm run build |
| Output Directory | dist          |

---

## Step 5: Add Environment Variables

Add frontend environment variable:

```env
VITE_API_URL=https://blog-backend.onrender.com
```

Purpose:

* Connects frontend with deployed backend APIs

---

## Step 6: Deploy Frontend

Click:

```bash
Deploy
```

Vercel generates frontend URL.

Example:

```bash
https://blog-app.vercel.app
```

---
---

## Frontend Notes

* Update `VITE_API_URL` after backend deployment
* Always build project before deployment
* Verify backend API URL before production

---