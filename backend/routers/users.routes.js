import express from "express";
import * as UserServices from "../routers/users.services.js";

const router = express.Router();

router.post("/signup", UserServices.signupUser);
router.post("/login", UserServices.loginUser);

export default router;
