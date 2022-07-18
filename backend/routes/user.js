import express from 'express';
import { createEmail, getEmail, signin, signup} from '../controller/user.js';
import { sendEmail } from '../controller/sendEmail.js';
const router = express.Router();

router.post('/', createEmail);
router.get('/', getEmail);
router.post('/send', sendEmail)

router.post('/signin', signin);
router.post('/signup', signup);

export default router;