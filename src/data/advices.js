export const moods = [
  { id: 'feliz', label: 'Feliz', emoji: '😸', description: '¡Comparte esa alegría!' },
  { id: 'alegre', label: 'Alegre', emoji: '🥰', description: 'Disfruta este momento bonito.' },
  { id: 'triste', label: 'Triste', emoji: '🥺', description: 'Está bien no sentirse bien.' },
  { id: 'molesta', label: 'Molesta', emoji: '😾', description: 'Date un momento para respirar.' },
  { id: 'tranquila', label: 'Tranquila', emoji: '😌', description: 'Disfruta tu calma.' },
];

const adviceParts = {
  feliz: {
    starts: ['Pss, pss...', 'Oye, personita bonita:', 'Miau, miau...', 'Un mensajito para ti:', 'Holiii, michi:', 'Escucha esto:', 'Tu michi te recuerda:', 'Hey, corazón:', 'Pss, pequeña alegría...', 'Con cariño, MIAU:'],
    middles: [
      'Disfruta esa sonrisa; hoy también merece ser un día especial.',
      'Guarda este momento bonito en tu corazoncito.',
      'Celebra tus pequeños logros, ¡también cuentan!',
      'No necesitas una razón enorme para sentirte feliz.',
      'Comparte tu alegría, pero guarda un poquito para ti.',
      'Haz eso que tanto te gusta y disfruta el ratito.',
      'A veces una canción bonita puede alegrarte el día.',
      'Permítete disfrutar sin pensar tanto en el mañana.',
      'Qué bonito es encontrar felicidad en las cosas sencillas.',
      'Sigue brillando, incluso en los días más comunes.',
    ],
    ends: ['🌷', '💗', '✨', '🐾', '🌼', '😸', '💕', '☀️', '🌈', '🍓'],
  },
  alegre: {
    starts: ['Pss, pss...', 'Oye, personita bonita:', 'Miau, miau...', 'Un mensajito para ti:', 'Holiii, michi:', 'Escucha esto:', 'Tu michi te recuerda:', 'Hey, corazón:', 'Pss, pequeña alegría...', 'Con cariño, MIAU:'],
    middles: [
      'No necesitas algo extraordinario para tener un día mágico.',
      'Disfruta las cositas pequeñas que hoy te hacen sonreír.',
      'Una canción favorita también puede ser un momento feliz.',
      'No dejes que las prisas te roben este ratito bonito.',
      'Comparte una sonrisa; quizá alguien también la necesita.',
      'Haz espacio para eso que te hace tanta ilusión.',
      'Lo sencillo también puede convertirse en un gran recuerdo.',
      'Mira a tu alrededor, seguro hay algo bonito por descubrir.',
      'Disfruta este momento sin preocuparte por lo que sigue.',
      'Que nunca te falten motivos pequeñitos para sonreír.',
    ],
    ends: ['🌷', '💗', '✨', '🐾', '🌼', '😸', '💕', '☀️', '🌈', '🥰'],
  },
  triste: {
    starts: ['Pss, pss...', 'Ven, personita bonita:', 'Miau, corazón...', 'Un abracito para ti:', 'Oye, pequeña:', 'Tu michi te dice:', 'Aquí estoy:', 'Respira un poquito:', 'Con cariño, MIAU:', 'Escúchame, ¿sí?'],
    middles: [
      'No tienes que fingir una sonrisa si hoy no te nace.',
      'Está bien ir despacito; no tienes que poder con todo.',
      'Llorar también está bien, no guardes todo en tu corazón.',
      'Un día difícil no define lo valiosa que eres.',
      'Háblate bonito, hoy necesitas tu propio cariño.',
      'Descansar un ratito también es una forma de avanzar.',
      'No estás sola; puedes buscar a alguien que te abrace.',
      'Date tiempo, no tienes que sentirte bien de inmediato.',
      'Mereces cariño incluso en tus días más grises.',
      'Un pasito pequeño también cuenta, personita bonita.',
    ],
    ends: ['🥺💗', '🌷', '🐾', '💕', '🌙', '🐱', '✨', '☁️', '💗', '🫂'],
  },
  molesta: {
    starts: ['Pss, pss...', 'Oye, personita bonita:', 'Miau, michi...', 'Un consejito para ti:', 'Respira un poquito:', 'Tu michi te recuerda:', 'Hey, corazón:', 'Pausa de michi:', 'Con cariño, MIAU:', 'Escucha esto:'],
    middles: [
      'Respira antes de responder; no todo necesita una reacción inmediata.',
      'Está bien sentir enojo, pero cuida lo que haces con él.',
      'Date un momento para pensar qué necesitas de verdad.',
      'Puedes poner límites sin dejar de hablar con respeto.',
      'Aléjate un ratito y vuelve cuando estés más tranquila.',
      'No permitas que un mal momento arruine todo tu día.',
      'Tu tranquilidad también merece ser cuidada.',
      'No tienes que resolverlo todo mientras estás molesta.',
      'Ser firme también puede hacerse con calma.',
      'Escucha tu enojo, pero no dejes que decida por ti.',
    ],
    ends: ['💗', '🌷', '🐾', '✨', '💕', '🐱', '🌼', '☁️', '🌙', '😾'],
  },
  tranquila: {
    starts: ['Pss, pss...', 'Oye, personita bonita:', 'Miau, michi...', 'Un mensajito para ti:', 'Quédate un ratito:', 'Tu michi te recuerda:', 'Hey, corazón:', 'Respira profundo:', 'Con cariño, MIAU:', 'Escucha esto:'],
    middles: [
      'Qué bonito cuando el corazón puede descansar un ratito.',
      'Disfruta este momento; no tienes que correr.',
      'Respira profundo y disfruta estar aquí, justo ahora.',
      'Tu ritmo también está bien, no te compares.',
      'Descansar no es perder el tiempo, también lo necesitas.',
      'A veces no hacer nada es justo lo que hace falta.',
      'Cuida esa paz que tanto bien le hace a tu corazón.',
      'No todo tiene que resolverse hoy, ve con calma.',
      'Disfruta las pequeñas cosas que te hacen sentir en casa.',
      'Permítete estar tranquila sin sentir culpa.',
    ],
    ends: ['🌙', '🌷', '💗', '🐾', '🐱', '☁️', '✨', '🌼', '💕', '😌'],
  },
};

// 10 aperturas x 10 mensajes x 10 cierres: 1,000 consejos breves por emoción.
export const advices = Object.fromEntries(
  Object.entries(adviceParts).map(([moodId, parts]) => {
    const messages = [];
    for (const start of parts.starts) {
      for (const middle of parts.middles) {
        for (const end of parts.ends) {
          messages.push(`${start} ${middle} ${end}`);
        }
      }
    }
    return [moodId, [...new Set(messages)]];
  })
);
