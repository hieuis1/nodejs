import { Alert, Button, Stack, TextField } from "@mui/material";

import "./login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../api/authApi";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../redux/Slice/authSlice";

const Login = () => {
  const disPatch = useDispatch();
  const [mess, setmess] = useState(null);
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (value) => loginApi(value),
    onSuccess: (data) => {
      if (data.response) {
        setmess(data.response.data.mess);
      } else {
        Swal.fire({
          title: "Đăng nhập thành công",
          icon: "success",
          confirmButtonText: "Tiếp tục",
        }).then((result) => {
          if (result.isConfirmed) {
            setmess(null);
            disPatch(LOGIN(data.data.content));
            navigate("/");
          }
        });
      }
    },
  });
  const schemaLogin = yup.object({
    email: yup
      .string()
      .required("Vui lòng không để trống")
      .email("Email không hợp lệ"),
    matKhau: yup.string().required("Vui lòng không để trống"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      matKhau: "",
    },
    mode: "all",
    resolver: yupResolver(schemaLogin),
  });
  const handleLogin = (value) => {
    mutate(value);
  };
  return (
    <div id="login">
      <div id="form-login" onSubmit={handleSubmit(handleLogin)}>
        <h4>Wellcome to my picture</h4>
        <p className="l-title">Đăng nhập</p>

        <form action="">
          <Stack direction={"column"} spacing={3}>
            {mess != null ? <Alert severity="error">{mess}</Alert> : ""}
            <TextField
              {...register("email")}
              label="Email"
              variant="outlined"
              error={Boolean(errors.email)}
              helperText={Boolean(errors.email) && errors.email.message}
            ></TextField>
            <TextField
              {...register("matKhau")}
              label="Mật khẩu"
              type="password"
              variant="outlined"
              error={Boolean(errors.matKhau)}
              helperText={Boolean(errors.matKhau) && errors.matKhau.message}
            ></TextField>

            <Button type="submit" variant="contained">
              Đăng nhập
            </Button>
          </Stack>
          <div className="path-sign">
            <a href="/sign-up">Bạn chưa có tài khoản? Đăng ký ngay</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
