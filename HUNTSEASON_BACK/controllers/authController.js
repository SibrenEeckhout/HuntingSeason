import jwt from 'jsonwebtoken';
import { getUserByEmail } from "../services/authService.js"

const generateToken = (user) => {
    return jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: '100y' });
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [user] = await getUserByEmail(email); // Destructure the array to get the first user

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        if (password !== user.password) { // Compare plaintext passwords directly
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = generateToken(user);
        res.json({ token, user});
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
