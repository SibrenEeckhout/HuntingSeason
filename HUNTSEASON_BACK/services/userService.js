// services/userService.js
import client from "../config/database.js";

const getUsersFromDatabase = async () => {
  try {
    const results = await client.query("SELECT * FROM users");
    console.log(results);
    return results; // Assuming 'rows' contains the data
  } catch (error) {
    throw new Error("Error retrieving users from the database");
  }
};

const insertUser = async (name, number, email, password) => {
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
};


export { getUsersFromDatabase, insertUser };
