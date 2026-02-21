import { useState } from 'react';
import './Menu.css';
import './Login.css';
import Menu from "./components/Menu.jsx";
import Navbar from "./components/Navbar.jsx";
import Locations from "./components/Locations.jsx";
import Toast from "./components/Toast.jsx";
import CheckoutModal from "./components/CheckoutModal.jsx";

function App() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [paginaActual, setPaginaActual] = useState('menu');
    const [notificaciones, setNotificaciones] = useState([]);
    const [rol, setRol] = useState('');
    const [carrito, setCarrito] = useState([]);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    const agregarAlCarrito = (producto) => {
        setCarrito((prev) => {
            const existe = prev.find(item => item.id === producto.id);

            if (existe) {
                return prev.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            }
            return [...prev, { ...producto, cantidad: 1 }];
        });

        agregarNotificacion(producto.nombre);
    };

    const agregarNotificacion = (nombreTaco) => {
        const nuevaNotif = {
            id: Date.now(),
            texto: `¡${nombreTaco} añadido al carrito!`
        };

        setNotificaciones((prev) => {
            const listaActualizada = [...prev, nuevaNotif];
            if (listaActualizada.length > 5) {
                return listaActualizada.slice(1);
            }
            return listaActualizada;
        });

        setTimeout(() => {
            setNotificaciones((prev) => prev.filter(n => n.id !== nuevaNotif.id));
        }, 3000);
    };

    const loginManager = (e) => {
        e.preventDefault();

        if (user === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
            setRol('admin');
        } else if (user === 'usuario' && password === 'usuario') {
            setIsLoggedIn(true);
            setRol('usuario');
        } else {
            alert('¡Usuario o contraseña incorrectos!');
        }
    };

    const cerrarSesion = () => {
        setIsLoggedIn(false);
        setUser('');
        setPassword('');
        setPaginaActual('menu');
        setRol('');
    };

    if (isLoggedIn) {
        return (
            <div className="app-container">
                <Navbar
                    cambiarPagina={setPaginaActual}
                    cerrarSesion={cerrarSesion}
                    rol={rol}
                    carrito={carrito}
                    setMostrarCarrito={setMostrarCarrito}
                />

                <Toast notifications={notificaciones} />

                <CheckoutModal
                    carrito={carrito}
                    setMostrarCarrito={setMostrarCarrito}
                    mostrarCarrito={mostrarCarrito}
                    setCarrito={setCarrito}
                />

                <div className="contenido-principal">
                    {paginaActual === 'menu' && (
                        <Menu agregarAlCarrito={agregarAlCarrito} />
                    )}

                    {paginaActual === 'sucursales' && <Locations />}

                    {paginaActual === 'acerca' && (
                        <div style={{ padding: '20px', color: 'white' }}>
                            <h1>Acerca de Nosotros</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="login-bg">
            <div className="login-card">
                <h2>Tacobar</h2>
                <p style={{ marginBottom: '20px', color: '#eee' }}>Bienvenido de nuevo</p>

                <form onSubmit={loginManager}>
                    <div className="input-group">
                        <label>Usuario</label>
                        <input
                            type="text"
                            placeholder="Introduce tu usuario"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            placeholder="Introduce tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-login">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;