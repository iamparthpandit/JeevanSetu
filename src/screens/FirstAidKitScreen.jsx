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
                        {/* Image / Placeholder — centered top */}
                        <div className="kit-card__image-box">
                            {item.image ? (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="kit-card__img"
                                />
                            ) : (
                                <div className="kit-card__placeholder">
                                    <span className="kit-card__placeholder-icon">{item.icon}</span>
                                    <span className="kit-card__placeholder-label">Image</span>
                                </div>
                            )}
                        </div>

                        {/* Title Row — title + chevron */}
                        <div className="kit-card__title-row">
                            <h3 className="kit-card__title">{item.title}</h3>
                            <div className="kit-card__chevron">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="kit-card__desc">{item.description}</p>

                        {/* Category */}
                        <span className="kit-card__category">Category: {item.category}</span>
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
