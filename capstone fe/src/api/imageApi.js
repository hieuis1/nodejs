import fetcher from "./fetcher";

export const getAllImg = async () => {
  try {
    let data = await fetcher.get("/image/get-all-image");
    return data;
  } catch (error) {
    return error;
  }
};
