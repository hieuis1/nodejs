import { Login } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";

const IsLogin = ({ children }) => {
  const login = useSelector((state) => state.auth.isLogin);
  if (login) {
    return children;
  }
};

export default IsLogin;
