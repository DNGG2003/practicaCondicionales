/*9. Precio con descuento
○ Si el monto de la compra supera $100, aplicar un 10% de descuento. */

let compra = parseInt(
  prompt(`Ingresa el monto que compraste para saber si tenes un descuento`),
);
let descuento = compra * 0.1;
let compraConDescuento = compra - descuento;

if (isNaN(compra)) {
  alert(`Ingresaste cualquier cosa, intentalo nuevamente`);
} else if (compra > 100) {
  alert(
    `Pasaste el monto requerido, se te aplica un %10 de descuento, el monto final es de ${compraConDescuento}`,
  );
} else {
  alert(
    `Lo lamento mucho, no superaste los 100 requeridos, tenes que pagar ${compra}`,
  );
}
