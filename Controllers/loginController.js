import  jwt  from "jsonwebtoken";
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
         throw new Error('No existe tu cuenta');
      }


      if (password !== user.password_hash) {
         throw new Error(`${password} AND ${user.password}`);
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