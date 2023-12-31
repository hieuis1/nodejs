import React from "react";
import { useSelector } from "react-redux";

const IsLogout = ({ children }) => {
  const login = useSelector((state) => state.auth.isLogin);
  if (!login) {
    return children;
  }
};

export default IsLogout;
