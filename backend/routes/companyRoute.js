import express from 'express';
import { addCompany } from '../controllers/companyController.js';

const router = express.Router();

router.post("/",addCompany)

export default router;