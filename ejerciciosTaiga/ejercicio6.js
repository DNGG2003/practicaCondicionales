/*6. Calculadora básica
○ Usar if...else para realizar suma, resta, multiplicación o división según la
opción elegida.
 */
const operacion = parseInt(
  prompt(
    `Ingresa 1 para sumar
        Ingresa 2 para restar
        Ingresa 3 para multiplicar
        Ingresa 4 para dividir`,
  ),
);
let num1 = parseInt(prompt(`Ingresa el primer número`));
let num2 = parseInt(prompt(`Ingresa el segundo número`));

if (isNaN(num1, num2)) {
  alert(`Ingresaste un opcion erronea, intentalo de nuevo`);
} else {
  switch (operacion) {
    case 1:
      alert(num1 + num2);
      break;
    case 2:
      alert(num1 - num2);
      break;
    case 3:
      alert(num1 * num2);
      break;
    case 4:
      alert(num1 / num2);
      break;
  }
}
