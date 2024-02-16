
import pool from "../database.js";
import jwt from 'jsonwebtoken'
export const deletePOST = async (req, res) => {
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
      console.log(url)
      const deleteVideo = await pool.query(`DELETE FROM linksurl WHERE user_id = ? AND url = ?`, [userId, url]);
      res.redirect("/links")
   } catch (error) {
      console.log(error)
   }

}

