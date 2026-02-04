/*4. Contraseña segura
○ Comparar una contraseña ingresada con una contraseña guardada. Mostrar
mensaje si coinciden o no. */

const ingresarContrasenia = prompt(`Ingresa tu contraseña`);
const contrasenia = 1234;

if (ingresarContrasenia == contrasenia) {
  alert(`Contraseña correcta`);
} else {
  alert(`Contraseña incorrecta`);
}
