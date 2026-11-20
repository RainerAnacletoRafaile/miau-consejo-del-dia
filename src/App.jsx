import { useState } from 'react';
import Home from './pages/Home.jsx';
import MyDay from './pages/MyDay.jsx';
import { createDailyAdvice } from './services/adviceService.js';
import {
  getDailySelection,
  getUsedAdvices,
  saveDailySelection,
} from './services/storageService.js';

export default function App() {
  const [page, setPage] = useState('home');
  const [selection, setSelection] = useState(() => getDailySelection());

  function openMyDay() {
    // Actualiza la fecha y el consejo cada vez que se abre el módulo.
    // Así, si cambió el día mientras la web seguía abierta, se desbloquea la elección.
    setSelection(getDailySelection());
    setPage('day');
  }

  function chooseMood(mood) {
    // Una sola emoción y un solo consejo por día.
    if (selection) return;

    const usedAdvices = getUsedAdvices(mood.id);
    const advice = createDailyAdvice(mood.id, usedAdvices);
    const saved = saveDailySelection({ moodId: mood.id, advice });
    setSelection(saved);
  }

  return (
    <div className="app-shell">
      {page === 'home' ? (
        <Home onStart={openMyDay} />
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