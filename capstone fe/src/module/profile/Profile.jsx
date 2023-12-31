import React, { useRef, useState } from "react";
import "./profile.css";
import { Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser } from "../../api/authApi";
import { upLoadAvatar } from "../../api/uploadApi";
import Swal from "sweetalert2";

const Profile = () => {
  const avatar = useRef();
  const [img, setImg] = useState(null);
  const { data, isPending } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  });
  const { mutate: handleAvatar } = useMutation({
    mutationFn: (value) => upLoadAvatar(value),
    onSuccess: (result) => {
      Swal.fire({
        title: "Cập nhật avatar thành công",
        icon: "success",
        confirmButtonColor: "red",
      }).then((kq) => {
        if (kq.isConfirmed) {
          window.location.reload();
        }
      });
    },
  });
  const choose = () => {
    avatar.current.click();
  };
  const chooseAvatar = (event) => {
    const data = event.target.files[0];
    handleAvatar(data);
  };

  if (!isPending) {
    return (
      <div id="profile">
        <div id="profile-form">
          <div className="profile-left">
            <input
              type="file"
              style={{ display: "none" }}
              ref={avatar}
              onChange={chooseAvatar}
            />
            <div className="img-avatar">
              {data
                ? data.data.content.map((item, index) => {
                    return (
                      <img
                        className="img-avatar"
                        key={index}
                        src={
                          item.avatar
                            ? item.avatar
                            : "https://api-private.atlassian.com/users/18b314b77b8fe0151f3a3410a7a57714/avatar"
                        }
                        alt=""
                      />
                    );
                  })
                : ""}
              <div className="camera" onClick={choose}>
                <CameraAltIcon className="camera-icon"></CameraAltIcon>
              </div>
            </div>
          </div>
          <div className="profile-right">
            {data.data.content.map((item, index) => {
              return (
                <form action="" key={index}>
                  <div className="profile-content">
                    <label htmlFor="">Tên người dùng</label>
                    <input value={item.ho_ten} type="text" />
                  </div>
                  <div className="profile-content">
                    <label htmlFor="">Email</label>
                    <input value={item.email} type="text" />
                  </div>
                  <div className="profile-content">
                    <label htmlFor="">Tuổi</label>
                    <input value={item.tuoi} type="text" />
                  </div>
                </form>
              );
            })}
          </div>
          <div className="btn-update">
            <Button variant="contained"> Cập nhật</Button>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
