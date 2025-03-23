import { Router } from "express";

import { createNewSuggestion } from "../controller/index.js";

const router = Router();

router.post("/suggest", createNewSuggestion);

export default router;
