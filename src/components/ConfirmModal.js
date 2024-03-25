import React from 'react';
import './ConfirmModal.css'; 

function ConfirmModal({ isOpen, onCancel, onConfirm }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content" id="confirm-modal">
          <h4>¿Estás seguro?</h4>
          <p>🤯 ¡Si borras esto, el universo entero se va a caer!</p>
          <div className="modal-actions">
            <button onClick={onCancel} className="btn btn-primary">Oh no!</button>
            <button onClick={onConfirm} className="btn btn-light">Yes baby!</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ConfirmModal;