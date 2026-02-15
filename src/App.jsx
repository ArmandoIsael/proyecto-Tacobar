import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginManager = (e) => {
        e.preventDefault();

        if (user === 'admin' && password === 'losdeadobadasongod') {
            setIsLoggedIn(true);
        } else {
            alert('¡Usuario o contraseña incorrectos!')
        }

    }

    if (isLoggedIn) {
        return (
            <div>
                <h1> ¡Bienvenido al Menú de Tacobar!</h1>
                <p>Test</p>
                <button onClick={() => setIsLoggedIn(false)}>Cerrar Sesión</button>
            </div>
        )
    }

    return (
        <div className="LoginContainer">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={loginManager}>
                <div>
                    <label>Usuario: </label>
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div>
                    <labeL>Contraseña: </labeL>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    )
}

export default App
