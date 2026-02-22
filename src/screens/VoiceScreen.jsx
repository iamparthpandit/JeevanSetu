import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import './VoiceScreen.css';

/**
 * Keyword map for intent detection.
 * Each key is a route suffix, value is an array of trigger words.
 */
const KEYWORD_MAP = {
    snake_bite: { keywords: ['snake', 'venom', 'serpent'], label: '🐍 Snake Bite' },
    burns: { keywords: ['burn', 'fire', 'flame', 'scald'], label: '🔥 Burns' },
    fracture: { keywords: ['fracture', 'bone', 'broken', 'crack'], label: '🦴 Fracture' },
    heatstroke: { keywords: ['heat', 'sun', 'heatstroke', 'sunstroke'], label: '🌡 Heatstroke' },
};

function detectIntent(transcript) {
    const lower = transcript.toLowerCase();
    for (const [type, entry] of Object.entries(KEYWORD_MAP)) {
        for (const kw of entry.keywords) {
            if (lower.includes(kw)) {
                return { type, route: `/emergency/${type}`, label: entry.label };
            }
        }
    }
    return null;
}

const SpeechRecognitionAPI = typeof window !== 'undefined'
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

function VoiceScreen() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const isDemo = searchParams.get('demo') === 'true';
    const [status, setStatus] = useState('idle'); // idle | listening | result | error | unsupported
    const [transcript, setTranscript] = useState('');
    const [matchedIntent, setMatchedIntent] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const recognitionRef = useRef(null);
    const hasNavigatedRef = useRef(false);
    const autoStartedRef = useRef(false);

    const isSupported = !!SpeechRecognitionAPI;

    // Set unsupported on mount; cleanup on unmount
    useEffect(() => {
        if (!isSupported) {
            setStatus('unsupported');
        }
        return () => {
            if (recognitionRef.current) {
                try { recognitionRef.current.stop(); } catch (_) { }
            }
        };
    }, [isSupported]);

    // Demo mode: auto-start listening on mount
    useEffect(() => {
        if (isDemo && isSupported && !autoStartedRef.current) {
            autoStartedRef.current = true;
            // Small delay to let the component render first
            const t = setTimeout(() => startListening(), 300);
            return () => clearTimeout(t);
        }
    }, [isDemo, isSupported]);

    const resetState = useCallback(() => {
        setStatus('idle');
        setTranscript('');
        setMatchedIntent(null);
        setErrorMessage('');
        hasNavigatedRef.current = false;
    }, []);

    const cancelListening = useCallback(() => {
        if (recognitionRef.current) {
            try { recognitionRef.current.stop(); } catch (_) { }
        }
        resetState();
    }, [resetState]);

    const startListening = useCallback(() => {
        if (!isSupported) return;

        // Reset everything
        resetState();

        const recognition = new SpeechRecognitionAPI();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-IN';

        recognition.onstart = () => {
            setStatus('listening');
        };

        recognition.onresult = (event) => {
            // Navigation guard — prevent double fires
            if (hasNavigatedRef.current) return;

            const text = event.results[0][0].transcript;
            setTranscript(text);

            const intent = detectIntent(text);
            if (intent) {
                hasNavigatedRef.current = true;
                setMatchedIntent(intent);
                setStatus('result');

                // Vibration feedback
                if ('vibrate' in navigator) {
                    navigator.vibrate(200);
                }

                setTimeout(() => {
                    navigate(intent.route);
                }, 1200);
            } else {
                setStatus('error');
                setErrorMessage('Emergency not recognized. Please try again.');
            }
        };

        recognition.onerror = (event) => {
            console.warn('[Voice] Error:', event.error);
            hasNavigatedRef.current = false;

            switch (event.error) {
                case 'not-allowed':
                    setStatus('error');
                    setErrorMessage('Microphone permission denied. Please allow access in browser settings.');
                    break;
                case 'no-speech':
                    setStatus('error');
                    setErrorMessage('No speech detected. Please try again.');
                    break;
                case 'audio-capture':
                    setStatus('error');
                    setErrorMessage('No microphone found. Please check your device.');
                    break;
                case 'network':
                    setStatus('error');
                    setErrorMessage('Network error. Voice recognition may not work offline on this browser.');
                    break;
                default:
                    setStatus('error');
                    setErrorMessage(`Recognition error: ${event.error}. Please try again.`);
            }
        };

        recognition.onend = () => {
            // Only reset to error if we were still listening (no result came)
            setStatus((prev) => {
                if (prev === 'listening') {
                    setErrorMessage('No speech detected. Please try again.');
                    return 'error';
                }
                return prev;
            });
        };

        recognitionRef.current = recognition;

        try {
            recognition.start();
        } catch (e) {
            setStatus('error');
            setErrorMessage('Could not start voice recognition.');
        }
    }, [isSupported, navigate, resetState]);

    return (
        <div className="voice-screen screen">
            {/* Back */}
            <button className="voice-back-btn" onClick={() => { cancelListening(); navigate('/home'); }}>
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

                {/* Mic Button Area */}
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
                        disabled={status === 'unsupported' || status === 'listening' || status === 'result'}
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

                {/* Cancel Button (only while listening) */}
                {status === 'listening' && (
                    <button className="voice-cancel-btn" onClick={cancelListening}>
                        Cancel
                    </button>
                )}

                {/* Status Feedback */}
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
                            <p className="voice-error-text">{errorMessage}</p>
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

                {/* Manual Fallback (always visible except during result) */}
                {status !== 'result' && (
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
