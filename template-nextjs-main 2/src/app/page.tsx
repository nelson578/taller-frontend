'use client';

import React from 'react';
import ListaUsuarios from './componentes/ListaUsuarios';
import RegistrarUsuario from './componentes/RegistrarUsuario';

const HomePage = () => {
    return (
        <div>
            <h1>Aplicación de Usuarios</h1>
            <RegistrarUsuario />
            <ListaUsuarios />
        </div>
    );
};

export default HomePage;
