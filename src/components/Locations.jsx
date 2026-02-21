import React from 'react';

const listaSucursales = [
    {
        id: 1,
        nombre: "Tacobar Cetys",
        //direccion: "XXXXXXXXXXXXXXXX",
        telefono: "01-800-6363636",
        horario: "11:00 A.M - 11:00 P.M",
        mapaUrl: "https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1771698420642!5m2!1ses-419!2smx!6m8!1m7!1sbmtYm1eHcPmaUKwhOjmJew!2m2!1d32.50012827942282!2d-116.9293170036671!3f217.98984795602038!4f-15.944988956697784!5f0.7820865974627469"
    },
    {
        id: 2,
        nombre: "Tacobar Gustavo Díaz Ordaz",
        //direccion: "XXXXXXXXXXXXXXXX",
        telefono: "901-694-3132",
        horario: "3:00 P.M - 11:00 P.M",
        mapaUrl: "https://www.google.com/maps/embed?pb=!4v1771698630793!6m8!1m7!1sNWDKDwKAWCQ4JbetWep6-w!2m2!1d32.4860161503664!2d-116.9459070584842!3f23.88302839812069!4f-5.902660230990691!5f0.7820865974627469"
    },
    {
        id: 3,
        nombre: "Tacobar Los Álamos",
        //direccion: "XXXXXXXXXXXXXXXX",
        telefono: "366-279-5023",
        horario: "9:00 A.M - 11:00 P.M",
        mapaUrl: "https://www.google.com/maps/embed?pb=!4v1771698747701!6m8!1m7!1sOIsIwA-osJu3m8wwQIuz1Q!2m2!1d32.50899613576214!2d-116.9543686083293!3f95.8672708241382!4f-8.77859646802068!5f0.7820865974627469"
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