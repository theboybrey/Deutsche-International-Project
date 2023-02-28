import mongoose, {Schema} from 'mongoose'

// Creating a Parent Schema
const ParentSchema = new Schema({
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
    address:{
        type: String,
        required: [true, 'Parent address required!']
    },
    telephone: {
        type: String,
        required: [true, 'Telephone Number Needed!']
    }, 
    password: {
        type: String,
        required: [true, "Password is required"]
    }
}, {timestamps: true});

export default mongoose.models.Parent || mongoose.model('Parent', ParentSchema);