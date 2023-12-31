import jwt from "jsonwebtoken";
import { response } from "./responeData.js";

export const createToken = (data) => {
  const token = jwt.sign({ data }, "bimat", { algorithm: "HS256" });
  return token;
};

export const decodeToken = (data) => {
  return jwt.decode(data);
};

export const checkToken = (data) => {
  return jwt.verify(data, "bimat", (error, decode) => {
    return error;
  });
};

export const verifyToken = (req, res, next) => {
  let token = req.headers.authorization;
  let check = checkToken(token);
  if (check == null) {
    next();
  } else {
    response(401, res, "Ko có quyên truy cập", "");
  }
};
