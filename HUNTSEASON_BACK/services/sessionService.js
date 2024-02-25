import client from "../config/database.js";

class sessionService {
    static async addSessionToDatabase(session) {
        try {
            const { userId, description, title, subtitle, playtime, pingtime } = session;
            
            // Insert session into the sessions table with prepared statements to avoid SQL injection
            const result = await client.execute(
                `INSERT INTO sessions (userId, description, title, subtitle, playtime, pingtime) VALUES (?, ?, ?, ?, ?, ?)`,
                [userId, description, title, subtitle, playtime, pingtime]
            );
    
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async getAllSessions() {
        try {
            // Retrieve all sessions from the sessions table
            const sessions = await client.execute(`SELECT * FROM sessions`);
            return sessions.rows;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
}

export default sessionService;
