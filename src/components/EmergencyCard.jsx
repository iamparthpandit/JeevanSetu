import { useNavigate } from 'react-router-dom';
import SeverityBadge from './SeverityBadge';
import './EmergencyCard.css';

function EmergencyCard({ emoji, title, severity, color, route }) {
    const navigate = useNavigate();

    return (
        <button className="emergency-card" onClick={() => navigate(route)}>
            <div className="emergency-card__icon">{emoji}</div>
            <div className="emergency-card__info">
                <span className="emergency-card__title">{title}</span>
                {severity && <SeverityBadge label={severity} color={color} />}
            </div>
            <div className="emergency-card__arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </div>
        </button>
    );
}

export default EmergencyCard;
