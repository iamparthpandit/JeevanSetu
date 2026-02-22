import { Routes, Route } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import VoiceScreen from './screens/VoiceScreen';
import EmergencyScreen from './screens/EmergencyScreen';
import UploadScreen from './screens/UploadScreen';
import FirstAidKitScreen from './screens/FirstAidKitScreen';
import './App.css';

function App() {
    return (
        <div className="app-shell">
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/voice" element={<VoiceScreen />} />
                <Route path="/emergency/:type" element={<EmergencyScreen />} />
                <Route path="/upload" element={<UploadScreen />} />
                <Route path="/kit" element={<FirstAidKitScreen />} />
                <Route path="/kit/:itemId" element={<FirstAidKitScreen />} />
            </Routes>
        </div>
    );
}

export default App;
