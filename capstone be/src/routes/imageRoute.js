import express from "express";
import { getAllImg } from "../controller/imageController.js";

const imageRoute = express.Router();

imageRoute.get("/get-all-image", getAllImg);

export default imageRoute;
