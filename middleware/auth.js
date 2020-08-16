const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    //get token from header
    const token = req.header('auth-token');
    if(!token) {
        return res.status(401).json({ message: "No token, auth invalid" });
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSeceret'));
        req.user = decoded.user;
        next();
    } catch {
        res.status(401).json({ catch: "Token auth denied" });
    }
};