
// 1. Cargar las herramientas
const express = require('express');
const path = require('path');

// 2. Crear la aplicación
const app = express();

// 3. Configurar EJS para las plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 4. Decirle a Express dónde están los archivos CSS/JS/IMG
app.use(express.static(path.join(__dirname, 'public')));

// 5. Definir rutas
app.get('/', (req, res) => {
  res.render('index'); // Muestra index.ejs
});

app.get('/singup', (req, res) => {
  res.render('singup'); // Muestra singup.ejs
});

app.get('/formulario', (req, res) => {
  res.render('formulario'); // Muestra formulario.ejs
});

// 6. Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});