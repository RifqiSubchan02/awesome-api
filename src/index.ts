import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { employee } from "./routes";

dotenv.config();

const app: Express = express();

app.get("/", (req: Request, res: Response) =>
  res.send("Welcome to Awesome API")
);

app.use("/employee", employee);

app.listen(process.env.PORT, () => {
  console.log(`Server Up and Running on Port ${process.env.PORT}`);
});

export default app;
