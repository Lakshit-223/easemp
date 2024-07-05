const uri = "mongodb+srv://Lakshit_007:Lakshit_1469@cluster0.cydt7z2.mongodb.net/";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to mongodb: ", error);
  });

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});

//endpoint to register an employee

const Employee = require("./models/employee");
const Attendance = require("./models/attendance");
app.post("/addEmployee", async (req, res) => {
  try {
    const {
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    } = req.body;

    //create a new employee
    const newEmployee = new Employee({
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    });

    await newEmployee.save();

    res
      .status(201)
      .json({ message: "Employee added successfully", employee: newEmployee });
  } catch (error) {
    console.log("Error creating an employee: ", error);
    res.status(500).json({ message: "Failed to add an employee..." });
  }
});

//endpoint to fetch all fetch all the employees

app.get("/employees", async(req,res) => {
  try{
    const employees = await Employee.find();
    res.status(200).json(employees)
  }catch(error){
    res.status(500).json({message: "Failed to retrieve the employees"})
  }
})
