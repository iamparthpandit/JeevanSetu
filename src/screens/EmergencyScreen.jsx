import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import emergencies from '../data/emergencies';
import SeverityBadge from '../components/SeverityBadge';
import WarningModal from '../components/WarningModal';
import { getIllustration } from '../assets/illustrations/EmergencyIllustrations';
import { speak, stopAudio } from '../utils/audio';
import './EmergencyScreen.css';

function EmergencyScreen() {
    const { type } = useParams();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [showWarning, setShowWarning] = useState(false);

    const data = emergencies[type];

    // Stop audio on unmount or type change
    useEffect(() => {
        return () => stopAudio();
    }, [type]);

    // Auto-speak when step changes
    useEffect(() => {
        if (data && data.steps[currentStep]) {
            speak(data.steps[currentStep].audioText);
        }
    }, [currentStep, type]);

    if (!data) {
        return (
            <div className="emergency-screen screen">
                <h1>⚠️ Unknown Emergency</h1>
                <button className="em-back-btn" onClick={() => navigate('/home')}>← Back to Home</button>
            </div>
        );
    }

    const step = data.steps[currentStep];
    const totalSteps = data.steps.length;
    const illustration = getIllustration(step.illustration);

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleReplay = () => {
        speak(step.audioText);
    };

    return (
        <div className="emergency-screen screen">
            {/* Back button */}
            <button className="em-back-btn" onClick={() => { stopAudio(); navigate('/home'); }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
                Back
            </button>

            {/* Header */}
            <div className="em-header">
                <span className="em-emoji">{data.emoji}</span>
                <h1 className="em-title">{data.title}</h1>
                <SeverityBadge label={data.severity === 'High' ? 'High Risk' : 'Medium Risk'} color={data.color} />
            </div>

            {/* Progress */}
            <div className="em-progress">
                <div className="em-progress__bar">
                    <div
                        className="em-progress__fill"
                        style={{ width: `${((currentStep + 1) / totalSteps) * 100}%`, backgroundColor: data.color }}
                    />
                </div>
                <span className="em-progress__text">Step {currentStep + 1} of {totalSteps}</span>
            </div>

            {/* Step Card */}
            <div className="em-step-card">
                {/* Illustration */}
                <div className="em-step-card__illustration">
                    {illustration || <span style={{ fontSize: '3rem' }}>{data.emoji}</span>}
                </div>

                {/* Step Title */}
                <h3 className="em-step-card__title">{step.title}</h3>

                {/* Description */}
                <p className="em-step-card__text">{step.description}</p>

                {/* Audio Replay */}
                <button className="em-replay-btn" onClick={handleReplay} aria-label="Replay audio">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                    <span>Replay Audio</span>
                </button>
            </div>

            {/* Warning Button */}
            <button className="em-warning-btn" onClick={() => setShowWarning(true)}>
                <span>⚠️</span>
                <span>What NOT To Do</span>
            </button>

            {/* Navigation */}
            <div className="em-nav">
                <button
                    className="em-nav-btn em-nav-btn--prev"
                    disabled={currentStep === 0}
                    onClick={handlePrev}
                >
                    ← Previous
                </button>
                <button
                    className="em-nav-btn em-nav-btn--next"
                    disabled={currentStep === totalSteps - 1}
                    onClick={handleNext}
                    style={{ backgroundColor: data.color }}
                >
                    {currentStep === totalSteps - 1 ? 'Done ✓' : 'Next →'}
                </button>
            </div>

            {/* Warning Modal */}
            {showWarning && (
                <WarningModal warnings={data.warning} onClose={() => setShowWarning(false)} />
            )}
        </div>
    );
}

export default EmergencyScreen;
