import express from 'express';
import multer from 'multer';
import { registerUser } from '../controllers/userController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/register', upload.single('profileImage'), registerUser);

export default router;
