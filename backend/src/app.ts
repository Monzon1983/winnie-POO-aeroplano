import express from 'express';
import { Aeroplano, Helice, Alas } from './models/aeroplano';

const app = express();
app.use(express.json());

let flota: Aeroplano[] = [];

// CRUD
app.post('/aeroplanos', (req, res) => {
    const { id, helices, alas } = req.body;
    const nuevoAvion = new Aeroplano(id, new Helice(helices), new Alas(alas));
    flota.push(nuevoAvion);
    res.status(201).send(nuevoAvion.getInfo());
});

app.get('/aeroplanos', (req, res) => {
    res.json(flota.map(a => a.getInfo()));
});

app.delete('/aeroplanos/:id', (req, res) => {
    const { id } = req.params;
    flota = flota.filter(a => a.id !== parseInt(id));
    res.send({ mensaje: "Aeroplano eliminado" });
});

app.listen(3000, () => console.log("Backend corriendo en puerto 3000"));