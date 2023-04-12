"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const searchClientsByID_1 = require("./endpoints/searchClientsByID");
const updateClients_1 = require("./endpoints/updateClients");
const showClients_1 = require("./endpoints/showClients");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./database/config");
const createClient_1 = require("./endpoints/createClient");
const deleteClient_1 = require("./endpoints/deleteClient");
require('../src/database/config');
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
(0, config_1.connection)();
exports.app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
exports.app.get('/clients', showClients_1.showClients);
exports.app.get('/clients/:id', searchClientsByID_1.searchClientsById);
exports.app.post('/clients/create', createClient_1.createClient);
exports.app.patch('/clients/:id', updateClients_1.updateClients);
exports.app.delete('/clients/:id', deleteClient_1.deleteClients);
