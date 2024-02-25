// routes/routes.js
import express from "npm:express@4.18.2";
import UserController from "../controllers/userController.js";
import authenticateToken from "../middlewares/authMiddleware.js";
import {login} from "../controllers/authController.js"
import sessionController from "../controllers/sessionController.js";

const router = express.Router();

router.get("/", (req, res) => {res.send("Welcome to the Dinosaur API!");});

// user related
router.get("/users", UserController.getUsers);
router.post("/users/user", UserController.addNewUser);
router.post('/login', login);
router.get("/users/user/id/:id", authenticateToken, UserController.getUserById)

// session related
router.post("/sessions/session/:id", sessionController.addSession)
export default router;
