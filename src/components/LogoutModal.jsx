import React from 'react';

function LogoutModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-logout">
                <div className="modal-header">
                    <h2>Cerrar Sesión</h2>
                </div>
                <div className="modal-body text-center">
                    <p>¿Estás seguro de que quieres salir?</p>
                </div>
                <div className="modal-footer modal-actions-row">
                    <button className="btn-cancel" onClick={onClose}>
                        Cancelar
                    </button>
                    <button className="btn-confirm-logout" onClick={onConfirm}>
                        Salir
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogoutModal;