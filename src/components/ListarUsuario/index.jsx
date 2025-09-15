// src\components\ListarUsuario\index.jsx

import React from 'react';
import './styles.css';


function ListarUsuario({ usuarios = [] }) {
  return (
    <div className="listar-usuario">
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            {usuario.nome} - {usuario.email} - {usuario.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarUsuario;
