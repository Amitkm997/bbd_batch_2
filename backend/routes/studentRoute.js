import express from 'express'
import { deleteUser, getAllStudents, getUserById, login, register, updateUser } from '../controllers/studentController.js';
const router=express.Router();

router.post('/register',register)
router.post('/login',login)

router.get('/getAllUser',getAllStudents)
router.get("/get/:id",getUserById)

router.put('/updateUser/:id',updateUser)
router.delete('/deleteUser/:id',deleteUser)

export default router;