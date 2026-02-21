import React from 'react';

function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>Nuestra Historia</h1>
                <p className="subtitle">Acerca de Nosotros</p>
            </div>

            <section className="about-section">
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1470&auto=format&fit=crop"
                        alt="Preparando tacos al pastor"
                    />
                </div>
                <div className="about-content">
                    <h2>Origen</h2>
                    <p>
                        Tacobar fue fundado en 2026 por tres estudiantes universitarios con un objetivo fundamental: profesionalizar y modernizar la operación de la taquería tradicional mexicana.
                    </p>
                    <p>
                        Lo que comenzó como un proyecto académico de viabilidad comercial, se estructuró rápidamente en un modelo de negocio real. Nuestra meta es clara: ofrecer un producto estandarizado de alta calidad, optimizar los tiempos de servicio y mantener un control estricto sobre nuestros insumos.
                    </p>
                </div>
            </section>

            <section className="about-section reverse">
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Ingredientes frescos en la mesa"
                    />
                </div>
                <div className="about-content">
                    <h2>Nuestra Filosofía: Sin Atajos</h2>
                    <p>
                        En un mercado saturado de comida rápida, nosotros optamos por la calidad operativa. Creemos que un producto excelente requiere procesos controlados y respeto por la materia prima.
                    </p>
                    <ul>
                        <li>Tortillas hechas a mano diariamente con maíz nixtamalizado.</li>
                        <li>Salsas molcajeteadas cada mañana con ingredientes frescos.</li>
                        <li>Carnes premium marinadas bajo estándares estrictos.</li>
                    </ul>
                    <p>
                        En Tacobar garantizamos consistencia en cada visita, respaldada por un equipo comprometido con la excelencia gastronómica.
                    </p>
                </div>
            </section>

            <div className="about-footer">
                <h3>¡Gracias!</h3>
            </div>
        </div>
    );
}

export default About;