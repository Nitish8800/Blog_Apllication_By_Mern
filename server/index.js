import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

//components
import Connection from "./database/db.js";
import Router from "./routes/route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://top-blog-website-nitish8800.vercel.app",
  })
);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

app.get("/", (req, res) => {
  res.json("Server Start");
});

const PORT = process.env.PORT || 8000;

Connection();
app.listen(PORT, () =>
  console.log(`Server is running successfully on the PORT ${PORT}`)
);
