export default function AdviceCard({ advice, mood }) {
  return (
    <section className="advice-card" aria-live="polite">
      <p className="eyebrow">TU CONSEJO DE HOY</p>
      <h2>{mood.emoji} Un mensaje para ti</h2>
      <p className="advice-text">“{advice}”</p>
    </section>
  );
}