import mongoose, {Schema} from 'mongoose'

// Creating a Student Schema
const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Your first name is required!']
    },  
    lastName: {
        type: String,
        required: [true, 'Last Name is required!']   
    },
    email: {
        type: String, 
        required: [true, 'Email address needed!'],
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: [true, 'Student address required!']
    },
    date_of_birth:{
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: false
    }, 
    password: {
        type: String,
        required: [true, "Password is required"]
    }
}, {timestamps: true});

export default mongoose.models.Student || mongoose.model('Student', StudentSchema);