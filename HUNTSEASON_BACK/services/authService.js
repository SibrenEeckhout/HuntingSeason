// services/userService.js
import client from "../config/database.js";


const getUserByEmail = async (email) => {
  try {
    const query = `
      SELECT * FROM users
      WHERE email = "${email}"`;
    const result = await client.query(query);

    return result; // Return the first user found (assuming ID is unique)
  } catch (error) {
    throw new Error(`Error retrieving user by ID: ${error.message}`);
  }
};

export { getUserByEmail };
