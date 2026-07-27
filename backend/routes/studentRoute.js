import express from 'express'
import { deleteUser, getAllStudents, getUserById, login, register, updateUser } from '../controllers/studentController.js';
import { verifyToken } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';
const router=express.Router();

router.post('/register',register)
router.post('/login',login)

router.get('/getAllUser',getAllStudents)
router.get("/get/:id",verifyToken,getUserById)

router.put('/updateUser/:id',verifyToken,isAdmin,updateUser)
router.delete('/deleteUser/:id',verifyToken,isAdmin,deleteUser)

export default router;