// services/userService.js
import client from "../config/database.js";


const getUsersFromDatabase = async () => {
  try {
    const results = await client.query("SELECT * FROM user");
    console.log(results);
    return results; 
  } catch (error) {
    throw new Error("Error retrieving users from the database");
  }
};

export { getUsersFromDatabase };