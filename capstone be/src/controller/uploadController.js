import initModels from "../model/init-models.js";
import sequelize from "../model/connect.js";
import { decodeToken } from "../config/jwt.js";
import { response } from "../config/responeData.js";

let model = initModels(sequelize);
export const uploadAvatar = async (req, res) => {
  let file = req.file;
  let token = req.headers.authorization;
  let id = decodeToken(token).data;
  let user = await model.nguoi_dung.findOne({
    where: {
      nguoi_dung_id: id,
    },
  });

  await model.nguoi_dung.update(
    {
      ...user.dataValues,
      avatar: file.path,
    },
    {
      where: {
        nguoi_dung_id: id,
      },
    }
  );
  res.send("ok");
};

export const uploadImage = async (req, res) => {
  try {
    let file = req.file;
    let { tieuDe, moTa } = req.body;
    let token = req.headers.authorization;
    let id = decodeToken(token).data;
    await model.hinh_anh.create({
      ten_hinh: tieuDe,
      mo_ta: moTa,
      duong_dan: file.path,
      nguoi_dung_id: id,
    });
    response(200, res, "Đăng ảnh thành công", "");
  } catch (error) {
    response(401, res, "Ko có quyền truy cập");
  }
};
