"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const schema_1 = require("../models/schema");
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, address, cpf } = req.body;
    let errorCode = 400;
    try {
        const cpfExist = yield schema_1.ClientModel.findOne({ cpf });
        const emailExist = yield schema_1.ClientModel.findOne({ email });
        const phoneExist = yield schema_1.ClientModel.findOne({ phone });
        if (cpfExist) {
            errorCode = 422;
            return res.status(errorCode).json({ message: 'Este cpf já está sendo utilizado por outro cliente.' });
        }
        if (emailExist) {
            errorCode = 422;
            return res.status(errorCode).json({ message: 'Este email já está sendo utilizado por outro cliente.' });
        }
        if (phoneExist) {
            errorCode = 422;
            return res.status(errorCode).json({ message: 'Este phone já está sendo utilizado por outro cliente.' });
        }
        if (!name || !email || !phone || !address || !cpf) {
            errorCode = 422;
            return res.status(errorCode).json({ message: 'ops... esta faltando informacoes.. deve conter nome, email, telefone, endereco e cpf.' });
        }
        if (typeof name !== 'string' || typeof email !== 'string' || typeof address !== 'string') {
            errorCode = 422;
            return res.status(errorCode).json({ message: 'Nome e(ou) email e(ou) address devem ser do tipo string.' });
        }
        yield schema_1.ClientModel.create({ name, email, phone, address, cpf });
        return res.status(200).send('Cliente cadastrado com sucesso...');
    }
    catch (error) {
        res.status(errorCode).json({ message: 'falha ao cadastrar o cliente.' });
    }
});
exports.createClient = createClient;
