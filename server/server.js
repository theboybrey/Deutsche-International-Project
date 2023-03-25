import express from 'express'
import DBCONNET from './config/index.js'
import dotenv from 'dotenv'
import cors from 'cors'
import ErrorHandler from './middleware/ErrorHandler.js'
import AuthRoute from './routes/auth.routes.js'
import StudentRoute from './routes/student.routes.js'

// env Config
dotenv.config();

// Launching the Server on the {Portal...}
const PORT = process.env.PORT || 8000
const app = express()

app.use(express.json())


// CORS For the Server Communication to the Client
app.use(cors({
    credentials: true,
    origin: '*'
}))

// Base URI for the API Documentation
app.get('/test', (req, res) => {
    res.json({
        message: 'Backend testing...'
    })
})



// Endpoints for API Connections
app.use('/student', StudentRoute)
app.use('/auth', AuthRoute)


// Error Handling
app.use(ErrorHandler)


// Console Log of the API  Connection to the Database
DBCONNET(() => {
    app.listen(PORT, () =>{
        console.log(`Server is running on Port:${PORT}...`)
    })
})
