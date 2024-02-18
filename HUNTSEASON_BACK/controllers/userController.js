import { getUsersFromDatabase, insertUser, getUserById } from "../services/userService.js";
import {User} from "../models/userModal.js";
import jwt from 'jsonwebtoken';

class UserController {
  static async getUsers(req, res) {
    try {
      const users = await getUsersFromDatabase();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getUserById(req, res) {
    try {
      const userId = req.params.id;
      const user = await getUserById(userId);
      console.log(user);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async addNewUser(req, res) {
    try {
      const { name, number, email, password } = req.body;

      const newUser = new User(null, name, number, email, password); // Pass plain text password
      const insertedUser = await insertUser(newUser.name, newUser.number, newUser.email, newUser.password);

      // Generate a JWT token for the newly registered user
      console.log("ets");
      const token = UserController.generateToken(insertedUser.id);
      console.log("asdf");
      // Respond with the inserted user and the JWT token
      res.status(201).json({ user: insertedUser, token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static generateToken(userId) {
    return jwt.sign({ id: userId }, 'your_secret_key', { expiresIn: '1h' });
  }
}



export default UserController;
