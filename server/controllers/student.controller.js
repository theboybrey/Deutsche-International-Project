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


