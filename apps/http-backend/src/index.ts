import express from "express";
import {prismaClient} from "@repo/db/prismaClient";

const app = express();

app.listen(3300,async()=>{
     console.log("Server is running on port 3300");
})