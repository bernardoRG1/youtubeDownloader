import express from 'express'
import { signupGET, signupPOST } from '../Controllers/signupController.js';


const signUpRoutes = express.Router();

signUpRoutes.get('/', signupGET);
signUpRoutes.post('/', signupPOST);

export default signUpRoutes;