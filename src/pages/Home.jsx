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
        <img
          className="home-kitty"
          src="/images/gatitos/inicio.png"
          alt="Gatita MIAU abrazando un corazón"
        />
      </div>
      <div className="welcome-note">
        <h2>¡Holaaa! <span aria-hidden="true">♡</span></h2>
        <p>Soy tu michi y estoy aquí para darte un consejo especial cada día.</p>
      </div>
      <button className="primary-button" onClick={onStart}>
        Mi Día <span aria-hidden="true">→</span>
      </button>
    </main>
  );
}
