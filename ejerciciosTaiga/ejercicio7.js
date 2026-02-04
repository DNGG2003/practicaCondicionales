/*7. Año bisiesto
○ Solicitar un año y comprobar si es bisiesto. */

const anio = parseInt(prompt(`Ingresa un año`));

if (isNaN(anio)) {
  alert(`Ingresaste cualquier cosa, intentalo nuevamente`);
} else if (anio % 400 === 0) {
  alert(`El año ${anio} es bisiesto`);
} else if (anio % 100 === 0) {
  alert(`El año ${anio} no es bisiesto`);
} else if (anio % 4 === 0) {
  alert(`El año ${anio} es bisiesto`);
}
