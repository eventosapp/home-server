import express, { Request, Response } from 'express';
import { db } from '../database/main';

const routerTest = express.Router();

routerTest.get('/test', async (req: Request, res: Response) => {
    try {
        await testDB();
        res.send({ success: true });
    } catch {
        res.status(500).send({ message: "Error al intentar conectar en la base de datos" });
    }
});

function testDB() {
    const database = new db();
    return database.connection();
}

export { routerTest }