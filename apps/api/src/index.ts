import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRouter from "./auth";
import vacationsRouter from "./vacations";
import settingsRouter from "./settings"
import cors from "cors";
import { initDB, getConnection } from "./db";
import bodyParser from "body-parser";
import {verifyToken, verifyAdmin } from "./middleware/auth";


initDB();


const app = express();
app.use(cors());
app.use(bodyParser.json());



app.use("/auth", authRouter);
app.use(verifyToken);
app.use("/vacations", vacationsRouter);
app.use(verifyAdmin);
app.use("/settings", settingsRouter);






app.use((error, req, res, next) => {
  console.log(error);
  if (error.status)
    return res.status(error.status).json({ message: error.message});
  return res.status(500).json({ message: "something went wrong" });
});

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log("-------------listening to port----------------");
});
