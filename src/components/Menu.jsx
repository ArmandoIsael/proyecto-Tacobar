// src/components/Menu.jsx
import React from 'react';
import TacoCard from './TacoCard';

// Luego conectar esta parte a una base de datos
const listaDeTacos = [
    {
        id: 1,
        nombre: "Test 1",
        descripcion: "Test Desc 1",
        precio: 69,
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/40226/640x640/53273.jpg.webp"
    },
    {
        id: 2,
        nombre: "Test 2",
        descripcion: "Test Desc 2",
        precio: 999,
        imagen: "https://images.getrecipekit.com/20220622020606-opt_23112018-img_2431.jpeg?aspect_ratio=16:9&quality=90&"
    },
    {
        id: 3,
        nombre: "Test 3",
        descripcion: "Test Desc 3",
        precio: 13,
        imagen: "https://www.asaucykitchen.com/wp-content/uploads/2021/05/Instant-Pot-Adobada-Tacos_.jpg"
    },

];

function Menu({ agregarNotificacion }) {

    const manejarAgregar = (taco) => {
        agregarNotificacion(taco.nombre);
    };

    return (
        <div className="menu-container">
            <h2 className="seccion-titulo">TESTTTTTT</h2>

            <div className="menu-grid">
                {listaDeTacos.map((taco) => (
                    <TacoCard
                        key={taco.id}
                        taco={taco}
                        agregarAlCarrito={manejarAgregar}
                        //Carrito falso, cambiar despues por el real
                    />
                ))}
            </div>
        </div>
    );
}



export default Menu;