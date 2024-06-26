// controllers/sessionController.js

import { Session } from "../models/sessionModal.js";
import sessionService from "../services/sessionService.js";

class sessionController {
  static async addSession(req, res) {
    try {
      const userId = req.params.id;
      const { description, subtitle, title, playtime, pingtime } = req.body;
      
      // Create a new Session object
      const newSession = new Session(null, userId, description, false, false, title, subtitle, playtime, pingtime);
      
      // Add the session to the database
      const sessionId = await sessionService.addSessionToDatabase(newSession);
      // Return the newly inserted session ID
      res.json({ sessionId });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getSessions(req, res) {
    try {
      const sessions = await sessionService.getAllSessions();
      res.json(sessions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async userJoin(req, res) {
    try {
        const { gameId } = req.body; // Access gameId from request body
        const { userId } = req.params; // Access userId from request parameters
        
        // Join the user in the session
        await sessionService.userJoinSession(gameId, userId);

        // Return the result
        res.json("User added successfully.");
    } catch (error) {
        console.log("error");
        res.status(500).json({ message: error.message });
    }
}
}

export default sessionController;
