import { useState } from 'react';
import Home from './pages/Home.jsx';
import MyDay from './pages/MyDay.jsx';
import { createDailyAdvice } from './services/adviceService.js';
import { getDailySelection, saveDailySelection } from './services/storageService.js';

export default function App() {
  const [page, setPage] = useState('home');
  const [selection, setSelection] = useState(() => getDailySelection());

  function chooseMood(mood) {
    // Si ya eligió hoy, no permitimos cambiar ni regenerar el consejo.
    if (selection) return;
    const advice = createDailyAdvice(mood.id);
    const saved = saveDailySelection({ moodId: mood.id, advice });
    setSelection(saved);
  }

  return (
    <div className="app-shell">
      {page === 'home' ? (
        <Home onStart={() => setPage('day')} />
      ) : (
        <MyDay
          selection={selection}
          onChoose={chooseMood}
          onBack={() => setPage('home')}
        />
      )}
      <footer className="site-footer">Hecho con cariño ♡</footer>
    </div>
  );
}