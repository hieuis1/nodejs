import initModels from "../model/init-models.js";
import sequelize from "../model/connect.js";
import { response } from "../config/responeData.js";
import bcrypt from "bcrypt";
import { createToken } from "../config/jwt.js";
const model = initModels(sequelize);

export const loginUser = async (req, res) => {
  try {
    const { email, matKhau } = req.body;
    let userEmail = await model.nguoi_dung.findOne({
      where: {
        email,
      },
    });
    if (userEmail) {
      if (bcrypt.compareSync(matKhau, userEmail.mat_khau)) {
        const token = createToken(userEmail.nguoi_dung_id);
        response(200, res, "Đăng nhập thành công", {
          hoTen: userEmail.ho_ten,
          token,
        });
      } else {
        response(401, res, "Mật khẩu không đúng", "");
      }
    } else {
      response(401, res, "Email không tồn tại", "");
    }
  } catch (error) {
    response(401, res, "Không có quyền truy cập");
  }
};

export const signUpUser = async (req, res) => {
  try {
    const { email, hoTen, matKhau, tuoi } = req.body;
    let userEmail = await model.nguoi_dung.findOne({
      where: {
        email,
      },
    });
    if (userEmail) {
      response("401", res, "Email đã tồn tại", "");
      return;
    }
    await model.nguoi_dung.create({
      email,
      mat_khau: bcrypt.hashSync(matKhau, 10),
      tuoi,
      ho_ten: hoTen,
    });
    response(200, res, "thanh cong", "");
  } catch (error) {
    response(500, res, error, "");
  }
};
