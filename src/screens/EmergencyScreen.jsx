import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SeverityBadge from '../components/SeverityBadge';
import './EmergencyScreen.css';

const emergencyData = {
    snake_bite: { title: 'Snake Bite', emoji: '🐍', severity: 'High Risk', color: '#E53E3E' },
    burns: { title: 'Burns', emoji: '🔥', severity: 'High Risk', color: '#ED8936' },
    fracture: { title: 'Fracture', emoji: '🦴', severity: 'Medium Risk', color: '#3182CE' },
    heatstroke: { title: 'Heatstroke', emoji: '🌡', severity: 'High Risk', color: '#ECC94B' },
};

const placeholderSteps = [
    { text: 'Step 1: Assess the situation and ensure safety.', note: 'Stay calm. Move away from danger.' },
    { text: 'Step 2: Call for help or direct someone to call.', note: 'Provide clear location details.' },
    { text: 'Step 3: Begin first aid following these steps.', note: 'Detailed instructions will appear here in Phase 3.' },
];

function EmergencyScreen() {
    const { type } = useParams();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const data = emergencyData[type];

    if (!data) {
        return (
            <div className="emergency-screen screen">
                <h1>⚠️ Unknown Emergency</h1>
                <button className="em-back-btn" onClick={() => navigate('/home')}>← Back to Home</button>
            </div>
        );
    }

    const step = placeholderSteps[currentStep];
    const totalSteps = placeholderSteps.length;

    return (
        <div className="emergency-screen screen">
            {/* Back button */}
            <button className="em-back-btn" onClick={() => navigate('/home')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
                Back
            </button>

            {/* Header */}
            <div className="em-header">
                <span className="em-emoji">{data.emoji}</span>
                <h1 className="em-title">{data.title}</h1>
                <SeverityBadge label={data.severity} color={data.color} />
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
                <div className="em-step-card__illustration">
                    <span style={{ fontSize: '3rem' }}>{data.emoji}</span>
                </div>
                <p className="em-step-card__text">{step.text}</p>
                <p className="em-step-card__note">{step.note}</p>
            </div>

            {/* Navigation */}
            <div className="em-nav">
                <button
                    className="em-nav-btn em-nav-btn--prev"
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep(currentStep - 1)}
                >
                    ← Previous
                </button>
                <button
                    className="em-nav-btn em-nav-btn--next"
                    disabled={currentStep === totalSteps - 1}
                    onClick={() => setCurrentStep(currentStep + 1)}
                    style={{ backgroundColor: data.color }}
                >
                    Next →
                </button>
            </div>
        </div>
    );
}

export default EmergencyScreen;
