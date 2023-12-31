import express from "express";
import { getUser } from "../controller/userController.js";
import { verifyToken } from "../config/jwt.js";

const useRoute = express.Router();

useRoute.get("/getUser", verifyToken, getUser);

export default useRoute;
