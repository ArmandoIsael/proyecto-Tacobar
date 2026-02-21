import React from 'react';
import '../Menu.css';

function Navbar({ cambiarPagina, cerrarSesion, rol, carrito, setMostrarCarrito }) {
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

                    <button className="btn-cart" onClick={() => setMostrarCarrito(true)}>
                        🛒 <span className="cart-badge">{carrito.reduce((acc, item) => acc + item.cantidad, 0)}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;