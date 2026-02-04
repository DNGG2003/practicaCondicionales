/*8. Clasificación de calificaciones
○ Pedir una calificación numérica (0-10) y mostrar la nota correspondiente
(Aprobado, Reprobado, Excelente). */

const nota = parseInt(prompt(`Ingresa la nota del alumno`));

if (isNaN(nota) || nota < 0 || nota > 10) {
  alert(`Ingresaste cualquier cosa, intentalo nuevamente`);
} else if (nota <= 5 || nota === 0) {
  alert(`Estas desaprobado, tu nota es: ${nota}`);
} else {
  alert(`Estas aprobado, tu nota es ${nota}`);
}
