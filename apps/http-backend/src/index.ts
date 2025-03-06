import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import { appRoutes } from "./routes";
import cookieParser from "cookie-parser";
import { PORT } from "./config/dotenvconfig";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", appRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
