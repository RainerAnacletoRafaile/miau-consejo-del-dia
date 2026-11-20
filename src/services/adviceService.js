import { advices } from '../data/advices.js';

export function createDailyAdvice(moodId) {
  const options = advices[moodId] || [];
  if (!options.length) return null;

  // La elección queda guardada para que no cambie durante el día.
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}