# Proyecto Final Web

Este proyecto es una aplicación web para la **gestión de usuarios**, desarrollada con **React** en el frontend y **Node.js** + **Express** + **Sequelize** en el backend, utilizando **SQLite** como base de datos.

---

## Estructura del Proyecto

```
ProyectoFinalWeb/
│
├── BackEnd/
│   ├── app.js                # Servidor Express y rutas API REST
│   ├── conexion.js           # Configuración de Sequelize y conexión a SQLite
│   ├── package.json          # Dependencias del backend
│   ├── ProyectoFinal.sqlite  # Base de datos SQLite
│   └── models/
│       └── usuarios.js       # Modelo Sequelize para usuarios
│
└── FrontEnd/
    ├── src/
    │   ├── App.jsx           # Componente principal de React
    │   ├── App.css           # Estilos principales
    │   ├── index.css         # Estilos globales
    │   ├── main.jsx          # Punto de entrada de React
    │   └── componentes/
    │       ├── FormularioUsuarios.jsx # Formulario para agregar/editar usuarios
    │       └── ListaUsuario.jsx       # Tabla de usuarios
    ├── public/
    │   └── vite.svg
    ├── index.html
    ├── package.json          # Dependencias del frontend
    └── vite.config.js
```

---

## Descripción General

La aplicación permite:

- **Visualizar usuarios:** Lista todos los usuarios registrados.
- **Agregar usuario:** Crear nuevos usuarios con nombre, correo, teléfono y dirección.
- **Editar usuario:** Modificar los datos de un usuario existente.
- **Eliminar usuario:** Borrar usuarios de la base de datos.

---

## Componentes del Frontend

### 1. `App.jsx`

Es el **componente principal** de la aplicación. Se encarga de:

- Mantener el estado global de la lista de usuarios y el formulario.
- Realizar las peticiones al backend para obtener, agregar, actualizar y eliminar usuarios.
- Coordinar la edición y el reseteo del formulario.
- Renderizar los componentes `FormularioUsuario` y `ListaUsuarios`.

[Ver App.jsx](FrontEnd/src/App.jsx)

---

### 2. `FormularioUsuarios.jsx`

Componente de formulario reutilizable para **agregar o editar usuarios**.

- Recibe props para manejar el estado del formulario, el envío, la actualización y la cancelación de la edición.
- Cambia el texto del botón según si se está editando o agregando un usuario.
- Incluye campos para nombre, correo, teléfono y dirección.

[Ver FormularioUsuarios.jsx](FrontEnd/src/componentes/FormularioUsuarios.jsx)

---

### 3. `ListaUsuario.jsx`

Componente que muestra la **tabla de usuarios**.

- Recibe la lista de usuarios y funciones para editar o eliminar cada usuario.
- Muestra los datos y botones de acción para cada usuario.

[Ver ListaUsuario.jsx](FrontEnd/src/componentes/ListaUsuario.jsx)

---

## Backend

- **`app.js`**: Define las rutas REST para obtener, crear, actualizar y eliminar usuarios.
- **`conexion.js`**: Configura la conexión a la base de datos SQLite usando Sequelize.
- **`models/usuarios.js`**: Define el modelo de usuario con los campos: id, nombre, correo, teléfono y dirección.

---

## Instalación y Ejecución

### 1. Clona el repositorio

```bash
git clone <URL-del-repositorio>
cd ProyectoFinalWeb
```

### 2. Backend

```bash
cd BackEnd
npm install
node app.js
```
El backend estará disponible en `http://localhost:3000`.

### 3. Frontend

```bash
cd ../FrontEnd
npm install
npm run dev
```
El frontend estará disponible en `http://localhost:5173`.

---

## Uso

1. Abre el navegador y accede a `http://localhost:5173`.
2. Utiliza la interfaz para agregar, editar o eliminar usuarios.
3. Los cambios se reflejan en la base de datos SQLite a través de la API REST del backend.

---

## Tecnologías Utilizadas

- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express, Sequelize
- **Base de datos:** SQLite

---

## Créditos

- Autor: Guerrero Romero José Miguel

---

¡No dudes en modificar este README para adaptarlo a tus necesidades!
