import { Button, Stack, TextField } from "@mui/material";
import "./signUp.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser, signUpApi } from "../../api/authApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (data) => signUpApi(data),
    onSuccess: () => {
      Swal.fire({
        title: "Đăng ký thành công",
        icon: "success",
        confirmButtonColor: "red",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    },
  });

  const schemaSignUp = yup.object({
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Vui lòng không để trống"),
    hoTen: yup.string().required("Vui lòng không để trống"),
    matKhau: yup.string().required("Vui lòng không để trống"),
    tuoi: yup.string().required("Vui lòng không để trống"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hoTen: "",
      email: "",
      matKhau: "",
      tuoi: "",
    },
    mode: "all",
    resolver: yupResolver(schemaSignUp),
  });

  const handleSign = (value) => {
    mutate(value);
  };

  return (
    <div id="sign-up">
      <div id="form-sign">
        <h4>Wellcome to my picture</h4>
        <p className="p-title">Đăng ký</p>
        <form action="" onSubmit={handleSubmit(handleSign)}>
          <Stack direction={"column"} spacing={3}>
            <TextField
              label="Họ tên"
              variant="outlined"
              {...register("hoTen")}
              error={Boolean(errors.hoTen)}
              helperText={Boolean(errors.hoTen) && errors.hoTen.message}
            />
            <TextField
              label="Email"
              variant="outlined"
              {...register("email")}
              error={Boolean(errors.email)}
              helperText={Boolean(errors.email) && errors.email.message}
            />
            <TextField
              label="Mật khẩu"
              variant="outlined"
              {...register("matKhau")}
              error={Boolean(errors.matKhau)}
              helperText={Boolean(errors.matKhau) && errors.matKhau.message}
            />
            <TextField
              label="Tuổi"
              variant="outlined"
              {...register("tuoi")}
              error={Boolean(errors.tuoi)}
              helperText={Boolean(errors.tuoi) && errors.tuoi.message}
            />
            <Button type="submit" variant="contained">
              Đăng ký
            </Button>
          </Stack>
        </form>
        <div className="path-login">
          <a href="/login">Bạn đã có tài khoản? Đăng nhập ngay</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
