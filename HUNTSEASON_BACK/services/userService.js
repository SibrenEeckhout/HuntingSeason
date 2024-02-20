import client from "../config/database.js";

class UserService {
  static async getUsersFromDatabase() {
    try {
      const results = await client.query("SELECT * FROM users");
      console.log(results);
      return results; // Assuming 'rows' contains the data
    } catch (error) {
      throw new Error("Error retrieving users from the database");
    }
  }

  static async insertUser(name, number, email, password) {
    try {
      const query = `
        INSERT INTO users (name, number, email, password)
        VALUES ('${name}', '${number}', '${email}', '${password}')`;
      const result = await client.query(query);
      return "Inserted correctly.";
    } catch (error) {
      console.error("Error inserting user into the database:", error);
      throw new Error("Error inserting user into the database");
    }
  }

  static async getUserById(userId) {
    try {
      const query = `
        SELECT * FROM users
        WHERE id = ${userId}`;
      const result = await client.query(query);

      return result; // Return the first user found (assuming ID is unique)
    } catch (error) {
      throw new Error(`Error retrieving user by ID: ${error.message}`);
    }
  }
}

export default UserService;
