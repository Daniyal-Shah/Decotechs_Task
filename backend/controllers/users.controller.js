import UserModel from "../models/users.model.js";
import { getJwtToken } from "../services/jwt.js";

const signup_user = async (payload) => {
  const isExisting = await UserModel.findOne({ email: payload.email });

  if (isExisting) {
    return globalServices.throwCustomError("Email already exist!", 409, {
      email: "Email already exist try a new email",
    });
  }

  const user = await UserModel.create({
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: payload.password,
  });

  return {
    data: user,
    message: `User Sign Up Successfully.`,
  };
};

const login_user = async (payload) => {
  console.log(payload);
  const { email, password } = payload;

  const authUser = await UserModel.findOne({ email });
  // if Email doesn't exist or requesting user isn't agent or password not matching
  if (!authUser || !(await authUser.matchPassword(password))) {
    services.throwCustomError("Wrong credentials. Try again", 400);
  }

  return {
    message: "Login Successfull",
    token: getJwtToken(authUser._id),
  };
};

export default { signup_user, login_user };
