import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class luu_anh extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    hinh_anh_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'hinh_anh',
        key: 'hinh_anh_id'
      }
    },
    nguoi_dung_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'hinh_anh',
        key: 'hinh_anh_id'
      }
    },
    ngay_luu: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'luu_anh',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nguoi_dung_id" },
          { name: "hinh_anh_id" },
        ]
      },
      {
        name: "hinh_anh_id",
        using: "BTREE",
        fields: [
          { name: "hinh_anh_id" },
        ]
      },
    ]
  });
  }
}
