export default function CatMascot({ mood }) {
  return (
    <div className="mascot-placeholder" aria-label="Espacio reservado para la ilustración de la gatita">
      <span className="mascot-emoji">{mood?.emoji || '🐱'}</span>
      <span className="mascot-caption">Aquí estará tu michi</span>
    </div>
  );
}