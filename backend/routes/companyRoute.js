

import express from 'express'
import { addCompany, applyCompanies, deleteCompany, getAllCompanies,getCompanyByid, updateCompany } from '../controllers/companyController.js';
import {verifyToken} from '../middleware/auth.js'
import { isAdmin } from '../middleware/isAdmin.js';
const router=express.Router();

router.post('/',verifyToken,isAdmin,addCompany)
router.get('/',getAllCompanies);
router.get('/:id',getCompanyByid)

router.put('/',verifyToken,isAdmin,updateCompany)

router.delete('/',verifyToken,isAdmin,deleteCompany)
router.post('/apply/:compId',verifyToken,applyCompanies)
export default router;