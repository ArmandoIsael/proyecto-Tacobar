import React, { useState } from 'react';

function CheckoutModal({ carrito, setMostrarCarrito, mostrarCarrito, setCarrito }) {
    const [pagoExitoso, setPagoExitoso] = useState(false);

    if (!mostrarCarrito) return null;

    const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    const procesarPago = () => {
        setPagoExitoso(true);
        setTimeout(() => {
            setCarrito([]);
            setPagoExitoso(false);
            setMostrarCarrito(false);
        }, 3000);
    };

    const cerrarModal = () => {
        setPagoExitoso(false);
        setMostrarCarrito(false);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-carrito">
                <div className="modal-header">
                    <h2>{pagoExitoso ? "¡Gracias por tu compra!" : "Tu Pedido"}</h2>
                    <button className="btn-close" onClick={cerrarModal}>×</button>
                </div>

                {pagoExitoso ? (
                    <div className="success-container">
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                        <h3>Pago completado</h3>
                        <p>El pedido esta en proceso...</p>
                    </div>
                ) : (
                    <>
                        <div className="modal-body">
                            {carrito.length === 0 ? (
                                <p>El carrito está vacío. ¡Pide unos tacos!</p>
                            ) : (
                                carrito.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <span>{item.nombre} x{item.cantidad}</span>
                                        <span>${item.precio * item.cantidad}</span>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="modal-footer">
                            <div className="total-row">
                                <strong>Total a pagar:</strong>
                                <strong>${total}</strong>
                            </div>

                            {carrito.length > 0 && (
                                <div className="modal-actions">
                                    <button className="btn-empty" onClick={() => setCarrito([])}>
                                        Vaciar Carrito
                                    </button>
                                    <button className="btn-pay" onClick={procesarPago}>
                                        Pagar Ahora
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CheckoutModal;