import express from "express";
import passport from "passport";
import * as UserServices from "../routers/users.services.js";
import UserAuth from "../middleware/user.auth.js";
const router = express.Router();

// Using UserAuth Middleware
UserAuth();

router
  .post("/signup", UserServices.signupUser)
  .post("/login", UserServices.loginUser)

  // Middleware to restrict unknown users to below apis
  .use(passport.authenticate("user.auth", { session: false }))

  // Assets
  .get("/assets", UserServices.getUserAssets)
  .patch("/assets", UserServices.updateUserAssets)

  // Transactions
  .get("/transactions", UserServices.getUserTransactions)
  .post("/transactions", UserServices.createUserTransaction)
  .delete("/transactions/:id", UserServices.deleteUserTransaction)
  .patch("/transactions/:id", UserServices.updateUserTransaction);

export default router;
