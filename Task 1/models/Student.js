const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    rollNumber: {
        type: String,
        required: [true, 'Roll number is required'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email format'
        ]
    },
    department: {
        type: String,
        required: [true, 'Department is required']
    },
    cgpa: {
        type: Number,
        min: [0.0, 'CGPA cannot be less than 0.0'],
        max: [4.0, 'CGPA cannot exceed 4.0']
    },
    enrollmentYear: {
        type: Number,
        required: [true, 'Enrollment year is required']
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('Student', studentSchema);