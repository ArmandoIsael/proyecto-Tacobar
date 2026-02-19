// src/components/TacoCard.jsx
import React from 'react';

function TacoCard({ taco, agregarAlCarrito }) {
    return (
        <div className="card">
            <img src={taco.imagen} alt={taco.nombre} className="card-image" />

            <div className="card-body">
                <h3>{taco.nombre}</h3>
                <p className="description">{taco.descripcion}</p>
                <div className="card-footer">
                    <span className="price">${taco.precio}</span>
                    <button
                        className="btn-add"
                        onClick={() => agregarAlCarrito(taco)}
                    >
                        Agregar +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TacoCard;