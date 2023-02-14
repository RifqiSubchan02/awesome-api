import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();

const app: Express = express();

app.get("/", (req: Request, res: Response) => res.send("Welcome to My API"));

app.listen(process.env.PORT, () => {
  console.log(`Server Up and Running on Port ${process.env.PORT}`);
});

export default app;
