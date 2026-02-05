/*1. Clasificador de edades
○ Dado un número, mostrar si es un niño, adolescente, adulto o adulto mayor.
 */

const edad = parseInt(prompt(`Ingresa tu edad`));

if (isNaN(edad) || edad <= 0 || edad >= 120) {
  alert(`Ingresaste un valor erroneo, intentalo nuevamente`);
} else if (edad <= 5) {
  alert(`Estas en la etapa de la primera infancia`);
} else if (edad <= 12) {
  alert(`Estas en la etapa de la niñez`);
} else if (edad <= 18) {
  alert(`Estas en la etapa de la adolescencia`);
} else if (edad <= 26) {
  alert(`Estas en la etapa de la juventud`);
} else if (edad <= 59) {
  alert(`Estas en la etapa de la adultez`);
} else {
  alert(`Estas en la etapa de la vejez`);
}
