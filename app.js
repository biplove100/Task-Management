//EXPRESS
const express = require("express");
const app = express();
//MONGOOSE
const mongoose = require("mongoose");
//Importing the Task Model
const Task = require("./models/task.js");
const path = require("path");
//Requiring and using the ejs-mate for templating 
const ejsMate = require('ejs-mate');
const wrapAsync = require('./utils/wrapAsync');
const methodOverride = require('method-override');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "/public")));

//Using URLENCODED so we can parse form data
app.use(express.urlencoded({ extended: true }));
//METHOD-OVERRIDE
app.use(methodOverride('_method'));
//Require ExpressError.js 
const ExpressError= require("./utils/ExpressError.js");

//DATABASE CONNECTION SETUP with MONGOOSE
const MONGO_URL = "mongodb://127.0.0.1:27017/taskmanagement";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => console.log("Connected to database."))
    .catch(err => console.log(err));

//Start the server
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});

//Routes

app.get('/', (req, res) => {
    res.send("Hi! I am Task-Management");
});

// INDEX ROUTE - Get all tasks
app.get("/tasks", wrapAsync(async (req, res) => {
    const allTasks = await Task.find({});
    res.render("./tasks/index.ejs", { allTasks });
}));

// NEW ROUTE - Form to create a task
app.get("/tasks/new", (req, res) => {
    res.render("tasks/new.ejs");
});

// CREATE ROUTE - Add new task
app.post('/tasks', wrapAsync(async (req, res) => {
    const { title, description, category } = req.body;
    const newTask = new Task({ title, description, category });
    if(!newTask){
        throw new ExpressError(400, "Send valid data for listing");
    }
    await newTask.save();
    res.redirect('/tasks');
}));

// EDIT ROUTE - Show edit form
app.get('/tasks/:id/edit', wrapAsync(async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.render("tasks/edit.ejs", { task });
}));

// UPDATE ROUTE - Update task
app.put('/tasks/:id', wrapAsync(async (req, res) => {
    const { title, description, category } = req.body;
    await Task.findByIdAndUpdate(req.params.id, { title, description, category });
    res.redirect('/tasks');
}));

// PATCH ROUTE - Mark task as done
app.patch('/tasks/:id', wrapAsync(async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, { isDone: true });
    res.redirect('/tasks');
}));

// DESTROY ROUTE - Delete task
app.delete("/tasks/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deleteTask = await Task.findByIdAndDelete(id);
    if (!deleteTask) {
        return res.status(404).send("Task not found");
    }
    res.redirect("/tasks");
}));

//Error Handler for the CREATE ROUTE
app.use((err, req, res, next)=>{
    let {statusCode = 500, message = "Something went wrong"}= err;
    res.render("error.ejs", {err});
});