import { ClientModel } from './../models/schema';
import { Request, Response } from "express";

export const updateClients = async (req:Request,res:Response)=>{
    const {id} = req.params;
    const {name, email, address, phone, cpf} = req.body;
    
        if (name || email || address || phone|| cpf){
            const updateClient = await ClientModel.findByIdAndUpdate(id, { name, email, address, phone, cpf}); 
            return res.status(200).json(updateClient);
        }        
}