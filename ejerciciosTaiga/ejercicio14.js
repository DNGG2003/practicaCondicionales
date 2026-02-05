/*4. Impuestos según ingreso
○ Calcular el impuesto a pagar según rangos de ingreso (ej. menos de
R$1.000, entre R$1.000 y R$5.000, más de R$5.000) */

const ingresoMensual = parseInt(prompt(`Ingresa tu ingreso mensual`));
let impuesto = 0;

if (isNaN(ingresoMensual) || ingresoMensual < 0) {
  alert(`Ingreso invalido`);
} else if (ingresoMensual < 1000) {
  impuesto = 0;
} else if (ingresoMensual >= 1000 && ingresoMensual <= 5000) {
  impuesto = ingresoMensual * 0.1;
} else {
  impuesto = ingresoMensual * 0.2;
}
if (!isNaN(ingresoMensual) && ingresoMensual >= 0) {
  alert(`El impuesto a pagar es: $${impuesto}`);
}
