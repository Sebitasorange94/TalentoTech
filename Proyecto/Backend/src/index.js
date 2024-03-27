const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

// Creamos nuestro servidor
const app = express();

// Enlazar nuestra conexión con la base de datos

conectarBD();
// Vamos a trabajar con el entorno cors
app.use(cors());

app.use(express.json());
app.use('/api/clientes', require('../routes/rutas'));









// Definir ruta principal
app.get('/',(req,res) => {
    res.send('Hola mundo, desde la web!');
})

app.listen(3000,()=>{
    console.log('El servidor está conectado en http://localhost:3000/');
})





