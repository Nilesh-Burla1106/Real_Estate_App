const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer'); 
const bcrypt = require('bcrypt');
require('dotenv').config();

// const app = express();
const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, 
    optionsSuccessStatus: 200
}));

mongoose.connect('mongodb+srv://Nilesh_Burla:nileshburla11@cluster0.23nle.mongodb.net/employee')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});

const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });
};

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


app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    EmployeeModel.findOne({ email })
        .then(user => {
            if (!user) {
                return res.send({ Status: "User not existed" });
            }

            const token = jwt.sign({ id: user._id }, "jwt_secret_key", { expiresIn: "1d" });
            const transporter = createTransporter();

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to:email,
                subject: 'Reset Your Password',
                text: `http://localhost:5173/reset-password/${user._id}/${token}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    res.send({ Status: "Failed to send email" });
                } else {
                    res.send({ Status: "Success" });
                }
            });
        })
        .catch(err => res.status(500).json(err));
});


app.post('/reset-password/:id/:token', (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;

    jwt.verify(token, "jwt_secret_key", (err, decoded) => {
        if (err) {
            return res.json({ Status: "Error with token" });
        } else {
            EmployeeModel.findByIdAndUpdate(id, { password: password })
                .then(() => res.send({ Status: "Success" }))
                .catch(err => res.send({ Status: err.message }));
        }
    });
});


app.listen(3001, () => {
    console.log("Server is running");
});
