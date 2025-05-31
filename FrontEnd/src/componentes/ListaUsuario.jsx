import React from 'react';

function ListaUsuarios({ usuarios, handleEdit, handleDelete }) {
  return (
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
  );
}

export default ListaUsuarios;