import { getUsersFromDatabase, insertUser, getUserById } from "../services/userService.js";
import {User} from "../models/userModal.js";

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

      const newUser = new User(null, name, number, email, password); 
      const insertedUser = await insertUser(newUser.name, newUser.number, newUser.email, newUser.password);

      res.status(201).json(insertedUser); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default UserController;
