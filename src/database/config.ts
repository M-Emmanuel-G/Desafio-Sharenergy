import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const DB_KEY = `${process.env.MONGODB}`

export const connection = async ()=>{
    await mongoose.connect(DB_KEY)
}
