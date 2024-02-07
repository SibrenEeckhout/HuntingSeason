import client from "../config/database.js";

try {
    await client.execute(`CREATE TABLE IF NOT EXISTS quotes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      quote_text TEXT
    )`);

    await client.execute(`CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        number VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255)
      )`);
    console.log("Tables created successfully.");
  } catch (error) {
    console.error("Error creating tables:", error);
  } finally {
    await client.close();
}