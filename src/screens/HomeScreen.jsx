import { Link } from 'react-router-dom';

function HomeScreen() {
    return (
        <div className="placeholder-screen">
            <h1>🏠 Home Screen</h1>
            <p>Emergency Control Panel</p>
            <div className="nav-links">
                <Link to="/emergency/snake_bite" className="nav-btn">🐍 Snake Bite</Link>
                <Link to="/emergency/burns" className="nav-btn">🔥 Burns</Link>
                <Link to="/emergency/fracture" className="nav-btn">🦴 Fracture</Link>
                <Link to="/emergency/heatstroke" className="nav-btn">🌡 Heatstroke</Link>
                <Link to="/upload" className="nav-btn">📷 Upload Injury</Link>
                <Link to="/kit" className="nav-btn">🩹 First Aid Kit</Link>
                <Link to="/voice" className="nav-btn primary">🎙 Voice Emergency</Link>
            </div>
        </div>
    );
}

export default HomeScreen;
