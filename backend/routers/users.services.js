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

// Assets
export const getUserAssets = asyncHandler(async (req, res) => {
  try {
    const response = await UserController.get_assets(req.user._id);
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const updateUserAssets = asyncHandler(async (req, res) => {
  try {
    const response = await UserController.update_assets(req.user._id, req.body);
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

// Transactions
export const getUserTransactions = asyncHandler(async (req, res) => {
  try {
    const response = await UserController.get_transactions(req.user._id);
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const createUserTransaction = asyncHandler(async (req, res) => {
  try {
    const response = await UserController.create_transaction(
      req.user._id,
      req.body
    );
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});
