import client from "../config/database.js";

class sessionService {
    static async addSessionToDatabase(session) {
        try {
            const { userId, description, title, subtitle, playtime, pingtime } = session;
            
            // Generate a random 5-character gameId
            const gameId = Math.random().toString(36).substring(2, 7);
    
            // Insert session into the sessions table with prepared statements to avoid SQL injection
            const result = await client.execute(
                `INSERT INTO sessions (userId, gameId, description, title, subtitle, playtime, pingtime) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [userId, gameId, description, title, subtitle, playtime, pingtime]
            );
    
            const insertedSession = await client.execute(
                `SELECT * FROM sessions WHERE gameId = ? LIMIT 1`,
                [gameId]
            );
            console.log(insertedSession);
            // Return the inserted session
            return insertedSession.rows[0];
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

    static async userJoinSession(gameId, userId) {
        try {
            // Retrieve sessionId based on gameId
            const sessionQuery = await client.execute(
                `SELECT sessionId FROM sessions WHERE gameId = ?`,
                [gameId]
            );
    
            if (sessionQuery.rows.length === 0) {
                throw new Error('Session not found for the provided gameId.');
            }
    
            const sessionId = sessionQuery.rows[0].sessionId;
    
            // Insert user into the users_session table with prepared statements to avoid SQL injection
            const result = await client.execute(
                `INSERT INTO users_session (sessionId, userId) VALUES (?, ?)`,
                [sessionId, userId]
            );
    
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
    
}

export default sessionService;
