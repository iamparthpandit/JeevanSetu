import './SeverityBadge.css';

function SeverityBadge({ label, color }) {
    const colorMap = {
        '#E53E3E': { bg: 'var(--red-light)', text: 'var(--red-dark)' },
        '#ED8936': { bg: 'var(--orange-light)', text: '#C05621' },
        '#ECC94B': { bg: 'var(--yellow-light)', text: '#975A16' },
        '#3182CE': { bg: 'var(--blue-light)', text: '#2B6CB0' },
        '#38A169': { bg: 'var(--green-light)', text: '#276749' },
    };

    const colors = colorMap[color] || { bg: 'var(--red-light)', text: 'var(--red-dark)' };

    return (
        <span
            className="severity-badge"
            style={{ background: colors.bg, color: colors.text }}
        >
            {label}
        </span>
    );
}

export default SeverityBadge;
