import adhesiveImg from '../assets/kit/adhesive-bandages.webp';
import gauzeImg from '../assets/kit/sterile-gauze.jpg';
import coldPackImg from '../assets/kit/cold-pack.jpg';
import glovesImg from '../assets/kit/gloves.jpg';

const firstAidKits = [
    {
        id: 'adhesive-bandages',
        title: 'Adhesive Bandages',
        description: 'Provides protective coverage for minor cuts and abrasions.',
        category: 'Wound Care',
        icon: '🩹',
        image: adhesiveImg,
    },
    {
        id: 'sterile-gauze',
        title: 'Sterile Gauze Pads',
        description: 'Essential for dressing wounds and controlling bleeding.',
        category: 'Wound Dressing',
        icon: '🩻',
        image: gauzeImg,
    },
    {
        id: 'cold-pack',
        title: 'Instant Cold Pack',
        description: 'Reduces swelling and alleviates soft tissue pain.',
        category: 'Pain Relief',
        icon: '🧊',
        image: coldPackImg,
    },
    {
        id: 'disposable-gloves',
        title: 'Disposable Gloves',
        description: 'Prevents cross-contamination during first aid treatment.',
        category: 'Safety & Hygiene',
        icon: '🧤',
        image: glovesImg,
    },
];

export default firstAidKits;
