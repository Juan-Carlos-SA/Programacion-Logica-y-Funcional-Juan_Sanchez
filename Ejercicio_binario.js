const historialCommits = [
{ version: 1.0, ambiente: "desarrollo" },
{ version: 1.1, ambiente: "desarrollo" },
{ version: 1.2, ambiente: "testing" },
{ version: 1.3, ambiente: "testing" },
{ version: 2.0, ambiente: "produccion" },
{ version: 2.1, ambiente: "produccion" },
{ version: 2.2, ambiente: "produccion" } ]
// predicado que determina si es producción o testing
const estestingproduccion = commit => commit.ambiente === "testing" || commit.ambiente === "produccion"
const esproduccion = commit => commit.ambiente === "produccion"

// función de busqueda binaria que encuentra el primer commit y guarda posibles respuestas
function buscarPrimerProduccion(historial,predicado){
    let izquierda = 0;
    let derecha = historial.length -1; 
    let posibleRespuesta = -1

    while (izquierda <= derecha){
        const medio = Math.floor((izquierda + derecha)/2);
        if (predicado(historial[medio])){
            //si el medio cumple, lo guarda como posible respuesta
            //sigue buscando a la izquierda en busqueda de uno mas antiguo
            posibleRespuesta = medio;
            derecha = medio -1
        } else {
            //si no cumple, busca a la derecha
            izquierda = medio +1
        }
    }
    return posibleRespuesta
}

// busca el primer commit en testing
const indiceTesting = buscarPrimerProduccion(historialCommits, estestingproduccion)
//busca el primer commit en producción
const indiceProduccion = buscarPrimerProduccion(historialCommits, esproduccion)

if (indiceTesting !== -1) {
    const commit = historialCommits[indiceTesting];
    // muestra el primer commit en testing
    console.log(`Primer commit en testing: versión ${commit.version} ` +
        `en la posición ${indiceTesting}.`
    )
} else {
    console.log("No se encontró ningún commit en testing.")
}

if (indiceProduccion !== -1) {
    const commit = historialCommits[indiceProduccion];
    // muestra el primer commit en producción
    console.log(`Primer commit en producción: versión ${commit.version} ` +
        `en la posición ${indiceProduccion}.`
    )
} else {
    console.log("No se encontró ningún commit de producción.")
}





/*Si el historial tuviera 1,000,000 de commits, 
¿cuántas evaluaciones como máximo tendría
que hacer nuestro predicado atómico para hallar el resultado?*/

//respuesta: log2(1,000,000) = 19.93 ~ 20 evaluaciones

const n = 1000000
const evaluacionesMaximas = Math.ceil(Math.log2(n))
console.log(`Máximo de evaluaciones: ${evaluacionesMaximas}`)