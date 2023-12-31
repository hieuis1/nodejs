import fetcher from "./fetcher";

export const upLoadAvatar = async (payload) => {
  try {
    let formData = new FormData();
    formData.append("avatar", payload);
    const data = await fetcher.post("/upload/upload-avatar", formData);
    return data;
  } catch (error) {
    return error;
  }
};

export const uploadImg = async (payload) => {
  try {
    const { img, tieuDe, moTa } = payload;
    let formData = new FormData();
    formData.append("image", img);
    formData.append("tieuDe", tieuDe);
    formData.append("moTa", moTa);
    const data = await fetcher.post("/upload/upload-img", formData);
    return data;
  } catch (error) {
    return error;
  }
};
