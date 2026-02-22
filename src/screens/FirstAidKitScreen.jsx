import { useNavigate } from 'react-router-dom';
import firstAidKits from '../data/firstAidKits';
import './FirstAidKitScreen.css';

function FirstAidKitScreen() {
    const navigate = useNavigate();

    return (
        <div className="kit-screen screen">
            {/* Back */}
            <button className="kit-back-btn" onClick={() => navigate('/home')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
                Back
            </button>

            {/* Header */}
            <div className="kit-header">
                <span className="kit-header__badge">🩹 Medical Supply Guide</span>
                <h1 className="kit-header__title">First Aid Kit</h1>
                <p className="kit-header__subtitle">Essential tools every emergency kit must contain.</p>
            </div>

            {/* Cards */}
            <div className="kit-cards">
                {firstAidKits.map((item, index) => (
                    <button
                        key={item.id}
                        className="kit-card"
                        style={{ animationDelay: `${index * 0.08}s` }}
                        onClick={() => navigate(`/kit/${item.id}`)}
                    >
                        {/* Image Placeholder */}
                        <div className="kit-card__image">
                            <span className="kit-card__emoji">{item.icon}</span>
                        </div>

                        {/* Info */}
                        <div className="kit-card__body">
                            <h3 className="kit-card__title">{item.title}</h3>
                            <p className="kit-card__desc">{item.description}</p>
                            <span className="kit-card__category">{item.category}</span>
                        </div>

                        {/* Chevron */}
                        <div className="kit-card__action">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>
                    </button>
                ))}
            </div>

            {/* Footer Note */}
            <p className="kit-footer">
                Always verify contents and expiry dates regularly.
            </p>
        </div>
    );
}

export default FirstAidKitScreen;
