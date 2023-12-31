import dotenv from "dotenv";

dotenv.config();

const config = {
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  dialect: process.env.DB_DIALECT,
  post: process.env.DB_PORT,
};

export default config;
