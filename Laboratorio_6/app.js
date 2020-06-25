require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const connectDB  = require('./dbConfig');
const Estudiantes = require ('./models/Estudiantes');

const PORT = 3000;


//intermediarios
app.use (bodyParser.json());
 

//Controladores
app.get('/api/estudiantes/', async (req, res) => {
    const estudiantes = await Estudiantes.find().select('nombre edad');
  res.json({
        estudiantes,
      cantidad: estudiantes.length
    
    });
});

app.post('/api/estudiantes/', async (req, res) => {
    const { nombre, edad } = req.body;
    await Estudiantes.create({ nombre, edad});
    res.json({ nombre, edad});
});

app.get('/api/estudiantes/:id', async (req, res) => {
    try{
        const estudiante = await Estudiantes.findById(req.params.id).select('nombre edad');
        res.json(estudiante);
    } catch (error){
        console.log(error);
        res.json({});
    }
});

app.put('/api/estudiantes/:id', async (req, res) => {
    const { nombre, edad }= req.body;
    await Estudiantes.update({nombre, edad});
   return res.send(`La lista fue modificada`);
});

app.delete('/api/estudiantes/:id', async (req, res) =>{
    await Estudiantes.findOneAndDelete(req.params.id);
return res.send (`el estudiante fue borrado `);
});


connectDB().then (() => {
    app.listen(PORT, () => {
        console.log(`Ejecutando en el puerto ${PORT}`);
    });

});
