import client from "../config/database.js";

try {
    // Seed data for quotes table
    await client.execute(`
        INSERT INTO quotes (quote_text)
        VALUES
            ('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
            ('Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
            ('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    `);

    // Seed data for users table
    await client.execute(`
        INSERT INTO users (name, number, email, password)
        VALUES
            ('John Doe', '123456789', 'john@example.com', 'password123'),
            ('Jane Doe', '987654321', 'jane@example.com', 'password456'),
            ('Alice Smith', '111222333', 'alice@example.com', 'password789');
    `);

    console.log("Seed data inserted successfully.");
} catch (error) {
    console.error("Error inserting seed data:", error);
} finally {
    await client.close();
}
