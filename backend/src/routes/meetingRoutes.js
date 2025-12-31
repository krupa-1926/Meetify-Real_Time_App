
import { Router } from "express";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/join/:roomId", auth, (req, res) => {
  res.json({ success: true, user: req.user });
});

export default router;
