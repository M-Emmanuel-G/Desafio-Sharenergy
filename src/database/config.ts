const mongoose = require('mongoose');

export const connection = async ()=>{
    await mongoose.connect('mongodb+srv://Emmanuel-Goncalves:01031317@cluster0.e60gxy4.mongodb.net/test')
}