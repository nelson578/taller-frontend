'use client';

import React, { useState, useEffect } from 'react';

function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('http://localhost:8082/api/usuarios'); // Cambia la URL según la configuración de tu servidor backend
                if (!response.ok) {
                    throw new Error('Error al obtener los usuarios');
                }
                const data = await response.json();
                setUsuarios(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUsuarios();
    }, []);

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.nombre} - {usuario.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaUsuarios;
