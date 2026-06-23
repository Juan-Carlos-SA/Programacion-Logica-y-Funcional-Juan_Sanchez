
function obtenerTurno(){
    let contador=1
    const turno=`turno ${contador}`;
    contador++;
    return turno
}


console.log(obtenerTurno());
console.log(obtenerTurno());


function* obtenerTurnoY(){
    let contador=1
    while(true){
        yield `turno ${contador}`
        contador++
    }
}

const cajero=obtenerTurnoY ()

console.log(cajero.next().value);
console.log(cajero.next().value);
console.log(cajero.next().value);
console.log(cajero.next().value);


//procesador de palabras

function procesarPalabra(frase){
    const palabras = frase.split (" ");
    const resultado = []
    for (let palabra of palabras){
        console.log(`procesando completo ${palabra}`);
        resultado.push(palabra.toUpperCase())
    }
    return resultado
}

const palabrasEscritas=procesarPalabra("Programacion con JS")

console.log("resultado: ", palabrasEscritas[0]);


function* procesaDatos(frase){
    const palabra=(frase.split (" "))
    const resultado = []
    for(let palabras of palabra){
        console.log(`Procesado de datos ${palabra}`);
        yield palabras.toUpperCase()      
    }
}
const textoleido = procesaDatos("Programacion con JS")

console.log("Solo lectura da lectura a la primera: ");
console.log("resultado", textoleido.next().value );

console.log("Solo lectura da lectura a la segunda: ");
console.log("resultado", textoleido.next().value );

console.log("Solo lectura da lectura a la tercera: ");
console.log("resultado", textoleido.next().value );