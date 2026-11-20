const STORAGE_KEY = 'miau-consejo-del-dia-v1';

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getDailySelection() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    return saved?.date === getTodayKey() ? saved : null;
  } catch {
    return null;
  }
}

export function saveDailySelection(selection) {
  const record = { ...selection, date: getTodayKey() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  return record;
}

export function todayLabel() {
  return new Intl.DateTimeFormat('es-PE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}