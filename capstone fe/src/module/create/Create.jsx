import { useRef, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./create.css";
import { Button } from "@mui/material";

import { useMutation } from "@tanstack/react-query";
import { uploadImg } from "../../api/uploadApi";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const inputRef = useRef();
  const [img, setImg] = useState(null);
  const navigate = useNavigate();
  const selectFile = () => {
    inputRef.current.click();
  };
  const handleDrag = (event) => {
    console.log(event.target);
  };
  const handleSelect = (event) => {
    let file = event.target.files[0];
    const url = URL.createObjectURL(file);
    file.preview = url;
    setImg(file);
  };
  const { mutate } = useMutation({
    mutationFn: (value) => uploadImg(value),
    onSuccess: () => {
      Swal.fire({
        title: "Đăng ảnh thành công",
        icon: "success",
        confirmButtonColor: "red",
      }).then((r) => {
        if (r.isConfirmed) {
          setImg(null);
          navigate("/");
        }
      });
    },
  });
  const { register, handleSubmit } = useForm({
    defaultValues: {
      tieuDe: "",
      moTa: "",
    },
  });
  const handleCreate = (value) => {
    let data = { ...value, img };
    mutate(data);
  };

  return (
    <div id="create">
      <div id="create-form">
        <div className="create-left">
          <div className="img-box" onClick={selectFile} onDrag={handleDrag}>
            {img ? (
              <img width={"100%"} src={img.preview} />
            ) : (
              <div className="img-br">
                <div className="img-icon">
                  <ArrowUpwardIcon className="icon"></ArrowUpwardIcon>
                </div>
                <div className="img-text">
                  <p>Chọn một tệp hoặc kéo thả tệp ở đây</p>
                </div>
                <input
                  onChange={(event) => handleSelect(event)}
                  style={{ display: "none" }}
                  ref={inputRef}
                  type="file"
                />
              </div>
            )}
          </div>
        </div>
        <div className="create-right">
          <form action="" onSubmit={handleSubmit(handleCreate)}>
            <div className="right-content">
              <label htmlFor="">Tiêu đề</label>
              <input
                {...register("tieuDe")}
                disabled={!img ? true : false}
                type="text"
              />
            </div>
            <div className="right-content">
              <label htmlFor="">Mô tả</label>
              <textarea
                disabled={!img ? true : false}
                name=""
                id=""
                cols="30"
                rows="5"
                {...register("moTa")}
              ></textarea>
            </div>
            <div className="btn-form">
              <Button type="submit" variant="contained">
                Đăng
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
