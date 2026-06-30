//EJERCICIO 1 DESARROLLO DE SOFTWARE

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

const peticionesHttp = deepFreeze([
 { id: "REQ-01", metodo: "GET", ipOrigen: "192.168.1.50", latenciaMs: 45, tamanioPayloadKb: 2,
payload: "SELECT * FROM users" },
 { id: "REQ-02", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 2500, tamanioPayloadKb:
1500, payload: "DROP TABLE users;--" },
 { id: "REQ-03", metodo: "GET", ipOrigen: "192.168.1.55", latenciaMs: 12, tamanioPayloadKb: 1,
payload: "ping" },
 { id: "REQ-04", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 1800, tamanioPayloadKb:
950, payload: "normal_profile_update" },
 { id: "REQ-05", metodo: "POST", ipOrigen: "192.168.1.70", latenciaMs: 3100, tamanioPayloadKb:
1200, payload: "upload_heavy_image" },
 { id: "REQ-06", metodo: "GET", ipOrigen: "172.16.25.40", latenciaMs: 50, tamanioPayloadKb:
500, payload: "exec MaliciousScript" }
]);


const esMetodoEscritura = peticion => peticion.metodo === "POST"
const esLatenciaAlta = peticion => peticion.latenciaMs >= 2000
const esPayloadSospechoso = peticion => { const payload = peticion.payload.toLowerCase();
    return payload.includes("drop")|| payload.includes("select")||payload.includes("maliciousscript")
}

const detectarAmenazaPotencial = amenazass => esMetodoEscritura(amenazass) && esLatenciaAlta(amenazass) || esPayloadSospechoso (amenazass)

//funcion lazy

function* analizadorSeguridadLazy (flujo,regla){
    for (const peticion of flujo){
        if (regla(peticion)){
            yield peticion
        }
    }
}

const generador = analizadorSeguridadLazy(peticionesHttp,detectarAmenazaPotencial)

const primeraAmenaza = generador.next().value
const segundaAmenaza = generador.next().value

const amenazas=[primeraAmenaza,segundaAmenaza]

const promedioTamanoPayload = amenazas.reduce(
    (suma,req) => suma + req.tamanioPayloadKb , 0
) / amenazas.length

console.log("Peticiones detectadas como amenaza: ", amenazas);
console.log("Promedio de payload KB de las 2 primeras amenazas: ", promedioTamanoPayload);





//EJERCICIO 2 PLATAFORMA DE COMERCIO

const ordenesEnvio = deepFreeze ([
 { id: "ORD-101", tipo: "estandar", destino: "Tabasco", pesoKg: 4, distanciaKm: 8, asegurado:
false },
 { id: "ORD-102", tipo: "express", destino: "Veracruz", pesoKg: 22, distanciaKm: 120, asegurado:
true },
 { id: "ORD-103", tipo: "estandar", destino: "Tabasco", pesoKg: 1.5, distanciaKm: 15, asegurado:
false },
 { id: "ORD-104", tipo: "express", destino: "Tabasco", pesoKg: 5, distanciaKm: 3, asegurado: false
},
 { id: "ORD-105", tipo: "express", destino: "Yucatán", pesoKg: 18, distanciaKm: 250, asegurado:
false },
 { id: "ORD-106", tipo: "express", destino: "Chiapas", pesoKg: 35, distanciaKm: 190, asegurado:
true }
]); 

const esEnvioExpress = ordenes => ordenes.tipo === "express"
const esPaquetePesado = ordenes => ordenes.pesoKg >= 15
const esRutaForanea = ordenes => ordenes.destino !== "Tabasco"

const esDespachoPrioritario = despachoprior => esEnvioExpress(despachoprior) && esPaquetePesado(despachoprior) || esRutaForanea(despachoprior)

function* despachadorOrdenesLazy (flujo,regla){
    for (const ordenes of flujo){
        if (regla(ordenes)){
            yield ordenes
        }
    }
}

const generar = despachadorOrdenesLazy(ordenesEnvio, esDespachoPrioritario)

const primerorden = generar.next().value
const segundaorden = generar.next().value
const ordenesPrioritarias= [primerorden, segundaorden]

const promedioDistanciaKM = ordenesPrioritarias.reduce(
    (suma,orden) => suma + orden.distanciaKm, 0)/ordenesPrioritarias.length

console.log("Ordenes prioritarias: ", ordenesPrioritarias);
console.log("Promedio distancia KM: ", promedioDistanciaKM);

    
    