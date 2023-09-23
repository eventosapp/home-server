import express, { Request, Response } from 'express';
import { Proyecto } from '../database/main/proyecto';

const routerProyectos = express.Router();

routerProyectos.get('/todos', async (req: Request, res: Response) => {
    try {
        const proyectoModel = new Proyecto();
        const proyectos = await proyectoModel.getAll()
        res.send(proyectos);
    } catch {
        res.status(500).send({ message: "Error al intentar conectar en la base de datos" });
    }
});

export { routerProyectos }