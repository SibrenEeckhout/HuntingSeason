// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1]; // Remove 'Bearer ' prefix
    jwt.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
            console.error('Error verifying token:', err);
            return res.status(403).json({ message: 'Forbidden' });
        }
        console.log('Decoded token payload:', decoded);
        req.userId = decoded.id;
        next();
    });
};

export default authenticateToken;
