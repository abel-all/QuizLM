import express from "express";
import { json } from "body-parser";
import userRoutes from "./routes/user";

const app = express();
app.use(json());
app.use("/users", userRoutes);

export default app;
