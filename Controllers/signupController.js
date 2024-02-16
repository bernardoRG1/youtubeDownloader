import LinkModel from "../Models/usersModel.js";
import bcrypt from 'bcrypt'

const userModel = new LinkModel();
export const signupGET = (req, res) => {
   res.render('signup')
}
export const signupPOST = async (req, res) => {
      const { name, email, password } = req.body;

      try {
         const existingUser = await userModel.findUserByEmail(email);
         if (existingUser) {
               throw new Error('El correo electrónico ya está registrado');
         }

         const hashedPassword = await bcrypt.hash(password, 10);

         const newUser = await userModel.createUser(name, email, hashedPassword);

         res.redirect('/login')
      } catch (error) {
         res.render('signup', { error: error.message })
      }
};
