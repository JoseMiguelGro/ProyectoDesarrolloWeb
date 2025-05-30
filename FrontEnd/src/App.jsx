import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    direccion: ''
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/usuarios')
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usuarioAEnviar = {
      ...form,
      telefono: Number(form.telefono)
    };
    const res = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuarioAEnviar)
    });
    if (res.ok) {
      const nuevoUsuario = await res.json();
      setUsuarios([...usuarios, nuevoUsuario]);
      setForm({ nombre: '', correo: '', telefono: '', direccion: '' });
    } else {
      alert('Error al agregar usuario');
    }
  };

  const handleEdit = (usuario) => {
    setEditId(usuario.id);
    setForm({
      nombre: usuario.nombre,
      correo: usuario.correo,
      telefono: usuario.telefono,
      direccion: usuario.direccion
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const usuarioAEnviar = {
      id: editId,
      ...form,
      telefono: Number(form.telefono)
    };
    const res = await fetch('http://localhost:3000/usuarios', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuarioAEnviar)
    });
    if (res.ok) {
      fetch('http://localhost:3000/usuarios')
        .then(res => res.json())
        .then(data => setUsuarios(data));
      setEditId(null);
      setForm({ nombre: '', correo: '', telefono: '', direccion: '' });
    } else {
      alert('Error al actualizar usuario');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Seguro que deseas borrar este usuario?')) return;
    const res = await fetch(`http://localhost:3000/usuarios/${id}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      setUsuarios(usuarios.filter(u => u.id !== id));
    } else {
      alert('Error al borrar usuario');
    }
  };

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <form onSubmit={editId ? handleUpdate : handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          name="correo"
          placeholder="Correo electrónico"
          value={form.correo}
          onChange={handleChange}
          required
        />
        <input
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          required
        />
        <input
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleChange}
          required
        />
        <button type="submit">{editId ? 'Guardar cambios' : 'Agregar usuario'}</button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setForm({ nombre: '', correo: '', telefono: '', direccion: '' });
            }}
          >
            Cancelar edición
          </button>
        )}
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre completo</th>
            <th>Correo electrónico</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.correo}</td>
              <td>{u.telefono}</td>
              <td>{u.direccion}</td>
              <td>
                <center>
                  <button onClick={() => handleEdit(u)}>Editar</button>
                  <button onClick={() => handleDelete(u.id)}>Borrar</button>
                </center>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;