export default function Home({ onStart }) {
  return (
    <main className="screen home-screen">
      <div className="brand-mark" aria-hidden="true">🐾</div>
      <p className="eyebrow">UN PEQUEÑO ESPACIO PARA TI</p>
      <h1>MIAU<br /><span>Consejo del Día</span></h1>
      <p className="intro">Un pequeño mensaje para acompañarte, según cómo te sientas hoy.</p>
      <div className="home-mascot">
        <div className="mascot-placeholder">
          <span className="mascot-emoji">🐱</span>
          <span className="mascot-caption">Aquí estará tu michi</span>
        </div>
      </div>
      <div className="welcome-note">
        <h2>¡Holaaa!</h2>
        <p>Soy tu michi y estoy aquí para darte un consejo especial cada día.</p>
      </div>
      <button className="primary-button" onClick={onStart}>Mi día <span aria-hidden="true">→</span></button>
    </main>
  );
}