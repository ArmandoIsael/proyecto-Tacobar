import React from 'react';
import '../Menu.css'; //

function Navbar({ cambiarPagina, cerrarSesion }) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Tacobar</div>

            <div className="navbar-links">
                <button onClick={() => cambiarPagina('menu')}>Menú</button>
                <button onClick={() => cambiarPagina('sucursales')}>Sucursales</button>
                <button onClick={() => cambiarPagina('acerca')}>Acerca de Nosotros</button>
            </div>

            <button className="btn-logout" onClick={cerrarSesion}>
                Salir
            </button>
        </nav>
    );
}

export default Navbar;