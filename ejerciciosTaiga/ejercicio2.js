/*2. Edad para votar
○ Solicitar la edad del usuario y mostrar si puede votar
 */

const edad = parseInt(prompt(`Ingresa tu edad`));

if (isNaN(edad)) {
  alert(`Escribiste cualquier cosa, intentalo nuevamente`);
} else if (edad == 16 || edad >= 70) {
  alert(`Tenes edad para ir a votar, pero no es obligatorio`);
} else if (edad >= 18 && edad < 70) {
  alert(`Tenes edad para votar`);
} else {
  alert(`No tenes edad para votar`);
}
