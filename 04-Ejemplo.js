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


function deepFreeze(obj){
    //validar que sea un objeto
    if (obj ===null || typeof obj !== 'object' || Object.isFrozen(obj)){
        return obj
    } 
    //obtener todo el objeto
    const propiedadesobjeto =Object.getOwnPropertyNames(obj)
    //recorrer cada una de las propiedades
    for(let nombre of propiedadesobjeto){
        const propiedadHijo= obj[nombre]
        //aplicar la funcion recursiva
        if(propiedadHijo && typeof propiedadHijo==='object'){
            deepFreeze(propiedadHijo)
        } 
    }
    //congelamos todo el objeto con sus hijos
return Object.freeze(obj)
}


//Pasar el objeto a la funcion recursiva
const datosinmutables=deepFreeze(datos)
const nuevoNombre = datosinmutables.ciudad= "tenosique" 
const newInteres= datosinmutables.intereses.push("Java")
console.log(nuevoNombre);
console.log(newInteres);


