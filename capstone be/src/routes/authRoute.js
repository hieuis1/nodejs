import express from "express";
import { loginUser, signUpUser } from "../controller/authController.js";

const authRoute = express.Router();

authRoute.post("/login", loginUser);
authRoute.post("/sign-up", signUpUser);

export default authRoute;
