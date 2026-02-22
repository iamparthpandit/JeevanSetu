import { useNavigate } from 'react-router-dom';
import EmergencyCard from '../components/EmergencyCard';
import VoiceButton from '../components/VoiceButton';
import OfflineIndicator from '../components/OfflineIndicator';
import './HomeScreen.css';

function HomeScreen() {
    const navigate = useNavigate();

    const emergencies = [
        { emoji: '🐍', title: 'Snake Bite', severity: 'High Risk', color: '#E53E3E', route: '/emergency/snake_bite' },
        { emoji: '🔥', title: 'Burns', severity: 'High Risk', color: '#ED8936', route: '/emergency/burns' },
        { emoji: '🦴', title: 'Fracture', severity: 'Medium Risk', color: '#3182CE', route: '/emergency/fracture' },
        { emoji: '🌡', title: 'Heatstroke', severity: 'High Risk', color: '#ECC94B', route: '/emergency/heatstroke' },
    ];

    return (
        <div className="home-screen screen">
            {/* Header */}
            <header className="home-header">
                <div className="home-header__left">
                    <h1 className="home-title">Jeevan Setu</h1>
                    <p className="home-subtitle">Emergency First Aid</p>
                </div>
                <OfflineIndicator />
            </header>

            {/* Emergency Cards */}
            <section className="home-section">
                <h2 className="home-section__title">Priority Emergencies</h2>
                <div className="home-cards">
                    {emergencies.map((e) => (
                        <EmergencyCard key={e.route} {...e} />
                    ))}
                </div>
            </section>

            {/* Action Buttons */}
            <section className="home-actions">
                <button className="action-btn action-btn--upload" onClick={() => navigate('/upload')}>
                    <span className="action-btn__icon">📷</span>
                    <span className="action-btn__text">Upload Injury</span>
                    <span className="action-btn__desc">AI Image Analysis</span>
                </button>

                <div className="action-btn-row">
                    <button className="action-btn action-btn--kit" onClick={() => navigate('/kit')}>
                        <span className="action-btn__icon">🩹</span>
                        <span className="action-btn__text">First Aid Kit</span>
                    </button>

                    <button className="action-btn action-btn--sos">
                        <span className="action-btn__icon">🚨</span>
                        <span className="action-btn__text">Emergency SOS</span>
                    </button>
                </div>
            </section>

            {/* Spacer for floating voice button */}
            <div style={{ height: '100px' }} />

            {/* Floating Voice Button */}
            <VoiceButton />
        </div>
    );
}

export default HomeScreen;
