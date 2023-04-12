import { searchClientsById } from './endpoints/searchClientsByID';
import { updateClients } from './endpoints/updateClients';
import { showClients } from './endpoints/showClients';
import express from "express"
import cors from 'cors'
import { connection } from "./database/config"
import { createClient } from "./endpoints/createClient"
import { deleteClients } from './endpoints/deleteClient';
require('../src/database/config')

export const app = express()

app.use(express.json())

app.use(cors())

connection()

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get('/clients', showClients)
app.get('/clients/:id', searchClientsById)
app.post('/clients/create', createClient)
app.patch('/clients/:id', updateClients)
app.delete('/clients/:id', deleteClients)