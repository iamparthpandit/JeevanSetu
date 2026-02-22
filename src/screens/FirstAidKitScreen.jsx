import { Link } from 'react-router-dom';

function FirstAidKitScreen() {
    return (
        <div className="placeholder-screen">
            <h1>🩹 First Aid Kit Guide</h1>
            <p>Kit categories coming in Phase 2</p>
            <div className="nav-links">
                <Link to="/home" className="nav-btn primary">← Back to Home</Link>
            </div>
        </div>
    );
}

export default FirstAidKitScreen;
