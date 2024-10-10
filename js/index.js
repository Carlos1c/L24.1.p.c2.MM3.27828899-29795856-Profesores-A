/*En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
de la clase Cl_profesor.
Haga un programa que lea los datos de un profesor fijo y reporte su ingreso total.
Ejemplos de la corrida:
Nombre del profesor fijo: Carlos
Monto del bono: $25
Monto del sueldo: $100
Ingreso total del profesor Carlos: $125
Nombre del profesor fijo: Carolina
Monto del bono: $40
Monto del sueldo: $90
Ingreso total del profesor Carolina: $130
*/

import CL_profesor from "./CL_profesor.js";

let profesor1 = new CL_profesor("Carlos", 25, 100);
let profesor2 = new CL_profesor("Carolina", 40, 90);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Nombre del profesor fijo: ${profesor1.nombre}
<br>Monto del bono: $${profesor1.bono}
<br>Monto del sueldo: $${profesor1.sueldo}
<br>Ingreso total del profesor Carlos: $${profesor1.ingresoTotal()}
<br><br> Nombre del profesor fijo: ${profesor2.nombre}
<br>Monto del bono: $${profesor2.bono}
<br>Monto del sueldo: $${profesor2.sueldo}
<br>Ingreso total del profesor Carlos: $${profesor2.ingresoTotal()}
`