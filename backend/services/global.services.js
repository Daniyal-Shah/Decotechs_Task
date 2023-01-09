import { jwtErrorChecker } from "./jwt.js";

class globalServicesServices {
  dotNotationMaker(obj) {
    const res = {};
    (function recurse(obj, current) {
      for (const key in obj) {
        const value = obj[key];
        const newKey = current ? current + "." + key : key; // joined key with dot
        if (value && typeof value === "object") {
          recurse(value, newKey); // it's a nested object, so do it again
        } else {
          res[newKey] = value; // it's not an object, so set the property
        }
      }
    })(obj);
    return res;
  }

  updateHandler(response) {
    if (response.matchedCount === 0) this.throwCustomError("Not found", 400);
    else if (response.modifiedCount === 1)
      return { message: "Updated successfully" };
    else if (response.modifiedCount === 0 && response.matchedCount === 1)
      return { message: "No changes has been done" };
    return { message: "No idea" };
  }
  //using router services
  successResponse(res, payload, status = 200) {
    res.status(status).json({
      success: true,
      response: payload,
    });
  }
  failedResponse(res, err) {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    // console.table([
    // 	['Error Name', err.name],
    // 	['Error message', err.message],
    // 	['Error payload', err.payload],
    // 	['Full error', err],
    // ])

    res.json({
      success: false,
      message: err.message,
      payload: err.payload,
      stack: err.stack,
    });
  }
  throwCustomError(message, statusCode, payload) {
    const error = new Error();
    error.name = "custom";
    error.message = message;
    error.payload = payload;
    error.statusCode = statusCode || 419;
    throw error;
  }
  addStatusCodeWithError(err, res) {
    const { name, message, stack, statusCode, payload } = err;
    const error = new Error();
    error.name = name;
    error.message = message;
    error.stack = stack;
    error.payload = payload;
    if (error.name === "custom") {
      res.status(statusCode);
    } else if (error.name === "ValidationError") {
      //  if err.errors is Array then its "yup" else if its object then its mongoose
      if (Array.isArray(err.errors)) {
        let obj = {};
        for (let e of err.inner) {
          obj[e.path] = e.message;
        }
        error.payload = obj;
      } else {
        Object.keys(err.errors).forEach((key) => {
          error.message = err.errors[key].properties.message;
          error.payload = {
            [key]: error.message,
          };
        });
      }
      error.message = "Please remove all the errors";
      res.status(409);
    } else if (err.code && err.code === 11000) {
      const field = Object.keys(err.keyValue);
      res.status(409);
      error.message = `${err.keyValue[field]} already exists.`;
      error.payload = {
        [field[0].split(".")[0]]: `Already Exists. Please use different one`,
      };
    } else if (jwtErrorChecker(error)) {
      res.status(401);
      error.message = "Session expired";
    } else if (error.name === "CastError") {
      error.message = "Passed id is not valid id - mongoose error";
    }
    throw error;
  }
}
export default new globalServicesServices();
