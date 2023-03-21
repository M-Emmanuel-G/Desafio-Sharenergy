import { Request, Response } from "express";
import { ClientModel } from "../models/schema";

export const searchClientsById = async (req:Request,res:Response)=>{

    const {id} = req.params
    
    const clients = await ClientModel.findById(id)
    return res.status(200).json(clients);
}