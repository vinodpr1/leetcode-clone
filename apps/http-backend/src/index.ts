import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import { appRoutes } from "./routes";

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/api", appRoutes);

app.listen(3300, async () => {
  console.log("Server is running on port 3300");
});
