const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://Nilesh_Burla:nileshburla11@cluster0.23nle.mongodb.net/employee')

.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});


// Login endpoint
// Login endpoint with role handling
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ message: "Success", role: user.role });
                } else {
                    res.json({ message: "The password is incorrect" });
                }
            } else {
                res.json({ message: "No record exists" });
            }
        })
        .catch(err => res.json(err));
});



// Register endpoint - now includes role
app.post('/register', (req, res) => {
    const { name, email, password, role } = req.body;
    
    if (!role || !['Admin', 'Manager', 'Telecaller', 'Advisor', 'Accountant'].includes(role)) {
        return res.status(400).json("Invalid role. Please select a valid role.");
    }

    // Create a new employee with role
    EmployeeModel.create({ name, email, password, role })
        .then(employee => res.json(employee))
        .catch(err => res.json(err));
});


app.listen(3001, () => {
    console.log("Server is running");
});
