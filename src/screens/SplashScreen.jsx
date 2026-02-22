import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SplashScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 2500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="placeholder-screen">
            <h1>🏥 Jeevan Setu</h1>
            <p>Offline Emergency First Aid Intelligence</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                Loading...
            </p>
            <div className="nav-links">
                <Link to="/home" className="nav-btn primary">
                    Skip to Home →
                </Link>
            </div>
        </div>
    );
}

export default SplashScreen;
