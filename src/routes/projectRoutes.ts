import { Router } from "express";

import { createproject, getprojects } from "../controllers/projectController";

const router = Router();

router.get("/", getprojects);
router.post("/", createproject);

export default router;
