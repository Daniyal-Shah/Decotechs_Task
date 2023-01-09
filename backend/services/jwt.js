import jwt from "jsonwebtoken";

export function jwtErrorChecker(error) {
  if (
    error.name === "TokenExpiredError" ||
    error.name === "JsonWebTokenError" ||
    error.name === "NotBeforeError"
  ) {
    return true;
  }
  return false;
}

export function getJwtToken(id, expiresIn) {
  return jwt.sign(
    { id },
    "Secret Key",
    expiresIn && {
      expiresIn: expiresIn,
    }
  );
}
export function validateJwtToken(token) {
  return jwt.verify(token, "Secret Key").data;
}
