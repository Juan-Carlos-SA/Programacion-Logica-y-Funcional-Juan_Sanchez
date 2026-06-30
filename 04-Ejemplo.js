const datos={
    nombre: "Juan",
    edad: 21,
    ciudad:"Balancan",
    intereses: ["React","JS","Jugar"]
}

//ocultar propiedades

Object.defineProperty(datos,"edad",{enumerable:false})
console.log (Object.keys(datos))
console.log(Object.getOwnPropertyNames(datos))


function deepFreeze(obj) {
    if (obj === null || typeof obj !== 'object' || Object.isFrozen(obj)) {
        return obj
    }

    const propiedadesObjeto = Object.getOwnPropertyNames(obj)

    for (let nombres of propiedadesObjeto) {
        const propiedadHijo = obj[nombres]

        if (propiedadHijo && typeof propiedadHijo === 'object') {
            deepFreeze(propiedadHijo)
        }
    }

    return Object.freeze(obj)
}


//Pasar el objeto a la funcion recursiva
const datosinmutables=deepFreeze(datos)
const nuevoNombre = datosinmutables.ciudad= "tenosique" 
const newInteres= datosinmutables.intereses.push("Java")
console.log(nuevoNombre);
console.log(newInteres);


