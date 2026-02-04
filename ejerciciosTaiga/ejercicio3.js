/*3. Número par o impar
○ Comprobar si el número ingresado es par o impar. */

const num = parseInt(prompt(`Ingresa un número`));

if (isNaN(num) || num <= 0) {
  alert(`Ingresaste cualquier cosa`);
} else if (num % 2 === 0) {
  alert(`El número ${num} es par`);
} else {
  alert(`El número ${num} es impar`);
}
