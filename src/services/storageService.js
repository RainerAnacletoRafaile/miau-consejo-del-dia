const STORAGE_KEY = 'miau-consejo-del-dia-v1';

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function readStore() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || {};
  } catch {
    return {};
  }
}

export function getDailySelection() {
  const saved = readStore();
  return saved.date === getTodayKey() && saved.moodId && saved.advice
    ? saved
    : null;
}

export function getUsedAdvices(moodId) {
  const saved = readStore();
  return saved.usedAdvices?.[moodId] || [];
}

export function saveDailySelection(selection) {
  const previous = readStore();
  const usedAdvices = previous.usedAdvices || {};
  const moodHistory = usedAdvices[selection.moodId] || [];

  const record = {
    ...previous,
    ...selection,
    date: getTodayKey(),
    usedAdvices: {
      ...usedAdvices,
      [selection.moodId]: [...moodHistory, selection.advice],
    },
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  return record;
}

export function clearDailySelection() {
  const previous = readStore();
  const record = { ...previous, date: getTodayKey() };
  delete record.moodId;
  delete record.advice;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
}

export function todayLabel() {
  return new Intl.DateTimeFormat('es-PE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}