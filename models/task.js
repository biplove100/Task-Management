//We are creating the model for the task and then will export this SCHEMA to the app.js and will use it in the app.js file
const mongoose= require("mongoose");
const Schema=mongoose.Schema;

//Schema for the listings
const taskSchema= new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        enum: ['Physical-Health', 'Work/Financial-Goals', 'Intellectual-Knowledge'],
        required: true
    },
    isDone: {
        type: Boolean,
        default: false,
    },
});

//CREATING MODEL;
const Task= mongoose.model("Task", taskSchema);

//EXPORTING THE MODEL TO THE app.js file
module.exports= Task;