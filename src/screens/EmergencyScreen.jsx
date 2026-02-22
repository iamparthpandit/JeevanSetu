import { useParams, Link } from 'react-router-dom';

function EmergencyScreen() {
    const { type } = useParams();

    const labels = {
        snake_bite: '🐍 Snake Bite',
        burns: '🔥 Burns',
        fracture: '🦴 Fracture',
        heatstroke: '🌡 Heatstroke',
    };

    return (
        <div className="placeholder-screen">
            <h1>{labels[type] || '⚠️ Unknown Emergency'}</h1>
            <p>Emergency guide for: <strong>{type}</strong></p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Step-by-step instructions coming in Phase 2
            </p>
            <div className="nav-links">
                <Link to="/home" className="nav-btn primary">← Back to Home</Link>
            </div>
        </div>
    );
}

export default EmergencyScreen;
