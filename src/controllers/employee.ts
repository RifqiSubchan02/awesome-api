import type { Request, Response } from "express";

function getAll(req: Request, res: Response) {
  res.send({ message: "Test" });
}

export default { getAll };
