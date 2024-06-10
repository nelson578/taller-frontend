package com.test.taller_backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.test.taller_backend.entity.Usuario;
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
