const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ClientSchemma = new Schema({
    id:ObjectId,
    name: String,
    email: String,
    phone: Number,
    address: String,
    cpf: Number
});

export const ClientModel = mongoose.model('Clients', ClientSchemma);