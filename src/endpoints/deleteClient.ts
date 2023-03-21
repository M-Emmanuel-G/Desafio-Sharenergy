import { ClientModel } from './../models/schema';
import { Request, Response } from "express";

export const deleteClients = async (req:Request,res:Response)=>{
    const {id} = req.params;
    let errorCode = 400
    
        try {
            const deleteClient = await ClientModel.findByIdAndDelete(id);
            return res.status(200).json(`O cliente ${deleteClient.name} foi deletado.`)
        } catch (error:any) {
            res.status(errorCode).json({ message: 'falha ao cadastrar o cliente.'})
        }
}