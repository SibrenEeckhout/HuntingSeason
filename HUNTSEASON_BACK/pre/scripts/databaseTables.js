import client from "../../config/database.js";

try {
    await client.execute(`
        CREATE TABLE IF NOT EXISTS quotes (
            id INT AUTO_INCREMENT PRIMARY KEY,
            quote_text TEXT
        )`);

    await client.execute(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            number VARCHAR(255),
            email VARCHAR(255),
            password VARCHAR(255)
        )`);

    await client.execute(`
        CREATE TABLE IF NOT EXISTS sessions (
            sessionId INT AUTO_INCREMENT PRIMARY KEY,
            userId INT,
            started TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            ended TIMESTAMP,
            title VARCHAR(255),
            subtitle TEXT,
            playtime TIME, -- Time data type for playtime
            pingtime TIME -- Time data type for pingtime
        )`);

    await client.execute(`
        CREATE TABLE IF NOT EXISTS users_session (
            sessionId INT,
            userId INT,
            FOREIGN KEY (sessionId) REFERENCES sessions(sessionId),
            FOREIGN KEY (userId) REFERENCES users(id),
            PRIMARY KEY (sessionId, userId)
        )`);

    console.log("Tables created successfully.");
} catch (error) {
    console.error("Error creating tables:", error);
} finally {
    await client.close();
}
