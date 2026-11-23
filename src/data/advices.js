export const moods = [
  { id: 'feliz', label: 'Feliz', emoji: '😸', description: '¡Comparte esa alegría!' },
  { id: 'alegre', label: 'Alegre', emoji: '🥰', description: 'Disfruta este momento bonito.' },
  { id: 'triste', label: 'Triste', emoji: '🥺', description: 'Está bien no sentirse bien.' },
  { id: 'molesta', label: 'Molesta', emoji: '😾', description: 'Date un momento para respirar.' },
  { id: 'tranquila', label: 'Tranquila', emoji: '😌', description: 'Disfruta tu calma.' },
];

const adviceParts = {
  feliz: {
    starts: ['Psst, noticia importante:', 'Oye, tú, sí, tú:', '¡Se solicita sonrisa por aquí!', 'Miau-¡buenos días!', 'A ver, estrella del día:', 'Interrumpimos tu día para decirte:', '¡Alerta de buena vibra!', 'Hola, criatura maravillosa:', 'Tu comité de michis informa:', 'Párale bola a esto:'],
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
    starts: ['Psst, tenemos un anuncio:', 'Oye, persona de buena vibra:', '¡Que alguien llame a la banda!', 'Miau, llegó tu dosis de alegría:', 'A ver, protagonista:', 'Este michi tiene algo que decirte:', '¡Sonríe, que no cuesta nada!', 'Atención, máquina de felicidad:', 'Tu club de fans imaginario te recuerda:', 'Un consejito recién salido del horno:'],
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
    starts: ['Ven, vamos pasito a pasito:', 'Oye, aquí no hay que fingir nada:', 'Psst, te mando un abrazo en versión michi:', 'Hoy toca tratarte con paciencia:', 'Respiremos juntos un ratito:', 'No tienes que hacerte el fuerte aquí:', 'Este michi se queda un ratito contigo:', 'Ey, hoy también mereces ternura:', 'Un recordatorio suavecito para ti:', 'Vamos con calma, ¿sí?'],
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
    starts: ['Pausa técnica, por favor:', 'Psst, antes de declarar la guerra...', 'Respira, que todavía no somos un volcán:', 'Oye, jefa/jefe de las emociones:', 'Alto ahí, michi consejero al habla:', 'Un segundo, que tu paz está llamando:', 'Antes de responder en modo explosivo:', 'Activando modo calma...', 'Este michi recomienda contar hasta diez:', 'A ver, vamos a bajarle dos rayitas:'],
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
    starts: ['Psst, no interrumpimos tu paz por mucho:', 'Oye, experta/o en estar en calma:', 'Este michi trae un recordatorio:', 'Modo tranquilidad: activado.', 'A ver, disfruta tu ratito:', 'Comunicado oficial del departamento de descanso:', 'Hoy no hay carrera, respira:', 'Tu pausa del día ha llegado:', 'Un mensajito sin apuro:', 'Shhh... quédate un ratito aquí:'],
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
