import React from 'react';
import '../css/navbar.css';

const Navbar = () => {
    return (
    <div className="background">
            <nav className="navbar">
            <div className="navbar-logo">
                <img className='logo' src="src/assets/Logo.png" alt="Logo"/>
            </div>

            {/*Icone de Busca*/}
            <div className='search-icon'>
                <img className='search' src="src/assets/search.png" alt="search" />
            </div>

            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#servicos">Serviços</a>
                <a href="#doacao">Doação</a>
                <a href="#documentação">Documentação</a>
                <a href="#relatos">Relatos</a>
            </div>

            {/* Icone do Usuário */}
            <div className="navbar-actions">
                <div className="profile">
                <img className="usuario" src="src/assets/User.png" alt="User" />
                </div>
                <div className="registrar">
                    <p>Registre-se</p>
                </div>
            </div>
        </nav>
    </div>
    );
};


export default Navbar;