import { response } from "../config/responeData.js";
import sequelize from "../model/connect.js";
import initModels from "../model/init-models.js";
let model = initModels(sequelize);
export const getAllImg = async (req, res) => {
  try {
    let data = await model.hinh_anh.findAll();
    response(200, res, "thành công", data);
  } catch (error) {
    response(500, res, "thất bại", "");
  }
};

export const getImgDetail = async (req,res) =>{
    try {
        
    } catch (error) {
        
    }
}