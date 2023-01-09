import AssetsModel from "../models/assets.model.js";
import TransactionsModel from "../models/transactions.model.js";
import UserModel from "../models/users.model.js";
import { getJwtToken } from "../services/jwt.js";

const signup_user = async (payload) => {
  const isExisting = await UserModel.findOne({ email: payload.email });

  if (isExisting) {
    return globalServices.throwCustomError("Email already exist!", 409, {
      email: "Email already exist try a new email",
    });
  }

  const assets = await AssetsModel.create({});
  const user = await UserModel.create({
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: payload.password,
    assets: assets._id,
  });

  return {
    data: user,
    message: `User Sign Up Successfully.`,
  };
};

const login_user = async (payload) => {
  const { email, password } = payload;

  const authUser = await UserModel.findOne({ email }).populate("assets");
  // if Email doesn't exist or requesting user isn't agent or password not matching
  if (!authUser || !(await authUser.matchPassword(password))) {
    services.throwCustomError("Wrong credentials. Try again", 400);
  }

  return {
    message: "Login Successfull",
    token: getJwtToken(authUser._id),
  };
};

const get_assets = async (userId) => {
  const user = await UserModel.findById(userId);
  const userAssets = await AssetsModel.findById(user.assets);

  return {
    message: "Assets",
    assets: userAssets,
  };
};

const update_assets = async (userId, payload) => {
  const user = await UserModel.findById(userId);

  const userAssets = await AssetsModel.findOneAndUpdate(
    { _id: user.assets },
    payload,
    {
      returnNewDocument: true,
      new: true,
    }
  );

  return {
    message: "Updated Assets Successfully",
    updatedAssets: userAssets,
  };
};

const get_transactions = async (userId) => {
  const transactions = await TransactionsModel.find({ user: userId });

  return {
    message: "All Transactions",
    transactions,
  };
};

const create_transaction = async (userId, payload) => {
  const user = await UserModel.findById(userId);
  const assets = await AssetsModel.findById(user.assets);

  if (payload.method_of_payment == "cash") {
    assets.cash = assets.cash - payload.amount;
  } else if (payload.method_of_payment == "savings") {
    assets.savings = assets.savings - payload.amount;
  } else {
    assets.bank = assets.bank - payload.amount;
  }
  assets.save();

  const transaction = await TransactionsModel.create({
    user: userId,
    ...payload,
  });

  return {
    message: "Transaction Created Successfully",
    transaction,
    assets,
  };
};
export default {
  signup_user,
  login_user,
  update_assets,
  create_transaction,
  get_assets,
  get_transactions,
};
