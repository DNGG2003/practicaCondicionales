/*2. Validar fecha
○ Comprobar si una fecha (día, mes, año) ingresada por el usuario es válida. */

let dia = parseInt(prompt("Ingresá el día:"));
let mes = parseInt(prompt("Ingresá el mes:"));
let año = parseInt(prompt("Ingresá el año:"));

if (año > 0 && mes >= 1 && mes <= 12 && dia >= 1 && dia <= 31) {
  alert("Fecha válida");
} else {
  alert("Fecha inválida");
}
