import express from "express";
const app = express();
import passport from "passport";
import cors from "cors";
// import database connection
import { mongoConnect } from "./database/conn.js";

// importing users
import UserRoutes from "./routers/users.routes.js";

// Connecting database
mongoConnect();

// Middlewares
app.use(passport.initialize());
app.use(cors({}));
app.use(express.json());
// app.use(express.urlencoded());

// Routes
app.use("/api/users", UserRoutes);

app.listen(8000, () => {
  console.log("Server running on 8000");
});
