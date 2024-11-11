const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['Admin', 'Manager', 'Telecaller', 'Advisor', 'Accountant'], // Define the allowed roles
        required: true
    }
});

const EmployeeModel = mongoose.model('employees', EmployeeSchema);
module.exports = EmployeeModel;
