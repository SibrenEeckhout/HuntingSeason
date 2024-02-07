// services/userService.js
import client from "../config/database.js";

const getUsers = async (req, res) => {
  try {
    const results = await client.query("SELECT * FROM user");
    console.log("Query results:", results);
    res.json(results);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ message: "Error retrieving users" });
  }
};

export default getUsers;
