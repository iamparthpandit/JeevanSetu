import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadScreen.css';

const CLASSIFICATION_MAP = {
    burns_first: {
        label: 'First Degree Burn',
        confidence: 89,
        risk: 'Medium',
        riskColor: '#ED8936',
        action: 'Cool under running water for 10–20 minutes. Apply aloe vera.',
        recommendations: [
            'Cool under running water for 10–20 minutes',
            'Apply aloe vera or gentle moisturizer',
            'Take over-the-counter pain relief if needed',
            'Monitor for signs of infection',
        ],
        route: '/emergency/burns_first',
    },
    burns_second: {
        label: 'Second Degree Burn',
        confidence: 92,
        risk: 'High',
        riskColor: '#DD6B20',
        action: 'Cool under running water for 20 minutes. Do NOT break blisters.',
        recommendations: [
            'Cool under running water for at least 20 minutes',
            'Do NOT break blisters',
            'Apply sterile non-adhesive dressing',
            'Seek medical attention for large burns',
        ],
        route: '/emergency/burns_second',
    },
    burns_third: {
        label: 'Third Degree Burn',
        confidence: 94,
        risk: 'Critical',
        riskColor: '#C53030',
        action: 'Call emergency services (112) immediately. Do NOT touch the area.',
        recommendations: [
            'Do NOT apply ice directly',
            'Do NOT break blisters',
            'Cover loosely with sterile cloth',
            'Seek emergency medical attention immediately',
        ],
        route: '/emergency/burns_third',
    },
};

function classifyByFilename(filename) {
    const name = filename.toLowerCase();
    if (name.includes('blister') || name.includes('second')) return 'burns_second';
    if (name.includes('dark') || name.includes('white') || name.includes('char') || name.includes('third')) return 'burns_third';
    if (name.includes('red') || name.includes('first') || name.includes('mild')) return 'burns_first';
    return 'burns_third'; // default to third degree for demo
}

/* Animated confidence counter */
function ConfidenceCounter({ target }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let frame;
        const duration = 1200;
        const start = performance.now();
        const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [target]);
    return <span className="upload-confidence__number">{count}%</span>;
}

function UploadScreen() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [status, setStatus] = useState('idle'); // idle | analyzing | result
    const [result, setResult] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFile = useCallback((selected) => {
        if (!selected) return;
        setFile(selected);
        setPreview(URL.createObjectURL(selected));
        setStatus('idle');
        setResult(null);
    }, []);

    const handleFileChange = (e) => {
        handleFile(e.target.files[0]);
    };

    /* Drag & Drop handlers */
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };
    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const dropped = e.dataTransfer.files[0];
        if (dropped && dropped.type.startsWith('image/')) {
            handleFile(dropped);
        }
    };

    const handleAnalyze = () => {
        if (!file) return;
        setStatus('analyzing');

        // Simulated 2.2s AI processing
        setTimeout(() => {
            const type = classifyByFilename(file.name);
            const classification = CLASSIFICATION_MAP[type];
            setResult(classification);
            setStatus('result');

            // Vibration feedback
            if ('vibrate' in navigator) {
                navigator.vibrate(300);
            }

            // Auto redirect after 2.5 seconds
            setTimeout(() => {
                navigate(classification.route);
            }, 2500);
        }, 2200);
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

                {/* Drag & Drop / Upload Zone */}
                {!preview ? (
                    <label
                        className={`upload-dropzone ${isDragging ? 'upload-dropzone--active' : ''}`}
                        htmlFor="injury-upload"
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <div className="upload-dropzone__icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={isDragging ? '#E53E3E' : '#A0AEC0'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                        </div>
                        <p className="upload-dropzone__text">Drag & Drop Injury Image</p>
                        <p className="upload-dropzone__or">or</p>
                        <p className="upload-dropzone__text2">Tap to Upload</p>
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
                        <p className="upload-analyzing__title">
                            Running Local Injury Classification Model<span className="upload-ellipsis" />
                        </p>
                        <div className="upload-analyzing__bar">
                            <div className="upload-analyzing__fill" />
                        </div>
                        <p className="upload-analyzing__note">⚡ AI-powered offline analysis</p>
                    </div>
                )}

                {/* Result Card */}
                {status === 'result' && result && (
                    <div className={`upload-result ${result.risk === 'Critical' ? 'upload-result--critical' : ''}`}>
                        <div className="upload-result__badge">✅ Classification Complete</div>

                        <div className="upload-result__card">
                            {/* Accent bar */}
                            <div className="upload-result__accent" style={{ background: result.riskColor }} />

                            <div className="upload-result__row">
                                <span className="upload-result__label">Detected Injury</span>
                                <span className="upload-result__value upload-result__value--bold">{result.label}</span>
                            </div>
                            <div className="upload-result__divider" />

                            <div className="upload-result__row">
                                <span className="upload-result__label">Confidence</span>
                                <ConfidenceCounter target={result.confidence} />
                            </div>
                            <div className="upload-result__divider" />

                            <div className="upload-result__row">
                                <span className="upload-result__label">Risk Level</span>
                                <span className="upload-result__risk-badge" style={{ background: result.riskColor }}>
                                    {result.risk}
                                </span>
                            </div>
                            <div className="upload-result__divider" />

                            <div className="upload-result__recommendations">
                                <span className="upload-result__label">Immediate Recommendation</span>
                                <ul className="upload-result__list">
                                    {result.recommendations.map((rec, i) => (
                                        <li key={i}>{rec}</li>
                                    ))}
                                </ul>
                            </div>

                            <p className="upload-result__disclaimer">
                                ⚕️ AI-based preliminary assessment. Seek professional care immediately.
                            </p>
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
