import pool from '../database.js';
import { promisify } from 'util';

class LinkModel {
      constructor() {}

      async createUser(name, email, passwordHash) {
           try {
               const query = 'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)';
               const result = await pool.query(query, [name, email, passwordHash]);
               return result.insertId; // Retorna el ID del usuario insertado
         } catch (error) {
               console.error('Error al crear el usuario:', error);
               throw error;
         }
      }

      async createLink(userId, url, data) {
         try {
            const addVideo = await pool.query(` INSERT INTO linksUrl (user_id, url, titulo, iframurl, duracion) VALUES (?, ?, ?, ?, ?)`, [userId, url, data.title, data.iframeUrl, data.duration ]);
            return;
         } catch (error) {
               console.error('Error al crear el enlace:', error);
               throw error;
         }
      }

      async getLinksByUserId(userId) {
         try {
               const query = 'SELECT * FROM linksUrl WHERE user_id = ?';
               const rows = await pool.query(query, [userId]);
               return rows; // Retorna los enlaces asociados al usuario
         } catch (error) {
               console.error('Error al obtener los enlaces del usuario:', error);
               throw error;
         }
      }

      async findUserByEmail(email) {
         try {
               const query = 'SELECT * FROM users WHERE email = ?';
               const rows = await pool.query(query, [email]);
               if (rows.length > 0) {
                   return rows[0]; // Retorna el usuario si se encuentra
               } else {
                   return null; // Retorna null si el usuario no se encuentra
               }
         } catch (error) {
               console.error('Error al buscar usuario por correo electrónico:', error);
               throw error;
         }
      }
}

export default LinkModel;
