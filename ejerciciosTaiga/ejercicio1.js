/*1. Número positivo o negativo
○ Escribir un programa que determine si un número ingresado por el usuario es
positivo, negativo o cero. */

const num = parseInt(prompt(`Ingresa un número`));

if (isNaN(num)) {
  alert(`Escribiste cualquier cosa, intentalo nuevamente`);
} else if (num > 0) {
  alert(`El número ${num} es positivo`);
} else if (num == 0) {
  alert(`El número ${num} es igual a 0`);
} else {
  alert(`El número ${num} es negativo`);
}
