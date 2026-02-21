import React from 'react';
import TacoCard from './TacoCard';

const listaDeTacos = [
    {
        id: 1,
        nombre: "Tacos al Pastor",
        descripcion: "Test Desc 1",
        precio: 69,
        imagen: "https://preview.redd.it/mhk1qvbveei51.jpg?width=640&crop=smart&auto=webp&s=01b4cba0c8348170fd5a5ba0123b3b0edadad8b1"
    },
    {
        id: 2,
        nombre: "Tacos de Carnitas",
        descripcion: "Test Desc 2",
        precio: 999,
        imagen: "https://mccormick.widen.net/content/psgoyddpn4/jpeg/tacos_de_carnitas.jpg?crop=true&q=80&color=ffffffff&u=qwwekl&w=800&h=800"
    },
    {
        id: 3,
        nombre: "Tacos de Barbacoa",
        descripcion: "Test Desc 3",
        precio: 13,
        imagen: "https://web.didiglobal.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fn7hs0hadu6ro%2F7lmPiTaWPmOc8dFdhxHPbY%2Fedb2ed377eab77d3e255b3e88a6b7f0d%2Flos-tacos-de-barbacoa-son-mas-que-tus-mejores-aliados-para-la-cruda.jpg&w=3840&q=75"
    },
    {
        id: 4,
        nombre: "Tacos de Suadero",
        descripcion: "Test Desc 3",
        precio: 13,
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/13910/640x640/25776.jpg.jpg"
    },
    {
        id: 5,
        nombre: "Tacos de Cochinita Pibil",
        descripcion: "Test Desc 3",
        precio: 13,
        imagen: "https://www.hola.com/horizon/landscape/0f9aabceea03-tacos-cochinita-pibil-cocina-mexicana-t.jpg"
    }
];

function Menu({ agregarAlCarrito }) {
    return (
        <div className="menu-container">
            <h2 className="seccion-titulo">Nuestro Menú Tradicional 🌮</h2>

            <div className="menu-grid">
                {listaDeTacos.map((taco) => (
                    <TacoCard
                        key={taco.id}
                        taco={taco}
                        onAdd={agregarAlCarrito}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menu;