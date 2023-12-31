import express from "express";
import useRoute from "./userRoute.js";
import authRoute from "./authRoute.js";
import uploadRoute from "./uploadRoute.js";
import imageRoute from "./imageRoute.js";

const rootRoute = express.Router();

rootRoute.use("/user", useRoute);
rootRoute.use("/auth", authRoute);
rootRoute.use("/upload", uploadRoute);
rootRoute.use("/image", imageRoute);
export default rootRoute;
