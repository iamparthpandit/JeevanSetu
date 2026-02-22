import { Link } from 'react-router-dom';

function UploadScreen() {
    return (
        <div className="placeholder-screen">
            <h1>📷 AI Injury Upload</h1>
            <p>Image analysis coming in Phase 2</p>
            <div className="nav-links">
                <Link to="/home" className="nav-btn primary">← Back to Home</Link>
            </div>
        </div>
    );
}

export default UploadScreen;
