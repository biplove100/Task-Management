# Task Management App

## Overview
The **Task Management App** is a simple application built with **Node.js**, **Express**, and **MongoDB** to manage tasks efficiently. This application supports basic CRUD (Create, Read, Update, Delete) operations with an intuitive interface powered by **EJS** templates. Users can create tasks, view all tasks, edit task details, mark tasks as done, and delete tasks.

---

## Features
- **Create New Tasks**: Add tasks with a title, description, and category.
- **View All Tasks**: See a list of all tasks, categorized by their status.
- **Edit Tasks**: Modify task details.
- **Mark as Done**: Mark tasks as completed.
- **Delete Tasks**: Remove tasks from the list.
- **Error Handling**: Handles invalid routes and operations gracefully with error messages.

---

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Frontend**: EJS (Embedded JavaScript)
- **Utilities**: `ejs-mate` for layout templates, `method-override` for HTTP verbs, `Joi` for validation

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally or a cloud MongoDB instance
- Basic knowledge of terminal/command line

### Steps
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/task-management-app.git
    cd task-management-app
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up the Database**:
   Ensure MongoDB is running on your machine or modify the connection string in `app.js`:
   ```javascript
   const MONGO_URL = "mongodb://127.0.0.1:27017/taskmanagement";
   ```

4. **Initialize the Database**:
    (Optional) Add initial data to your database using the `init/index.js` script:
    ```bash
    node init/index.js
    ```

5. **Run the Application**:
    ```bash
    npm start
    ```

6. **Access the App**:
   Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

---

## File Structure
```
task-management-app/
├── models/
│   └── task.js          # Mongoose schema for Task
├── public/
│   └── styles.css       # Static assets (CSS, images, etc.)
├── views/
│   ├── layouts/         # EJS layouts for consistent UI
│   ├── tasks/           # EJS templates for task operations
│   └── error.ejs        # Error page
├── utils/
│   ├── ExpressError.js  # Custom error class
│   └── wrapAsync.js     # Async error wrapper
├── init/
│   └── index.js         # Script to initialize sample data
├── app.js               # Main application logic
└── package.json         # Project metadata and dependencies
```

---

## Usage Instructions
### Add a New Task
1. Navigate to `/tasks/new`.
2. Fill in the form fields:
   - **Title**: Enter a descriptive title.
   - **Description**: Add relevant details about the task.
   - **Category**: Choose from predefined categories:
     - Physical-Health
     - Work/Financial-Goals
     - Intellectual-Knowledge
3. Submit the form to create the task.

### View All Tasks
1. Go to `/tasks`.
2. Browse the list of tasks with details displayed.

### Edit a Task
1. Click the "Edit" button next to a task.
2. Update the form fields and submit.

### Mark a Task as Done
1. Click the "Mark as Done" button next to a task.
2. The task will now be categorized as completed.

### Delete a Task
1. Click the "Delete" button next to a task.
2. The task will be removed from the list.

---

## Error Handling
- **404 Errors**: Displayed when a route or task is not found.
- **Validation Errors**: Ensures form submissions meet requirements.
- **Custom Errors**: Handled using the `ExpressError` class.

---

## Future Enhancements
- Add user authentication for task management.
- Implement sorting and filtering for tasks.
- Introduce a deadline feature for tasks.
- Deploy the app to a cloud platform like Heroku or Vercel.

---

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute this software.

---

- **GitHub**: [your-username](https://github.com/your-username)

--- 

Enjoy managing your tasks! 🚀
