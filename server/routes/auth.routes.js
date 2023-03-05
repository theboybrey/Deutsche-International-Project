import {Router} from 'express'
import {login, signup} from '../controllers/auth.controller.js'

const router = new Router();


// POST for User /signup
router.post('/signup', signup)

router.post('/login', login)

export default router;