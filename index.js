import dotenv from "dotenv"
import express  from "express";
import connection from "./database/db.js";
import userRoute from "./router/route.js";
import cors from "cors";


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", userRoute);

connection();
const Port = 5000;
app.listen(Port , ()=>
{
    console.log(`Server is running at ${Port}`);
});