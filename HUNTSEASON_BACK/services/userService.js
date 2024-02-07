// services/userService.js
import client from "../config/database.js";

const getUsers = async (req, res) => {
  try {
    const results = await client.query("SELECT * FROM user");
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users" });
  }
};

export default getUsers;
