import { useState, useEffect } from 'react';
import './OfflineIndicator.css';

function OfflineIndicator() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const goOnline = () => setIsOnline(true);
        const goOffline = () => setIsOnline(false);

        window.addEventListener('online', goOnline);
        window.addEventListener('offline', goOffline);

        return () => {
            window.removeEventListener('online', goOnline);
            window.removeEventListener('offline', goOffline);
        };
    }, []);

    return (
        <div className="offline-indicator">
            <span className={`offline-indicator__dot ${isOnline ? '' : 'offline-indicator__dot--offline'}`} />
            <span className="offline-indicator__text">
                {isOnline ? 'Offline Ready' : 'Offline Mode'}
            </span>
        </div>
    );
}

export default OfflineIndicator;
