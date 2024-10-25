import { Router } from "express";

import { getusers } from "../controllers/userController";

const router = Router();

router.get("/", getusers);

export default router;
