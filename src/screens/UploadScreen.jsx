import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadScreen.css';

const CLASSIFICATION_MAP = {
    burns_first: {
        label: 'First Degree Burn',
        confidence: 89,
        risk: 'Medium',
        riskColor: '#ED8936',
        action: 'Cool under running water for 10–20 minutes. Apply aloe vera.',
        route: '/emergency/burns_first',
    },
    burns_second: {
        label: 'Second Degree Burn',
        confidence: 92,
        risk: 'High',
        riskColor: '#DD6B20',
        action: 'Cool under running water for 20 minutes. Do NOT break blisters.',
        route: '/emergency/burns_second',
    },
    burns_third: {
        label: 'Third Degree Burn',
        confidence: 95,
        risk: 'Critical',
        riskColor: '#C05621',
        action: 'Call emergency services (112) immediately. Do NOT touch the area.',
        route: '/emergency/burns_third',
    },
};

function classifyByFilename(filename) {
    const name = filename.toLowerCase();
    if (name.includes('blister') || name.includes('second')) return 'burns_second';
    if (name.includes('dark') || name.includes('white') || name.includes('char') || name.includes('third')) return 'burns_third';
    if (name.includes('red') || name.includes('first') || name.includes('mild')) return 'burns_first';
    return 'burns_first'; // default
}

function UploadScreen() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [status, setStatus] = useState('idle'); // idle | analyzing | result
    const [result, setResult] = useState(null);

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (!selected) return;
        setFile(selected);
        setPreview(URL.createObjectURL(selected));
        setStatus('idle');
        setResult(null);
    };

    const handleAnalyze = () => {
        if (!file) return;
        setStatus('analyzing');

        // Simulated 2-second AI processing delay
        setTimeout(() => {
            const type = classifyByFilename(file.name);
            const classification = CLASSIFICATION_MAP[type];
            setResult(classification);
            setStatus('result');

            // Vibration feedback
            if ('vibrate' in navigator) {
                navigator.vibrate(200);
            }

            // Auto redirect after 2.5 seconds
            setTimeout(() => {
                navigate(classification.route);
            }, 2500);
        }, 2000);
    };

    const handleReset = () => {
        setFile(null);
        setPreview(null);
        setStatus('idle');
        setResult(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="upload-screen screen">
            {/* Back */}
            <button className="upload-back-btn" onClick={() => navigate('/home')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
                Back
            </button>

            <div className="upload-content">
                <h1 className="upload-title">AI Injury Analysis</h1>
                <p className="upload-subtitle">Upload a photo of the injury for local AI classification.</p>

                {/* Upload Area */}
                {!preview ? (
                    <label className="upload-dropzone" htmlFor="injury-upload">
                        <div className="upload-dropzone__icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                        </div>
                        <p className="upload-dropzone__text">Tap to upload injury photo</p>
                        <p className="upload-dropzone__hint">JPG, PNG, WEBP supported</p>
                        <input
                            ref={fileInputRef}
                            id="injury-upload"
                            type="file"
                            accept="image/*"
                            capture="environment"
                            onChange={handleFileChange}
                            className="upload-file-input"
                        />
                    </label>
                ) : (
                    <div className="upload-preview-container">
                        <img src={preview} alt="Injury preview" className="upload-preview-img" />
                        <p className="upload-preview-name">{file?.name}</p>
                    </div>
                )}

                {/* Analyzing State */}
                {status === 'analyzing' && (
                    <div className="upload-analyzing">
                        <div className="upload-analyzing__spinner">
                            <div className="upload-spinner" />
                        </div>
                        <p className="upload-analyzing__title">Running Local Injury Classification Model...</p>
                        <div className="upload-analyzing__bar">
                            <div className="upload-analyzing__fill" />
                        </div>
                        <p className="upload-analyzing__note">⚡ Prototype local AI classifier</p>
                    </div>
                )}

                {/* Result Card */}
                {status === 'result' && result && (
                    <div className="upload-result">
                        <div className="upload-result__badge">✅ Classification Complete</div>

                        <div className="upload-result__card">
                            <div className="upload-result__row">
                                <span className="upload-result__label">Detected Injury</span>
                                <span className="upload-result__value upload-result__value--bold">{result.label}</span>
                            </div>
                            <div className="upload-result__divider" />
                            <div className="upload-result__row">
                                <span className="upload-result__label">Confidence</span>
                                <span className="upload-result__value">{result.confidence}%</span>
                            </div>
                            <div className="upload-result__divider" />
                            <div className="upload-result__row">
                                <span className="upload-result__label">Risk Level</span>
                                <span className="upload-result__risk" style={{ color: result.riskColor }}>{result.risk}</span>
                            </div>
                            <div className="upload-result__divider" />
                            <div className="upload-result__row upload-result__row--action">
                                <span className="upload-result__label">Immediate Action</span>
                                <span className="upload-result__action">{result.action}</span>
                            </div>
                        </div>

                        <p className="upload-result__redirect">Redirecting to emergency guide...</p>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="upload-actions">
                    {preview && status === 'idle' && (
                        <button className="upload-analyze-btn" onClick={handleAnalyze}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            Analyze Injury
                        </button>
                    )}

                    {(status === 'idle' && preview) && (
                        <button className="upload-reset-btn" onClick={handleReset}>
                            Try Another Photo
                        </button>
                    )}

                    {status === 'result' && (
                        <button className="upload-reset-btn" onClick={handleReset}>
                            Reset & Try Another
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UploadScreen;
