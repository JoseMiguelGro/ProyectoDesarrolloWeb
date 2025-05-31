import { useEffect, useState } from 'react';
import './App.css';
import FormularioUsuario from './componentes/FormularioUsuarios';
import ListaUsuarios from './componentes/ListaUsuario';

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

  const handleCancel = () => {
    setEditId(null);
    setForm({ nombre: '', correo: '', telefono: '', direccion: '' });
  };

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <FormularioUsuario
        form={form}
        editId={editId}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleUpdate={handleUpdate}
        handleCancel={handleCancel}
      />
      <ListaUsuarios
        usuarios={usuarios}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;