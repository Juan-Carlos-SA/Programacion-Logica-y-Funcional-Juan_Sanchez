const LLenadoTanque=Object.freeze([
    "01-Magna",
    "02-Premium", 
    "03-Magna", 
    "04-Premium", 
    "05-Premium"
])

//Definir la regla o predicado
const esPremium = id=>id.includes ("Premium");

//Definir la funcion
function* filtroportipo(iterable,predicado){
    for (let gasolina of iterable){
/*         console.log('Analiza el arreglo:', gasolina);
 */        if(predicado(gasolina)){
            yield gasolina;
        }
    }
}
//definimos la consulta
const bombarecarga = filtroportipo(LLenadoTanque,esPremium)
//Mostrar en pantalla 
const premium= bombarecarga
console.log('Tipo de gas: ', premium.next().value);
console.log('Tipo de gas: ', premium.next().value);
console.log('Tipo de gas: ', premium.next().value);

