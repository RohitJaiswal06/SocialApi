import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import router from "./route/user-routes.js"
import postrouter from './route/post-routes.js';
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/user",router)
app.use("/api/post",postrouter)

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    app.listen(5000);
})
.then(()=>{
    console.log('Connected to mongodb')
})
.catch(err=>console.log(err));