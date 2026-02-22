import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './SplashScreen.css';

function SplashScreen() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const isDemo = searchParams.get('demo') === 'true';

    useEffect(() => {
        const delay = isDemo ? 0 : 2500;
        const timer = setTimeout(() => {
            navigate('/home');
        }, delay);
        return () => clearTimeout(timer);
    }, [navigate, isDemo]);

    return (
        <div className="splash-screen">
            <div className="splash-content">
                <div className="splash-logo">
                    <span className="splash-logo__icon">🏥</span>
                    <div className="splash-logo__pulse" />
                </div>
                <h1 className="splash-title">Jeevan Setu</h1>
                <p className="splash-tagline">Offline Emergency First Aid Intelligence</p>
                <div className="splash-loader">
                    <div className="splash-loader__bar" />
                </div>
            </div>
        </div>
    );
}

export default SplashScreen;
