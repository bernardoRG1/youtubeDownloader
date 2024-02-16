import  jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt'
import LinkModel from "../Models/usersModel.js";
import { generateAccessToken } from "../authenticateToken.js";


const userModel = new LinkModel();

export const loginGET = (req, res) => {
   res.render('login');
};

export const loginPOST = async (req, res) => {
   const { email, password } = req.body;

   try {
      const user = await userModel.findUserByEmail(email);
      if (!user) {
         throw new Error('El correo electrónico ya está registrado');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password_hash);
      if (!isPasswordValid) {
         throw new Error('La contraseña es incorrecta');
      }

      const userToken = {email : email, password : password, id : user.id}
      // Generar el token JWT
      const accessToken = generateAccessToken(userToken);

      res.cookie('token', accessToken, {httpOnly: true});
      res.redirect('/')
      // Redirigir a una página o enviar una respuesta con el token
   } catch (error) {
      res.render('login', {error : error.message})
   }
};