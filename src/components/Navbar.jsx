import React from 'react';
import '../Menu.css'; //

function Navbar({ cambiarPagina, cerrarSesion, rol }) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Tacobar</div>

            <div className="navbar-right-side">
                <div className="navbar-links">
                    <button onClick={() => cambiarPagina('menu')}>Menú</button>
                    <button onClick={() => cambiarPagina('sucursales')}>Sucursales</button>
                    <button onClick={() => cambiarPagina('acerca')}>Acerca de Nosotros</button>
                </div>

                <div className="navbar-actions">
                    {rol === 'admin' && (
                        <button className="btn-admin-panel" onClick={() => cambiarPagina('admin')}>
                            ⚙️ Panel de Control
                        </button>
                    )}
                    <button className="btn-logout" onClick={cerrarSesion}>
                        Salir
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;