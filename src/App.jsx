import HomePage from './pages/Home';
import ThankYouPage from './pages/ThankYou';
import { Routes, Route } from 'react-router-dom';
// ==== MAIN APP COMPONENT ====
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;
