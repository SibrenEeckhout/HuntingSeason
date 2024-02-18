import express from "npm:express@4.18.2";
import connection from "./config/database.js";
import router from "./api/api.js"
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(8000);


//tomorrow 
/*
- add controller for user.

- add authentication for user.

- add modal for user. 
*/