import mysql from 'mysql'
import { promisify } from 'util';
import { config } from 'dotenv';
config()
const keys = {
   database : {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT 
   }
}

const pool = mysql.createPool(keys.database);

pool.getConnection((err, connection) => {
   try {
      if (err) {
         throw new Error(`Error while getting a connection: ${err.message}`);
      }
      connection.release();
      console.log('DB IS CONNECTED');
      return;
   } catch (error) {
      console.log(error.message)
   }
})


pool.query = promisify(pool.query);
export default pool;