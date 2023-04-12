"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = void 0;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const ClientSchemma = new Schema({
    id: ObjectId,
    name: String,
    email: String,
    phone: Number,
    address: String,
    cpf: Number
});
exports.ClientModel = mongoose.model('Clients', ClientSchemma);
