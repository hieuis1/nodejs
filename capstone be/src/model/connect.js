import { Sequelize } from "sequelize";
import config from "../config/config.js";
const { database, user, port, dialect, password, host } = config;
const sequelize = new Sequelize(database, user, password, {
  host: host,
  port: port,
  dialect: dialect,
});

export default sequelize;
