const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const Estudiantes = [
{
    nombre: "Seth Delgado",
    edad: 22,
},
{
    nombre: "conan",
    edad: 15,
},
{
    nombre: "Gloria Riquelme",
    edad: 23,
},
{
    nombre: "Roldofo Marciscano",
    edad: 22,
},
{
    nombre: "Zianni Pitti",
    edad: 22,
}
]

//intermediarios
app.use (bodyParser.json());
 

//Controladores
app.get('/api/estudiantes/', (req, res) => { 
    res.json( {
    estudiantes: Estudiantes,
        cantidad: Estudiantes.length

    });
});

app.post('/api/estudiantes/', (req, res) => {
    const { nombre, edad } = req.body;
    Estudiantes.push({ nombre, edad});
    res.json({ nombre, edad});
});

app.get('/api/estudiantes/:id', (req, res) => {
    res.json( Estudiantes[req.params.id]);
});

app.put('/api/estudiantes/:id', (req, res) => {
    const { nombre, edad }= req.body;
    Estudiantes[req.params.id] = { nombre, edad };
   return res.send(`La lista fue modificada`);
});

app.delete('/api/estudiantes/:id', (req, res) =>{
    Estudiantes[req.params.id] = { nombre:"", edad: ""}
return res.send (`el estudiante fue borrado ${req.params.id}`);
});


app.listen(PORT, () => {
        console.log(`Ejecutando en el puerto ${PORT}`);
});