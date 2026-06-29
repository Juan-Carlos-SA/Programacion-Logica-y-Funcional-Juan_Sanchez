//combinar programacion lazy con funcional
//definir los predicados atomicos
const  esPar=n=>n%2===0;
const multiploCinco=n=>n%5===0;
function* filtrarNumeros(iterable,predicado){
    for (let dato of iterable){
        if (predicado(dato)){
            yield dato
        }
    }
        
}

function* generarlosNumeros(){
    let i=0;
    while (true) yield i++;
}


const numerosAleatorios = generarlosNumeros()
const generarPares = filtrarNumeros (numerosAleatorios, esPar)
console.log('primer numero par: ', generarPares.next().value);
console.log('segundo numero par: ', generarPares.next().value);
console.log('tercero numero par: ', generarPares.next().value);
console.log('cuarto numero par: ', generarPares.next().value);


const generarmultiplo5 = filtrarNumeros (numerosAleatorios, multiploCinco)
console.log('primer multiplo de 5: ', generarmultiplo5.next().value);
console.log('primer multiplo de 5: ', generarmultiplo5.next().value);
console.log('primer multiplo de 5: ', generarmultiplo5.next().value);
console.log('primer multiplo de 5: ', generarmultiplo5.next().value);
