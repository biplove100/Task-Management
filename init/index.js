//We are writing the code for initialization of the database (COMIC BOOK DATA inside data.js will be saved in the database)
const mongoose = require("mongoose");
const initData= require("./data.js");
const Task = require("../models/task.js");

//DATABASE CONNECTION SETUP 
const MONGO_URL="mongodb://127.0.0.1:27017/taskmanagement";

async function main(){
    await mongoose.connect(MONGO_URL);
}

//CALLING THE main() function
main()
    .then(()=>{
        console.log("connected to DataBase.");
    })
    .catch((err)=>{
        console.log(err);
    });


//SAVING THE DATA inside the data.js INTO THE DATABSE

const initDB= async ()=>{
    await Task.deleteMany({});
    await Task.insertMany(initData.data);
    console.log("data is initialized.");
}

initDB();
