import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _binh_luan from  "./binh_luan.js";
import _hinh_anh from  "./hinh_anh.js";
import _luu_anh from  "./luu_anh.js";
import _nguoi_dung from  "./nguoi_dung.js";

export default function initModels(sequelize) {
  const binh_luan = _binh_luan.init(sequelize, DataTypes);
  const hinh_anh = _hinh_anh.init(sequelize, DataTypes);
  const luu_anh = _luu_anh.init(sequelize, DataTypes);
  const nguoi_dung = _nguoi_dung.init(sequelize, DataTypes);

  hinh_anh.belongsToMany(hinh_anh, { as: 'nguoi_dung_id_hinh_anhs', through: luu_anh, foreignKey: "hinh_anh_id", otherKey: "nguoi_dung_id" });
  hinh_anh.belongsToMany(hinh_anh, { as: 'hinh_anh_id_hinh_anhs', through: luu_anh, foreignKey: "nguoi_dung_id", otherKey: "hinh_anh_id" });
  binh_luan.belongsTo(hinh_anh, { as: "hinh_anh", foreignKey: "hinh_anh_id"});
  hinh_anh.hasMany(binh_luan, { as: "binh_luans", foreignKey: "hinh_anh_id"});
  binh_luan.belongsTo(hinh_anh, { as: "nguoi_dung", foreignKey: "nguoi_dung_id"});
  hinh_anh.hasMany(binh_luan, { as: "nguoi_dung_binh_luans", foreignKey: "nguoi_dung_id"});
  luu_anh.belongsTo(hinh_anh, { as: "hinh_anh", foreignKey: "hinh_anh_id"});
  hinh_anh.hasMany(luu_anh, { as: "luu_anhs", foreignKey: "hinh_anh_id"});
  luu_anh.belongsTo(hinh_anh, { as: "nguoi_dung", foreignKey: "nguoi_dung_id"});
  hinh_anh.hasMany(luu_anh, { as: "nguoi_dung_luu_anhs", foreignKey: "nguoi_dung_id"});
  hinh_anh.belongsTo(nguoi_dung, { as: "nguoi_dung", foreignKey: "nguoi_dung_id"});
  nguoi_dung.hasMany(hinh_anh, { as: "hinh_anhs", foreignKey: "nguoi_dung_id"});

  return {
    binh_luan,
    hinh_anh,
    luu_anh,
    nguoi_dung,
  };
}
