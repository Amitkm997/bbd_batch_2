import express from 'express'
import { register } from '../controllers/studentController.js';
const router=express.Router();

router.post('/register',register)

export default router;