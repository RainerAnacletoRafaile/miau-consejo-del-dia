import { advices } from '../data/advices.js';

export function createDailyAdvice(moodId, usedAdvices = []) {
  const options = advices[moodId] || [];
  const available = options.filter((message) => !usedAdvices.includes(message));

  // Evita repetir consejos de esta emoción hasta agotar su biblioteca.
  // Si se agotan, reinicia el ciclo para que la aplicación siga funcionando.
  const pool = available.length ? available : options;
  if (!pool.length) return null;

  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}