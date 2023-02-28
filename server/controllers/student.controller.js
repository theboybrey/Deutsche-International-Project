import Student from "../models/student.model.js"

// BCRYPT 
import bcrypt from 'bcrypt'

// SECRET KEY 
const bcryptSalt = bcrypt.genSaltSync(10);


// Fetching Students
export const getStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            success: true,
            message: 'Successfully fetched students',
            data: students
        })
    } catch (error) {
        next(error)
    }
}


// Adding or Registering Students
export const addStudent = async (req, res, next) => {
    const {
        firstName,
        lastName,
        age,
        date_of_birth,
        email,
        password,
        gender,
        address,
    } = req.body;
    try {
        const student = await Student.create({
            firstName,
            lastName,
            age,
            date_of_birth,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
            gender,
            address,
        })
        res.status(201).json({
            success: true,
            message: 'Successfully registered student.',
            data: student,
        })
    } catch (error) {
        next(error)
    }
}