import dotenv from "dotenv";
dotenv.config({});

console.log(process.env.X_RapidAPI_Key);

export const X_RapidAPI_Key = process.env.X_RapidAPI_Key;
export const X_RapidAPI_Host = process.env.X_RapidAPI_Host;
export const PORT = process.env.PORT || 3300;
