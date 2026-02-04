/*10. Verificar acceso
● Solicitar nombre de usuario y contraseña. Verificar si ambos coinciden con
valores predefinidos. */

const usuarioIngresado = "Diego";
const contraseniaIngresada = 1234;
let nombreUsuario = prompt(`Ingresa tu nombre de usuario`);
let contrasenia = prompt(`Ingresa tu contraseña`);

if (nombreUsuario == usuarioIngresado && contrasenia == contraseniaIngresada) {
  alert(`Usuario correcto`);
} else {
  alert(`Usuario incorrecto`);
}
