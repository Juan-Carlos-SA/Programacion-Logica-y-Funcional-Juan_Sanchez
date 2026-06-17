//freeze
/*const nombres = {nombre: "Dany", rol:"admin"}
nombres.rol="user";
console.log(nombres);

const nombres2 = Object.freeze({nombre: "Dany", rol:"admin"});
const nombresModificados = {...nombres2, rol:"user"};
console.log();

//ejemplo de reduce
const calificaciones=Object.freeze([80,90,100,90])
const sumaTotal=calificaciones.reduce((a, valor) => a + valor);
const promedio = sumaTotal / calificaciones.length;
console.log('Suma total de calificaciones:', sumaTotal);
console.log('Promedio de calificaciones:', promedio);
*/

//Ejercicio 5

//reglas
const transacciones = Object.freeze([
  { id: 1, tipo: 'deposito', monto: 10000 },
  { id: 2, tipo: 'retiro', monto: 6000 },
  { id: 3, tipo: 'retiro', monto: 1500 },
  { id: 4, tipo: 'retiro', monto: 8000 }
]);

//5.1
const deposito = transaccion => transaccion.tipo === 'deposito';
const retiroalto = transaccion => transaccion.tipo === 'retiro' && transaccion.monto > 5000;

const retiroMayor = transaccion => retiroalto(transaccion);

const retirosMayores = transacciones.filter(retiroMayor);
console.log('Transacciones de retiro mayores a 5000:', retirosMayores);

//5.2
const transaccionesConMulta = retirosMayores.map(transaccion => ({
  ...transaccion,
  multa: transaccion.monto * 0.05,
  montoConMulta: transaccion.monto + (transaccion.monto * 0.05)
}));

//5.3
const multaTotal = transaccionesConMulta.reduce(
  (a, transaccion) => a + transaccion.multa,
  0
);

console.log('Transacciones que se les aplicará multa:', transaccionesConMulta);
console.log('Multa total del 5%:', multaTotal);
