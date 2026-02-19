// src/components/Sucursales.jsx
import React from 'react';

const listaSucursales = [
    {
        id: 1,
        nombre: "Placeholder 1",
        direccion: "XXXXXXXXXXXXXXXX",
        telefono: "XXXXXXXXXXXXXXXX",
        horario: "XXXXXXXXXXXXXXXX",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.539572621183!2d-99.1654483251!3d19.43260768184513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6ad0ad053106519c!2sEl%20Moro!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
    },
    {
        id: 2,
        nombre: "Placeholder 2",
        direccion: "XXXXXXXXXXXXXXXX",
        telefono: "XXXXXXXXXXXXXXXX",
        horario: "XXXXXXXXXXXXXXXX",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.3456789!2d-99.1234567!3d19.5432109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDMyJzM1LjYiTiA5OcKwMDcnMjQuNCJX!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
    },
    {
        id: 3,
        nombre: "Placeholder 3",
        direccion: "XXXXXXXXXXXXXXXX",
        telefono: "XXXXXXXXXXXXXXXX",
        horario: "XXXXXXXXXXXXXXXX",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1234567!2d-99.2345678!3d19.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIwJzQ0LjQiTiA5OcKwMTQnMDQuNCJX!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
    }
];

function Sucursales() {
    return (
        <div className="sucursales-container">
            <h1 className="seccion-titulo">Nuestras Sucursales</h1>
            <div className="sucursales-grid">
                {listaSucursales.map((sucursal) => (
                    <div key={sucursal.id} className="sucursal-card">
                        <div className="sucursal-info">
                            <h3>{sucursal.nombre}</h3>
                            <p><strong>Dirección:</strong> {sucursal.direccion}</p>
                            <p><strong>Teléfono:</strong> {sucursal.telefono}</p>
                            <p><strong>Horario:</strong> {sucursal.horario}</p>
                        </div>
                        <div className="sucursal-map">
                            <iframe
                                title={sucursal.nombre}
                                src={sucursal.mapaUrl}
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sucursales;