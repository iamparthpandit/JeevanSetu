import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './VoiceScreen.css';

const KEYWORD_MAP = [
    { keywords: ['snake'], route: '/emergency/snake_bite', label: '🐍 Snake Bite' },
    { keywords: ['burn', 'fire'], route: '/emergency/burns', label: '🔥 Burns' },
    { keywords: ['fracture', 'bone', 'broken'], route: '/emergency/fracture', label: '🦴 Fracture' },
    { keywords: ['heat', 'sun', 'heatstroke'], route: '/emergency/heatstroke', label: '🌡 Heatstroke' },
];

function detectIntent(transcript) {
    const lower = transcript.toLowerCase();
    for (const entry of KEYWORD_MAP) {
        for (const kw of entry.keywords) {
            if (lower.includes(kw)) {
                return entry;
            }
        }
    }
    return null;
}

const SpeechRecognition = typeof window !== 'undefined'
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

function VoiceScreen() {
    const navigate = useNavigate();
    const [status, setStatus] = useState('idle'); // idle | listening | result | error | unsupported
    const [transcript, setTranscript] = useState('');
    const [matchedIntent, setMatchedIntent] = useState(null);
    const recognitionRef = useRef(null);

    const isSupported = !!SpeechRecognition;

    useEffect(() => {
        if (!isSupported) {
            setStatus('unsupported');
        }
        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.abort();
            }
        };
    }, [isSupported]);

    const startListening = useCallback(() => {
        if (!isSupported) return;

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-IN';

        recognition.onstart = () => {
            setStatus('listening');
            setTranscript('');
            setMatchedIntent(null);
        };

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            setTranscript(text);

            const intent = detectIntent(text);
            if (intent) {
                setMatchedIntent(intent);
                setStatus('result');
                setTimeout(() => {
                    navigate(intent.route);
                }, 1200);
            } else {
                setStatus('error');
            }
        };

        recognition.onerror = (event) => {
            console.warn('[Voice] Error:', event.error);
            if (event.error === 'no-speech') {
                setStatus('error');
                setTranscript('No speech detected.');
            } else {
                setStatus('error');
                setTranscript(`Error: ${event.error}`);
            }
        };

        recognition.onend = () => {
            if (status === 'listening') {
                // If still in listening state when ended, it means no result
                setStatus((prev) => (prev === 'listening' ? 'error' : prev));
            }
        };

        recognitionRef.current = recognition;
        try {
            recognition.start();
        } catch (e) {
            setStatus('error');
            setTranscript('Could not start voice recognition.');
        }
    }, [isSupported, navigate, status]);

    return (
        <div className="voice-screen screen">
            {/* Back */}
            <button className="voice-back-btn" onClick={() => navigate('/home')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
                Back
            </button>

            <div className="voice-content">
                <h1 className="voice-title">Voice Emergency</h1>
                <p className="voice-subtitle">
                    {status === 'unsupported'
                        ? 'Voice recognition is not supported in this browser.'
                        : 'Tap the microphone and describe your emergency.'}
                </p>

                {/* Mic Button */}
                <div className="voice-mic-area">
                    {status === 'listening' && (
                        <>
                            <div className="voice-ripple" />
                            <div className="voice-ripple voice-ripple--delayed" />
                            <div className="voice-ripple voice-ripple--delayed2" />
                        </>
                    )}
                    <button
                        className={`voice-mic-btn ${status === 'listening' ? 'voice-mic-btn--active' : ''}`}
                        onClick={startListening}
                        disabled={status === 'unsupported' || status === 'listening'}
                        aria-label="Start voice recognition"
                    >
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                            <line x1="12" y1="19" x2="12" y2="23" />
                            <line x1="8" y1="23" x2="16" y2="23" />
                        </svg>
                    </button>
                </div>

                {/* Status Text */}
                <div className="voice-status">
                    {status === 'listening' && (
                        <p className="voice-status__listening">
                            <span className="voice-dot" />
                            Listening...
                        </p>
                    )}

                    {status === 'result' && matchedIntent && (
                        <div className="voice-status__result">
                            <p className="voice-transcript">"{transcript}"</p>
                            <p className="voice-detected">Detected: <strong>{matchedIntent.label}</strong></p>
                            <p className="voice-redirecting">Redirecting...</p>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="voice-status__error">
                            {transcript && <p className="voice-transcript">"{transcript}"</p>}
                            <p className="voice-error-text">Emergency not recognized. Please try again.</p>
                            <button className="voice-retry-btn" onClick={startListening}>
                                🎙 Retry
                            </button>
                        </div>
                    )}

                    {status === 'unsupported' && (
                        <div className="voice-status__unsupported">
                            <p className="voice-error-text">
                                Your browser doesn't support voice recognition. Please use the manual buttons below.
                            </p>
                        </div>
                    )}
                </div>

                {/* Manual Fallback */}
                {(status === 'error' || status === 'unsupported' || status === 'idle') && (
                    <div className="voice-fallback">
                        <p className="voice-fallback__title">Or select manually:</p>
                        <div className="voice-fallback__grid">
                            <Link to="/emergency/snake_bite" className="voice-fallback__btn">🐍 Snake Bite</Link>
                            <Link to="/emergency/burns" className="voice-fallback__btn">🔥 Burns</Link>
                            <Link to="/emergency/fracture" className="voice-fallback__btn">🦴 Fracture</Link>
                            <Link to="/emergency/heatstroke" className="voice-fallback__btn">🌡 Heatstroke</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default VoiceScreen;
