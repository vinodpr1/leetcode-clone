import express from "express";

const userRoutes:any = express.Router();

userRoutes.get("/signin", (req:any, res:any)=>{
    res.json({
        mesage:"Hii i'm healthy",
    })
});

export {userRoutes}

