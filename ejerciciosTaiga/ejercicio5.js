/*5. Mayor de tres números
○ Pedir tres números al usuario y mostrar cuál es el mayor. */

const num1 = parseInt(prompt(`Ingresa un primer número`));
const num2 = parseInt(prompt(`Ingresa un segundo número`));
const num3 = parseInt(prompt(`Ingresa un tercer número`));

if (isNaN(num1, num2, num3)) {
  alert(`Ingresaste cualquier cosa, intentalo nuevamente`);
} else if (num1 > num2 && num1 > num3) {
  alert(`El número ${num1} es mayor que el ${num2} y ${num3}`);
} else if (num2 > num3 && num2 > num1) {
  alert(`El número ${num2} es mayor que ${num1} y ${num3}`);
} else if (num3 > num1 && num3 > num2) {
  alert(`El número ${num3} es mayor que ${num1} y ${num2}`);
}
