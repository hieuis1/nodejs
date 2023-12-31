import { Try } from "@mui/icons-material";
import fetcher from "./fetcher";

export const signUpApi = async (payload) => {
  try {
    let data = await fetcher.post("/auth/sign-up", payload);
    return data;
  } catch (error) {
    return error;
  }
};

export const getUser = async () => {
  try {
    let data = await fetcher.get("/user/getUser");
    return data;
  } catch (error) {
    return error;
  }
};

export const loginApi = async (payload) => {
  try {
    let data = await fetcher.post("auth/login", payload);
    return data;
  } catch (error) {
    return error;
  }
};
