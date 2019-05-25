import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

// import route
import router from "./routes/index.route";

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// set route
app.use("/", router);

export default app;
