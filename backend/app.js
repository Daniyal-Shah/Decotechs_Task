import express from "express";
const app = express();

// import database connection
import { mongoConnect } from "./database/conn.js";

// importing users
import UserRoutes from "./routers/users.routes.js";

// Connecting database
mongoConnect();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/users", UserRoutes);

app.listen(8000, () => {
  console.log("Server running on 8000");
});
