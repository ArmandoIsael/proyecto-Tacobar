import React from 'react';

function TacoCard({ taco, onAdd }) {
    return (
        <div className="card">
            <img src={taco.imagen} alt={taco.nombre} />

            <div className="card-content">
                <h3>{taco.nombre}</h3>
                <p>{taco.descripcion}</p>

                <div className="card-footer">
                    <span className="precio">${taco.precio}</span>
                    <button className="btn-add" onClick={() => onAdd(taco)}>
                        Agregar +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TacoCard;