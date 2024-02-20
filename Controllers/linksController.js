import pool from "../database.js";
import  searchVideo  from "../Models/searchModel.js";
import LinkModel from "../Models/usersModel.js";
import jwt from 'jsonwebtoken';

const model = new searchVideo();
const linkModel = new LinkModel()

export const linksGET = async (req, res) => {
   try {
      
       const links = await pool.query('SELECT * from linksUrl;');
      const token =  req.cookies.token;
   if(token) {
      res.render('links', {isAuthenticated: true, videos : links });
   } else {
      alert('TIENES QUE INICIAR SESION PARA ACCEDER AQUI')
      res.redirect('/login');
   }




   } catch (error) {
      console.log(error)
   }

};

export const addVideoGET= (req, res) => {
   res.render('add')
}


export const linksPOST = (req, res) => {
   console.log("hola")
}

export const addVideoPOST = async (req, res) => {
   const {url} = req.body;
   try {
      let userId;
      const token =  req.cookies.token;
      jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
         if (err) {
            console.error(err);
            return res.status(401).json({ error: 'Token inválido' });
         }
      userId = decoded.id;
      
      })
      const data = await model.getData(url);
      const addVideo = await linkModel.createLink(userId, url, data)
     
      res.redirect("/links")
   } catch (error) {
      console.log(error)
   }

}