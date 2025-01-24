import mongoose from 'mongoose';
import { app } from './app.js';
import connectiontotheDB from './config/dbconnection.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT , async(req ,res)=>{
    await connectiontotheDB();
    console.log(`App is running at ${PORT}`)
})