// routes/routes.js
import express from "npm:express@4.18.2";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

router.get("/users", UserController.getUsers);

router.post("/users/user", UserController.addNewUser);

export default router;
