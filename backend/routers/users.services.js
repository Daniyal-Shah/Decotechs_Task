import asyncHandler from "express-async-handler";
import UserController from "../controllers/users.controller.js";
import globalServices from "../services/global.services.js";

export const signupUser = asyncHandler(async (req, res) => {
  try {
    const response = await UserController.signup_user(req.body);
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  try {
    const response = await UserController.login_user(req.body);
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});
