import http from "http";
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import connection from "./server/db";
import cors from "cors";
const ProductRoute = require("./routes/ProductRoute");
const UserRoute = require("./routes/UserRoute");

const PORT = process.env.PORT || 8080;

const app: Application = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/product",ProductRoute);
app.use("/user",UserRoute);

app.get("/", (req: Request, res: Response) => {

  
  res.send("Welcome");
});

server.listen(PORT, () => {
  connection.then((con) => {
    console.log(`Server is running on PORT http://localhost:${PORT}`);
  });
});
