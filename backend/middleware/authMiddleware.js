
const jwt = require('jsonwebtoken');


function checkAuth(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }
    jwt.verify(token.split(' ')[1], process.env.jwt, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }
        req.user = decoded;
        next();
    });
}

function adminOnly(req, res, next) {
    if (req.user.username !== 'admin') {
        return res.status(403).json({ message: 'Access restricted to admin only' });
    }
    next();
}

module.exports = { checkAuth, adminOnly };
