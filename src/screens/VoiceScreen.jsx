import { Link } from 'react-router-dom';

function VoiceScreen() {
    return (
        <div className="placeholder-screen">
            <h1>🎙 Voice Emergency Mode</h1>
            <p>Voice detection coming in Phase 2</p>
            <div className="nav-links">
                <Link to="/home" className="nav-btn primary">← Back to Home</Link>
            </div>
        </div>
    );
}

export default VoiceScreen;
