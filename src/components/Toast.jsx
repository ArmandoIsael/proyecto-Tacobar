// src/components/Toast.jsx
import React from 'react';

function Toast({ notifications }) {
    return (
        <div className="toast-container">
            {notifications.map((notif) => (
                <div key={notif.id} className="toast-message">
                    🌮 {notif.texto}
                </div>
            ))}
        </div>
    );
}

export default Toast;