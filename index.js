import express from 'express';
import { config } from 'dotenv';
import { engine } from 'express-handlebars';
import path, { dirname } from 'path';
import  {fileURLToPath}  from 'url';
import bodyParser from 'body-parser'
import searchRoutes from './Routes/search.js';
import linkRoutes from './Routes/links.js';
import loginRoutes from './Routes/login.js';
import signUpRoutes from './Routes/signup.js';
import deleteRoutes from './Routes/delete.js';
import jwt from 'jsonwebtoken';
import {authenticateToken} from './authenticateToken.js';
import cookieParser from 'cookie-parser';
config()
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

app.engine('handlebars', engine());
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'handlebars');
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(cookieParser())
app.use('/search', searchRoutes);
app.use('/links', linkRoutes);
app.use('/login', loginRoutes);
app.use('/signup', signUpRoutes);
app.use('/delete', deleteRoutes)

app.get("/info", (req, res) => {
   res.render('info')
})


app.get('/' ,(req, res) => {
   const token =  req.cookies.token;
   // Verificar si el usuario está autenticado
   // Renderizar la plantilla home y pasar el estado de autenticación
   if(token) {
      res.render('home', {isAuthenticated: true} );
   } else {
      res.render('home');
   }

})

app.get('/logout', (req, res) => {
   // Establecer una nueva cookie con el mismo nombre pero valor vacío y fecha de caducidad en el pasado
   res.cookie('token', '', { expires: new Date(0) });
   
   // Redirigir a la página de inicio de sesión u otra página de tu elección
   res.redirect('/');
});


app.listen(process.env.PORT, () => {
   console.log('servidor levantando en ', `http://localhost:${process.env.PORT}/`)
})

