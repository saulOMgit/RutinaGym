export const routinesData = {
  "hipertrofia_rsn": {
    name: "Hipertrofia RSN",
    description: "Rutina de hipertrofia con enfoque en volumen",
    routines: {
      "Día 1: Pierna": [
        { ejercicio: "Sentadilla", series: 5, objetivo_reps: 30, tecnica: "Mantener espalda recta, profundidad hasta paralelo" },
        { ejercicio: "Peso muerto rumano", series: 3, objetivo_reps: 25, tecnica: "Piernas ligeramente flexionadas, espalda recta, bajar controlado" },
        { ejercicio: "Prensa", series: 3, objetivo_reps: 35, tecnica: "Pies a la anchura de hombros, bajar sin bloquear rodillas" },
        { ejercicio: "Curl femoral", series: 3, objetivo_reps: 35, tecnica: "Mover controlado, sin impulso, concentrar en isquiotibiales" },
        { ejercicio: "Zancadas", series: 4, objetivo_reps: "al fallo", tecnica: "Pasos largos, bajar hasta rodilla casi toque suelo" }
      ],
      "Día 2: Empujón": [
        { ejercicio: "Press banca", series: 5, objetivo_reps: 30, tecnica: "Bajar barra controlado hasta el pecho, empujar explosivo" },
        { ejercicio: "Fondos", series: 3, objetivo_reps: 25, tecnica: "Bajar hasta 90º codo, subir extendiendo brazos" },
        { ejercicio: "Militar sentado con mancuernas", series: 4, objetivo_reps: 35, tecnica: "Espalda recta, subir mancuernas hasta extensión completa" },
        { ejercicio: "Elevaciones laterales", series: 4, objetivo_reps: 35, tecnica: "Levantar mancuernas lateralmente sin subir hombros" },
        { ejercicio: "Press francés", series: 3, objetivo_reps: 30, tecnica: "Bajar barra detrás de la cabeza controlado, extender codos" },
        { ejercicio: "Extensiones de tríceps en polea baja", series: 4, objetivo_reps: 40, tecnica: "Mantener codos pegados, extender hasta bloqueo" }
      ],
      "Día 3: Tirón": [
        { ejercicio: "Peso muerto", series: 3, objetivo_reps: 20, tecnica: "Espalda recta, subir con fuerza desde el suelo" },
        { ejercicio: "Dominadas", series: 5, objetivo_reps: 25, tecnica: "Subir hasta barbilla sobre barra, bajar controlado" },
        { ejercicio: "Remo con mancuernas", series: 4, objetivo_reps: 30, tecnica: "Espalda recta, tirar mancuerna hacia cadera" },
        { ejercicio: "Curl de bíceps con barra Z", series: 4, objetivo_reps: 35, tecnica: "Mantener codos fijos, subir barra sin impulso" },
        { ejercicio: "Curl de bíceps sentado con mancuerna", series: 3, objetivo_reps: 35, tecnica: "Controlar bajada, evitar balanceo" }
      ]
    }
  },
  "rutina_actual": {
    name: "PPL",
    description: "Rutina personalizada con pesos específicos",
    routines: {
      "Push": [
        { ejercicio: "Press banca", peso: "30kg + barra", series: 3, reps: 7, tecnica: "Bajar barra controlado hasta el pecho, empujar explosivo" },
        { ejercicio: "Overhead Press (Hombro con barra)", peso: "25kg", series: 3, reps: 7, tecnica: "Espalda recta, subir barra hasta extensión completa" },
        { ejercicio: "Press francés con barra Z", peso: "20kg", series: 3, reps: 10, tecnica: "Bajar barra detrás de la cabeza controlado, extender codos" },
        { ejercicio: "Pec-deck", peso: "50kg", series: 3, reps: "6 en la última serie", tecnica: "Contraer pecho en la apertura, controlar cierre" },
        { ejercicio: "Shoulder Press (Máquina)", peso: "30kg", series: 3, reps: 10, tecnica: "Empujar con control, mantener postura firme" },
        { ejercicio: "Tríceps con cuerda en polea", peso: "17.5kg", series: 3, reps: "7 en la última serie", tecnica: "Extender codos sin mover los hombros" },
        { ejercicio: "Crunch en máquina", peso: "25kg", series: 3, reps: 12, tecnica: "Contracción abdominal concentrada" }
      ],
      "Pull": [
        { ejercicio: "Remo sentado en polea con agarre cerrado", peso: "42.5kg", series: 3, reps: 10, tecnica: "Espalda recta, tirar con los codos hacia atrás" },
        { ejercicio: "Encogimientos con mancuernas", peso: "12.5kg (cada una)", series: 3, reps: 10, tecnica: "Subir hombros al máximo, bajar controlado" },
        { ejercicio: "Curl de bíceps con barra Z", peso: "25kg", series: 3, reps: "10, 10, 6", tecnica: "Mantener codos pegados, subir sin impulso" },
        { ejercicio: "Jalón al pecho", peso: "35kg", series: 3, reps: 10, tecnica: "Tirar barra hasta pecho, bajar controlado" },
        { ejercicio: "Face Pulls", peso: "12.5kg", series: 3, reps: 10, tecnica: "Tirar cuerda a la altura del rostro" },
        { ejercicio: "Elevaciones de piernas colgado", series: 3, reps: 12, tecnica: "Subir piernas controlado, evitar balanceos" }
      ],
      "Pierna": [
        { ejercicio: "Sentadilla", peso: "10kg + barra", series: 3, reps: 10, tecnica: "Mantener espalda recta, profundidad hasta paralelo" },
        { ejercicio: "Curl femoral acostado", peso: "25kg", series: 3, reps: 10, tecnica: "Mover controlado, sin impulso" },
        { ejercicio: "Aductor en máquina", peso: "47.5kg", series: 3, reps: 10, tecnica: "Contraer aductores sin balanceo" },
        { ejercicio: "Abductor en máquina", peso: "55kg", series: 3, reps: 10, tecnica: "Contraer abductores controlado" },
        { ejercicio: "Prensa de piernas", peso: "62.5kg", series: 3, reps: 10, tecnica: "Pies a la anchura de hombros, bajar sin bloquear rodillas" },
        { ejercicio: "Extensión de pierna", peso: "42.5kg", series: 3, reps: 10, tecnica: "Extender rodillas con control" },
        { ejercicio: "Seated calf", peso: "62.5kg", series: 3, reps: 12, tecnica: "Subir talones al máximo, bajar lento" },
        { ejercicio: "Plancha", series: 3, duración: "30 segundos", tecnica: "Mantener cuerpo alineado, apretar core" }
      ],
      "Cardio": [
        { actividad: "Carrera", distancia: "3-3.5 km", ritmo_aproximado: "5:18-5:26 min/km" }
      ]
    }
  },
  "rutina_hexan": {
    name: "Dumbell",
    description: "Rutina avanzada de 5 días",
    routines: {
      "Día A – Pecho + Hombros Laterales": [
        { ejercicio: "Flat Barbell Bench Press", series_reps: "5/3/1", tecnica: "Controlar bajada, empujar con fuerza" },
        { ejercicio: "Incline Dumbbell Bench Press", series: 3, reps: 8, tecnica: "Bajar mancuernas controlado, empujar hasta extensión" },
        { ejercicio: "Incline Dumbbell Fly", series: 3, reps: 8, tecnica: "Apertura amplia, mantener codos ligeramente flexionados" },
        { ejercicio: "Cable Lateral Raises", series: 3, reps: 12, tecnica: "Levantar lateralmente sin subir hombros" },
        { ejercicio: "Seated Inclined Dumbbell Lateral Raises", series: 3, reps: 12, tecnica: "Levantar controlado, evitar balanceo" }
      ],
      "Día B – Espalda + Core": [
        { ejercicio: "Pull Ups", nota: "Progresión", tecnica: "Subir hasta barbilla sobre barra, bajar controlado" },
        { ejercicio: "Seated Cable Row", series: 3, reps: 8, tecnica: "Tirar con codos hacia atrás, espalda recta" },
        { ejercicio: "Dumbbell Row (unilateral)", series: 3, reps: 8, tecnica: "Tirar mancuerna hacia cadera, espalda estable" },
        { ejercicio: "Cable Face Pull", series: 3, reps: 12, tecnica: "Tirar cuerda a la altura del rostro" },
        { ejercicio: "Ab-Wheel Rollout", series: 3, reps: 8, tecnica: "Mantener core apretado, no arquear espalda" }
      ],
      "Día C – Piernas (Cuádriceps Dominante)": [
        { ejercicio: "Barbell Back Squat", series_reps: "5/3/1", tecnica: "Profundidad hasta paralelo, espalda recta" },
        { ejercicio: "Bulgarian Split Squats", series: 3, reps: 8, tecnica: "Mantener equilibrio, bajar rodilla trasera cerca suelo" },
        { ejercicio: "(Push-up Assisted) Sissy Squats", series: 3, reps: 10, tecnica: "Flexión controlada de rodillas, mantener torso erguido" },
        { ejercicio: "Standing Calf Raises", series: 3, reps: 12, tecnica: "Subir talones al máximo, bajar lento" }
      ],
      "Día D – Brazos": {
        "Bíceps": [
          { ejercicio: "EZ-Bar Curl", series: 3, reps: 8, tecnica: "Codos fijos, subir sin impulso" },
          { ejercicio: "Seated Inclined Hammer Dumbbell Curl", series: 3, reps: 10, tecnica: "Controlar bajada, evitar balanceo" },
          { ejercicio: "Lying Inclined Dumbbell Curl", series: 3, reps: 10, tecnica: "Extender completamente, subir controlado" },
          { ejercicio: "Forearm Curl", series: 3, reps: 10, tecnica: "Mover muñeca solo, sin mover brazo" }
        ],
        "Tríceps": [
          { ejercicio: "Cable Triceps Extension (barra recta)", series: 3, reps: 8, tecnica: "Extender codos sin mover hombros" },
          { ejercicio: "Overhead Cable Triceps Extension (cuerda o barra)", series: 3, reps: 8, tecnica: "Extender codos por encima cabeza controlado" },
          { ejercicio: "N1-Style Cross-Body Triceps Extension", series: 3, reps: 10, tecnica: "Extender brazo cruzado sin balanceo" }
        ]
      },
      "Día E – Posterior Pierna + Glúteos + Core": [
        { ejercicio: "Barbell Deadlift", series_reps: "5/3/1", tecnica: "Espalda recta, subir con fuerza desde suelo" },
        { ejercicio: "Cable Leg Curl (una variante)", series: 3, reps: 10, tecnica: "Mover controlado, concentrar en isquiotibiales" },
        { ejercicio: "Seated Calf Raise", series: 3, reps: 12, tecnica: "Subir talones máximo, bajar lento" },
        { ejercicio: "Crunch (peso opcional)", series: 3, reps: 10, tecnica: "Contracción abdominal concentrada" }
      ]
    }
  }
};

