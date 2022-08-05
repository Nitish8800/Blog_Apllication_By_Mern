import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

//components
import Connection from "./database/db.js";
import Router from "./routes/route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () =>
  console.log(`Server is running successfully on the PORT ${PORT}`)
);
Connection();
