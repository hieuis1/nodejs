import express from "express";
import uploadCloud from "../config/cloudinary.js";
import { uploadAvatar, uploadImage } from "../controller/uploadController.js";
import { verifyToken } from "../config/jwt.js";

const uploadRoute = express.Router();

uploadRoute.post(
  "/upload-avatar",
  uploadCloud.single("avatar"),
  verifyToken,
  uploadAvatar
);
uploadRoute.post(
  "/upload-img",
  uploadCloud.single("image"),
  verifyToken,
  uploadImage
);
export default uploadRoute;
