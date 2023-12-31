import express from "express";
import cors from "cors";
import rootRoute from "./src/routes/rootRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("."));
app.use(rootRoute);
app.listen(8080);
