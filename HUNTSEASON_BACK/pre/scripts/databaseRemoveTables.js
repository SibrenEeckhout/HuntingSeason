import client from "../../config/database.js";

async function removeTables() {
    try {
        await client.execute(`DROP TABLE IF EXISTS users_session;`);
        await client.execute(`DROP TABLE IF EXISTS sessions;`);
        await client.execute(`DROP TABLE IF EXISTS quotes;`);
        await client.execute(`DROP TABLE IF EXISTS users;`);
        console.log("Tables removed successfully.");
    } catch (error) {
        console.error("Error removing tables:", error);
    } finally {
        await client.close();
    }
}

removeTables();

