// routes/routes.js
import express from "npm:express@4.18.2";
import connection from "../config/database.js";
import getUsers from "../services/userService.js"; // Importing as default


const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

router.get("/users", getUsers);

export default router;
