const express = require('express');
const cors = require('cors');
const app = express();
const Usuarios = require('./models/usuarios');

app.use(cors());
app.use(express.json());

const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor corriendo en puerto ${puerto}`);
});

// Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Agregar usuario
app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, correo, telefono, direccion } = req.body;
    const nuevoUsuario = await Usuarios.create({ nombre, correo, telefono, direccion });
    res.json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar usuario
app.put('/usuarios', async (req, res) => {
  try {
    const { id, nombre, correo, telefono, direccion } = req.body;
    const actualizado = await Usuarios.update(
      { nombre, correo, telefono, direccion },
      { where: { id } }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar usuario
app.delete('/usuarios/:id', async (req, res) => {
  try {
    await Usuarios.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

