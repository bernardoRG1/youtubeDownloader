import jwt from 'jsonwebtoken';

export function generateAccessToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '1d'})
}

export function authenticateToken(req, res, next) {
    const token =  req.cookies.token;

    if (token == null) {
        return res.redirect('/login'); // Redirecciona al inicio de sesión si no hay token
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            req.isAuthenticated = false;
            return res.redirect('/login'); // Redirecciona al inicio de sesión si el token no es válido
        }
        req.isAuthenticated = true;
        next(); // Continúa con la solicitud si el token es válido
    });
}


