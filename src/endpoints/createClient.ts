import { Request, Response } from "express";
import { ClientModel } from "../models/schema";

export const createClient = async (req:Request, res:Response) => {
    const {name,email, phone, address, cpf} = req.body;
    let errorCode = 400
    try {

        const cpfExist = await ClientModel.findOne({cpf})
        const emailExist = await ClientModel.findOne({email})
        const phoneExist = await ClientModel.findOne({phone})

        if(cpfExist){
            errorCode = 422
            return res.status(errorCode).json({ message : 'Este cpf já está sendo utilizado por outro cliente.'})
        }
        if(emailExist){
            errorCode = 422
            return res.status(errorCode).json({ message : 'Este email já está sendo utilizado por outro cliente.'})
        }
        if(phoneExist){
            errorCode = 422
            return res.status(errorCode).json({ message : 'Este phone já está sendo utilizado por outro cliente.'})
        }

        if(!name || !email || !phone || !address || !cpf) {
            errorCode = 422
            return res.status(errorCode).json({ message : 'ops... esta faltando informacoes.. deve conter nome, email, telefone, endereco e cpf.'})
        }
       
        if(typeof name  !== 'string' || typeof email !== 'string' || typeof address !== 'string'){
            errorCode = 422
            return res.status(errorCode).json({ message : 'Nome e(ou) email e(ou) address devem ser do tipo string.'})
        }

     
        
        await ClientModel.create({name,email,phone,address,cpf})
        return res.status(200).send('Cliente cadastrado com sucesso...');
    } catch (error:any) {
        res.status(errorCode).json({ message: 'falha ao cadastrar o cliente.'})
    }
}