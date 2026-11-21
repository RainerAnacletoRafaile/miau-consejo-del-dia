export default function Home({ onStart }) {
  return (
    <main className="screen home-screen">
      <img
        className="miau-logo"
        src="/images/logo/logo-miau.png"
        alt="MIAU - Consejo del Día"
      />
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
