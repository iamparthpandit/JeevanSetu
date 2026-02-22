/**
 * Inline SVG illustration placeholders for emergency steps.
 * Returns simple illustrative SVGs based on emergency type.
 * Will be replaced with Nano Banana SVGs later.
 */

const illustrations = {
    // Snake Bite
    snake_step1: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFF5F5" />
            <path d="M60 130 Q80 80 100 90 Q120 100 110 130 Q100 160 80 140 Z" fill="#E53E3E" opacity="0.2" />
            <path d="M70 110 Q90 70 110 80 T130 110" stroke="#E53E3E" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="85" cy="88" r="3" fill="#E53E3E" />
            <circle cx="95" cy="85" r="3" fill="#E53E3E" />
            <path d="M140 70 L130 65 L140 60" stroke="#E53E3E" strokeWidth="2" fill="none" strokeLinecap="round" />
            <text x="100" y="170" textAnchor="middle" fill="#C53030" fontSize="12" fontWeight="600">Move Away</text>
        </svg>
    ),
    snake_step2: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFF5F5" />
            <rect x="70" y="65" width="60" height="80" rx="12" fill="#E53E3E" opacity="0.15" />
            <rect x="78" y="73" width="44" height="64" rx="6" stroke="#E53E3E" strokeWidth="2" fill="white" />
            <circle cx="100" cy="125" r="6" stroke="#E53E3E" strokeWidth="2" fill="none" />
            <text x="100" y="100" textAnchor="middle" fill="#E53E3E" fontSize="10" fontWeight="600">CALL</text>
            <text x="100" y="112" textAnchor="middle" fill="#E53E3E" fontSize="8">112</text>
            <text x="100" y="170" textAnchor="middle" fill="#C53030" fontSize="12" fontWeight="600">Call Help</text>
        </svg>
    ),
    snake_step3: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFF5F5" />
            <path d="M60 90 L140 90" stroke="#E53E3E" strokeWidth="8" strokeLinecap="round" opacity="0.3" />
            <path d="M65 85 L135 85" stroke="#E53E3E" strokeWidth="2" strokeDasharray="6 4" />
            <path d="M65 95 L135 95" stroke="#E53E3E" strokeWidth="2" strokeDasharray="6 4" />
            <path d="M80 75 L80 105" stroke="#C53030" strokeWidth="1.5" />
            <path d="M120 75 L120 105" stroke="#C53030" strokeWidth="1.5" />
            <text x="100" y="170" textAnchor="middle" fill="#C53030" fontSize="12" fontWeight="600">Immobilize</text>
        </svg>
    ),
    snake_step4: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFF5F5" />
            <circle cx="100" cy="85" r="20" stroke="#E53E3E" strokeWidth="2" fill="none" />
            <circle cx="100" cy="85" r="14" stroke="#E53E3E" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
            <path d="M85 85 L80 75 M115 85 L120 75" stroke="#C53030" strokeWidth="1.5" strokeLinecap="round" />
            <text x="100" y="170" textAnchor="middle" fill="#C53030" fontSize="12" fontWeight="600">Remove Items</text>
        </svg>
    ),
    snake_step5: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFF5F5" />
            <circle cx="100" cy="80" r="15" fill="#E53E3E" opacity="0.15" />
            <path d="M90 80 Q100 70 110 80" stroke="#E53E3E" strokeWidth="2" fill="none" />
            <circle cx="95" cy="77" r="2" fill="#E53E3E" />
            <circle cx="105" cy="77" r="2" fill="#E53E3E" />
            <path d="M80 100 Q100 120 120 100" stroke="#E53E3E" strokeWidth="2" fill="none" strokeLinecap="round" />
            <text x="100" y="170" textAnchor="middle" fill="#C53030" fontSize="12" fontWeight="600">Monitor</text>
        </svg>
    ),

    // Burns
    burn_step1: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFFAF0" />
            <path d="M85 120 Q90 70 100 80 Q110 90 105 60 Q115 90 120 120 Z" fill="#ED8936" opacity="0.3" />
            <path d="M90 115 Q95 85 100 90 Q105 95 103 75 Q110 95 112 115 Z" fill="#ED8936" opacity="0.5" />
            <path d="M130 100 L140 90 M130 100 L145 100 M130 100 L140 110" stroke="#ED8936" strokeWidth="2" strokeLinecap="round" />
            <text x="100" y="170" textAnchor="middle" fill="#C05621" fontSize="12" fontWeight="600">Stop Burning</text>
        </svg>
    ),
    burn_step2: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFFAF0" />
            <path d="M80 60 Q85 80 80 100 Q75 120 80 140" stroke="#3182CE" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
            <path d="M100 55 Q105 75 100 95 Q95 115 100 135" stroke="#3182CE" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
            <path d="M120 60 Q125 80 120 100 Q115 120 120 140" stroke="#3182CE" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
            <text x="100" y="170" textAnchor="middle" fill="#C05621" fontSize="12" fontWeight="600">Cool Water</text>
        </svg>
    ),
    burn_step3: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFFAF0" />
            <circle cx="100" cy="85" r="20" stroke="#ED8936" strokeWidth="2" fill="none" />
            <path d="M88 80 L80 70 M112 80 L120 70" stroke="#C05621" strokeWidth="2" strokeLinecap="round" />
            <text x="100" y="170" textAnchor="middle" fill="#C05621" fontSize="12" fontWeight="600">Remove Items</text>
        </svg>
    ),
    burn_step4: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFFAF0" />
            <rect x="65" y="70" width="70" height="50" rx="8" fill="#ED8936" opacity="0.15" stroke="#ED8936" strokeWidth="2" />
            <path d="M70 80 L130 80 M70 90 L130 90 M70 100 L130 100 M70 110 L130 110" stroke="#ED8936" strokeWidth="1" opacity="0.3" />
            <text x="100" y="170" textAnchor="middle" fill="#C05621" fontSize="12" fontWeight="600">Cover Burn</text>
        </svg>
    ),
    burn_step5: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFFAF0" />
            <path d="M80 75 L100 60 L120 75 L120 105 L80 105 Z" stroke="#ED8936" strokeWidth="2" fill="#ED8936" opacity="0.15" />
            <path d="M95 105 L95 88 L105 88 L105 105" stroke="#ED8936" strokeWidth="2" fill="white" />
            <text x="100" y="170" textAnchor="middle" fill="#C05621" fontSize="12" fontWeight="600">Seek Help</text>
        </svg>
    ),

    // Fracture
    fracture_step1: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#EBF8FF" />
            <path d="M80 60 L80 140" stroke="#3182CE" strokeWidth="6" strokeLinecap="round" opacity="0.3" />
            <path d="M80 95 L85 90 L75 85 L85 80" stroke="#E53E3E" strokeWidth="2" fill="none" />
            <circle cx="80" cy="90" r="12" stroke="#E53E3E" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
            <text x="100" y="170" textAnchor="middle" fill="#2B6CB0" fontSize="12" fontWeight="600">Assess</text>
        </svg>
    ),
    fracture_step2: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#EBF8FF" />
            <rect x="73" y="65" width="54" height="75" rx="10" fill="#3182CE" opacity="0.15" />
            <rect x="80" y="72" width="40" height="60" rx="5" stroke="#3182CE" strokeWidth="2" fill="white" />
            <text x="100" y="100" textAnchor="middle" fill="#3182CE" fontSize="9" fontWeight="600">CALL</text>
            <text x="100" y="112" textAnchor="middle" fill="#3182CE" fontSize="7">112</text>
            <text x="100" y="170" textAnchor="middle" fill="#2B6CB0" fontSize="12" fontWeight="600">Call Help</text>
        </svg>
    ),
    fracture_step3: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#EBF8FF" />
            <rect x="70" y="70" width="60" height="60" rx="4" fill="#3182CE" opacity="0.1" stroke="#3182CE" strokeWidth="1.5" />
            <path d="M75 85 L125 85 M75 100 L125 100 M75 115 L125 115" stroke="#3182CE" strokeWidth="1" strokeDasharray="5 3" />
            <text x="100" y="170" textAnchor="middle" fill="#2B6CB0" fontSize="12" fontWeight="600">Splint</text>
        </svg>
    ),
    fracture_step4: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#EBF8FF" />
            <rect x="75" y="70" width="50" height="50" rx="8" fill="#BEE3F8" stroke="#3182CE" strokeWidth="2" />
            <path d="M85 82 Q100 75 115 82 Q115 95 100 100 Q85 95 85 82 Z" fill="#3182CE" opacity="0.2" />
            <text x="100" y="170" textAnchor="middle" fill="#2B6CB0" fontSize="12" fontWeight="600">Apply Ice</text>
        </svg>
    ),
    fracture_step5: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#EBF8FF" />
            <circle cx="100" cy="80" r="15" fill="#3182CE" opacity="0.15" />
            <path d="M93 78 Q100 72 107 78" stroke="#3182CE" strokeWidth="2" fill="none" />
            <circle cx="96" cy="76" r="2" fill="#3182CE" />
            <circle cx="104" cy="76" r="2" fill="#3182CE" />
            <text x="100" y="170" textAnchor="middle" fill="#2B6CB0" fontSize="12" fontWeight="600">Monitor</text>
        </svg>
    ),

    // Heatstroke
    heat_step1: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFFFF0" />
            <path d="M60 60 L100 40 L140 60 L140 110 Q100 130 60 110 Z" fill="#ECC94B" opacity="0.15" stroke="#ECC94B" strokeWidth="2" />
            <circle cx="100" cy="55" r="12" fill="#ECC94B" opacity="0.4" />
            <text x="100" y="170" textAnchor="middle" fill="#975A16" fontSize="12" fontWeight="600">Move to Shade</text>
        </svg>
    ),
    heat_step2: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFFFF0" />
            <rect x="73" y="65" width="54" height="75" rx="10" fill="#ECC94B" opacity="0.15" />
            <rect x="80" y="72" width="40" height="60" rx="5" stroke="#D69E2E" strokeWidth="2" fill="white" />
            <text x="100" y="100" textAnchor="middle" fill="#D69E2E" fontSize="9" fontWeight="600">CALL</text>
            <text x="100" y="112" textAnchor="middle" fill="#D69E2E" fontSize="7">112</text>
            <text x="100" y="170" textAnchor="middle" fill="#975A16" fontSize="12" fontWeight="600">Call Help</text>
        </svg>
    ),
    heat_step3: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFFFF0" />
            <path d="M75 70 Q80 100 75 130" stroke="#3182CE" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
            <path d="M95 65 Q100 95 95 125" stroke="#3182CE" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
            <path d="M115 70 Q120 100 115 130" stroke="#3182CE" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
            <path d="M70 90 L130 90" stroke="#ECC94B" strokeWidth="1" strokeDasharray="4 4" />
            <text x="100" y="170" textAnchor="middle" fill="#975A16" fontSize="12" fontWeight="600">Cool Body</text>
        </svg>
    ),
    heat_step4: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFFFF0" />
            <path d="M85 65 Q80 85 85 100 Q90 115 85 135 L115 135 Q110 115 115 100 Q120 85 115 65 Z" fill="#3182CE" opacity="0.1" stroke="#3182CE" strokeWidth="2" />
            <path d="M92 80 L108 80 M92 95 L108 95 M92 110 L108 110" stroke="#3182CE" strokeWidth="1" opacity="0.4" />
            <text x="100" y="170" textAnchor="middle" fill="#975A16" fontSize="12" fontWeight="600">Hydrate</text>
        </svg>
    ),
    heat_step5: (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#FFFFF0" />
            <circle cx="100" cy="80" r="15" fill="#ECC94B" opacity="0.2" />
            <path d="M93 78 Q100 72 107 78" stroke="#D69E2E" strokeWidth="2" fill="none" />
            <circle cx="96" cy="76" r="2" fill="#D69E2E" />
            <circle cx="104" cy="76" r="2" fill="#D69E2E" />
            <path d="M80 100 Q100 120 120 100" stroke="#ECC94B" strokeWidth="2" fill="none" />
            <text x="100" y="170" textAnchor="middle" fill="#975A16" fontSize="12" fontWeight="600">Monitor</text>
        </svg>
    ),
};

export function getIllustration(key) {
    return illustrations[key] || null;
}

export default illustrations;
