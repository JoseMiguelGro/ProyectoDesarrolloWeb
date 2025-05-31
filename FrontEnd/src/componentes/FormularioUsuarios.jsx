import React from 'react';

function FormularioUsuario({ form, editId, handleChange, handleSubmit, handleUpdate, handleCancel }) {
  return (
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
        <button type="button" onClick={handleCancel}>
          Cancelar edición
        </button>
      )}
    </form>
  );
}

export default FormularioUsuario;