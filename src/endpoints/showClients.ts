import { Request, Response } from "express";
import { ClientModel } from "../models/schema";

export const showClients = async (req:Request,res:Response)=>{

    const clients = await ClientModel.find()
    return res.status(200).json({clients});
}