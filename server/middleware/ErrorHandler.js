// Creating an Error Handler
const ErrorHandler = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message || "Oops...Something went wrong";
    const stack = process.env.NODE_ENV !== 'production'? error.stack : {}
    res.status(status).json({
        status,
        success: false,
        message,
        stack
    })
}

export default ErrorHandler