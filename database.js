import mysql from 'mysql'
import { promisify } from 'util';
import { config } from 'dotenv';
config()
const keys = {
   database : {
      host: process.env.MYSQL_ADDON_HOST,
      user: process.env.MYSQL_ADDON_USER,
      password : process.env.MYSQL_ADDON_PASSWORD,
      database: process.env.MYSQL_ADDON_DB,
      port: process.env.MYSQL_ADDON_PORT 
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