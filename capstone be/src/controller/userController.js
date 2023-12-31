import initModels from "../model/init-models.js";
import sequelize from "../model/connect.js";
import { response } from "../config/responeData.js";
import { decodeToken } from "../config/jwt.js";

const model = initModels(sequelize);

export const getUser = async (req, res) => {
  try {
    const token = req.headers.authorization;
    console.log(decodeToken(token));
    let data = await model.nguoi_dung.findAll({
      where: {
        nguoi_dung_id: decodeToken(token).data,
      },
    });

    response(200, res, "thanh cong", data);
  } catch (error) {
    res.send(error);
  }
};
