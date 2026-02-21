import React from 'react';

function CheckoutModal({ carrito, setMostrarCarrito, mostrarCarrito, setCarrito }) {
    if (!mostrarCarrito) return null;

    const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    return (
        <div className="modal-overlay">
            <div className="modal-carrito">
                <div className="modal-header">
                    <h2>Tu Pedido</h2>
                    <button className="btn-close" onClick={() => setMostrarCarrito(false)}>×</button>
                </div>

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
                    <button className="btn-pay" onClick={() => alert("Procesando pago...")}>
                        Pagar Ahora
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutModal;