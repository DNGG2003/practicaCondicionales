/*3. Verificación de acceso por roles
○ Solicitar nombre de usuario y rol. Permitir o denegar acceso dependiendo si
es "admin", "editor" o "invitado". */

const nombreUsuario = prompt(`Ingresa el nombre de usuario`);
const rol = prompt(`Ingresa tu rol`);

if (rol === "admin") {
  alert(`Bienvenido ${nombreUsuario}. Tenes acceso a todo`);
} else if (rol === "editor") {
  alert(`Bienvenido ${nombreUsuario}. Tenes acceso a la parde de edicion `);
} else if (rol === "invitado") {
  alert(`Bienvenido ${nombreUsuario}. Tenes un acceso limitado `);
} else {
  alert(`Acceso denegado`);
}
