import mongoose from "mongoose";

export const mongoConnect = () => {
  console.log("Connecting Mongo Db...");

  mongoose
    .connect("mongodb://localhost:27017/decotech")
    .then(() => {
      console.log("Database Connected");
    })
    .catch((error) => {
      console.log("Some problem in connecting database");
    });
};
