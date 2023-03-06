import mongoose from "mongoose";


// Strict Query Settings
mongoose.set('strictQuery', false)

// MONGO_URI
const MONGO_URI = () => {
    switch(process.env.NODE_ENV){
        case "development":
            return process.env.MONGODB_URI_DEV;
            break;
        case "production":
            return process.env.MONGODB_URI_PROD;
            break;
        case "test": 
        return process.env.MONGODB_URI_TEST;
            break;
            // default:
    }
}

// DATABASE CONNECTION
const DBCONNET = (callback) => {
    try{
        mongoose.connect(MONGO_URI(),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log("MongoDB connected");
        callback();
    } catch(err){
        console.log('Error connecting...');
        console.log(err);
    }
}

export default DBCONNET;