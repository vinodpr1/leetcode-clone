import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import { appRoutes } from "./routes";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", appRoutes);

app.listen(3100, async () => {
  console.log("Server is running on port 3100");
});
