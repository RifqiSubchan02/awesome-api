import { Router } from "express";
import { employee } from "@/controllers";

const router = Router();

router.get("/", employee.getAll);

export default router;
