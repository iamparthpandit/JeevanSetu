import { useState } from 'react';
import './WarningModal.css';

function WarningModal({ warnings, onClose }) {
    if (!warnings || warnings.length === 0) return null;

    return (
        <div className="warning-overlay" onClick={onClose}>
            <div className="warning-modal" onClick={(e) => e.stopPropagation()}>
                <div className="warning-modal__header">
                    <span className="warning-modal__icon">⚠️</span>
                    <h2 className="warning-modal__title">What NOT To Do</h2>
                </div>

                <ul className="warning-modal__list">
                    {warnings.map((w, i) => (
                        <li key={i} className="warning-modal__item">
                            <span className="warning-modal__x">✕</span>
                            <span>{w}</span>
                        </li>
                    ))}
                </ul>

                <button className="warning-modal__close" onClick={onClose}>
                    Got It
                </button>
            </div>
        </div>
    );
}

export default WarningModal;
