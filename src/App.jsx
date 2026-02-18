import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import './Menu.css'
import './Login.css'
import Menu from "./components/Menu.jsx"
import Navbar from "./components/Navbar.jsx";

function App() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [paginaActual, setPaginaActual] = useState('menu');

    const loginManager = (e) => {
        e.preventDefault();

        if (user === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
        } else {
            alert('¡Usuario o contraseña incorrectos!')
        }

    }

    const cerrarSesion = () => {
        setIsLoggedIn(false);
        setUser('');
        setPassword('');
        setPaginaActual('menu');
    }

    if (isLoggedIn) {
        return (

            <div className="app-container">
                <Navbar
                    cambiarPagina={setPaginaActual}
                    cerrarSesion={cerrarSesion}
                />

                <div className="contenido-principal">
                    {paginaActual === 'menu' && <Menu />}

                    {paginaActual === 'sucursales' && (
                        <div style={{padding: '20px', color: 'white'}}>
                            <h1>Nuestras Sucursales</h1>
                            <p>Sucursales y Google Maps API</p>
                        </div>
                    )}

                    {paginaActual === 'acerca' && (
                        <div style={{padding: '20px', color: 'white'}}>
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


        )
    }

    return (
        <div className="login-bg">

            <div className="login-card">
                <h2>Tacobar</h2>
                <p style={{marginBottom: '20px', color: '#eee'}}>Bienvenido de nuevo</p>

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
    )
}

export default App
