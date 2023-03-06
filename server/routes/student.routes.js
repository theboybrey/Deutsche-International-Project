import { Router } from "express";
import { getStudents, addStudent } from "../controllers/student.controller.js";

const router = Router();

// GET Student 
router.get("/", getStudents);


export default router;