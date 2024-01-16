import express from "express";
import "dotenv/config";
import route from "../src/adapters/controllers/controller.js";
import dbConnection from "./frameworks/database/connection.js";
import cors from "cors";
const PORT = process.env.PORT;
const app = express();
dbConnection();
app.listen(PORT, () => {
  console.log(`Server connected on ${PORT}`);
});
app.use(cors());
route(app);
