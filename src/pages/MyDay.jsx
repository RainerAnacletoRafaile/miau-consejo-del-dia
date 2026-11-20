import { moods } from '../data/advices.js';
import CatMascot from '../components/CatMascot.jsx';
import AdviceCard from '../components/AdviceCard.jsx';
import { todayLabel } from '../services/storageService.js';

export default function MyDay({ selection, onChoose, onClear, onBack }) {
  const selectedMood = moods.find((mood) => mood.id === selection?.moodId);

  return (
    <main className="screen day-screen">
      <button className="back-link" onClick={onBack}>← Volver al inicio</button>
      <p className="eyebrow">MIAU CONSEJO DEL DÍA</p>
      <h1>Mi día <span>♡</span></h1>
      <p className="date-label">{todayLabel()}</p>

      {!selection ? (
        <section className="mood-entry">
          <h2 className="question">¿Cómo te sientes hoy?</h2>
          <p className="supporting-copy">Elige la emoción que más se parece a ti.</p>
          <div className="mood-grid">
            {moods.map((mood) => (
              <button className="mood-option" key={mood.id} onClick={() => onChoose(mood)}>
                <span className="mood-emoji">{mood.emoji}</span>
                <span>{mood.label}</span>
              </button>
            ))}
          </div>
        </section>
      ) : (
        <div className="result-content">
          <div className="already-picked">
            <span className="already-picked-icon" aria-hidden="true">♡</span>
            <p>Tu michi ya tiene un consejito preparado para ti hoy.</p>
          </div>
          <p className="selected-label">Hoy te sientes: <strong>{selectedMood.label}</strong></p>
          <CatMascot mood={selectedMood} />
          <AdviceCard advice={selection.advice} mood={selectedMood} />
          <p className="daily-lock">Guarda este mensajito en tu corazón. Mañana tendremos uno nuevo. ♡</p>
          <button className="secondary-button" onClick={onClear}>Limpiar selección</button>
          <button className="back-link" onClick={onBack}>Volver al inicio</button>
        </div>
      )}
    </main>
  );
}