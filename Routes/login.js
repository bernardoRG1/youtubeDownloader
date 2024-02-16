import express from 'express';
import { loginGET, loginPOST } from '../Controllers/loginController.js';

const loginRoutes = express.Router();


loginRoutes.get('/', loginGET);
loginRoutes.post('/', loginPOST)


export default loginRoutes;