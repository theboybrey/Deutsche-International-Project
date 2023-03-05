import STUDENT from '../models/student.model.js'
import bcrypt from 'bcrypt'
import CreateError from '../utils/index.js'

// SECRET KEY
const bcryptSalt = bcrypt.genSaltSync(10)


// Creating a User Account
export const signup = async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        password,
        gender,
        address,
        date_of_birth,
        telephone,
    } = req.body

    try {
        const exist = await STUDENT.findOne({ email })
        if (exist) {
            return next(CreateError(401, "User Account Already Exists!"))
        }

        const student = await STUDENT.create({
            firstName,
            lastName,
            email,
            password : bcrypt.hashSync(password, bcryptSalt),
            gender,
            address,
            date_of_birth,
            telephone,
        })
        res.status(201).json({
            success: true,
            message: 'Student Added Successfully',
            data: student,
        })

    } catch (error) {
        next(error)
    }
}

// CREATING A LOGIN FOR THE  USER
export const login = async (req, res, next) => {
    const {email, password} = req.body

    try{
        const student = await STUDENT.findOne({ email })
        if(!student) {
            return next(CreateError(401, "Student not found"))
        }
        const isMatch = bcrypt.compareSync(password, student.password)
        if(!isMatch) {
            return next(CreateError(401, "Invalid User Credentials"))
        }
        res.status(200).json({
            success: true,
            message: 'Login Successful',
            data: student,
        })

    } catch (error){
        next(error)
    }

}