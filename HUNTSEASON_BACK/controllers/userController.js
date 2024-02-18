import { getUsersFromDatabase } from "../services/userService.js";

class UserController {
  static async getUsers(req, res) {
    try {
      const users = await getUsersFromDatabase();
      console.log("twerkt");
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default UserController;