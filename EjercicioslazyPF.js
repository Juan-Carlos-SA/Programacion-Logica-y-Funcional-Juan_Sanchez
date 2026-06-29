//EJERCICIO 1
const transacciones=Object.freeze ([
 { id: 101, tipo: 'deposito', monto: 60000, pais: 'México' },
 { id: 102, tipo: 'retiro', monto: 15000, pais: 'Colombia' },
 { id: 103, tipo: 'retiro', monto: 12000, pais: 'México' },
 { id: 104, tipo: 'retiro', monto: 55000, pais: 'México' },
 { id: 105, tipo: 'deposito', monto: 90000, pais: 'Francia' },
 { id: 106, tipo: 'retiro', monto: 75000, pais: 'Espana' }
]);

//reglas
const esRetiro = trans => trans.tipo === "retiro"
const esMontoSospechoso = trans => trans.monto >= 50000
const esZonadeRiesgo = trans => trans.pais !== "México"
const alertaFraude = trans => esRetiro(trans) && esMontoSospechoso(trans) || esZonadeRiesgo(trans)
/* Crea un generador perezoso que reciba las 
transacciones y filtre
usando la regla alertaFraude. */

//definir la funcion
function* transaccion(iterable,predicado){
    for(const trans of iterable){
        if (predicado(trans)){
            yield trans
        }
    }

}

const movimientos= transaccion(transacciones,alertaFraude)

const fraude= movimientos
console.log('Esta transaccion es fraude: ', fraude.next().value);
console.log('Esta transaccion es fraude: ', fraude.next().value);


//EJERCICIO 2

const aspirantes = Object.freeze([
 { nombre: 'Luis', examen: 90, entrevista: 80, estudioSocioeconomico: true },
 { nombre: 'Elena', examen: 70, entrevista: 90, estudioSocioeconomico: true },
 { nombre: 'Pedro', examen: 95, entrevista: 90, estudioSocioeconomico: false },
 { nombre: 'María', examen: 85, entrevista: 95, estudioSocioeconomico: true },
 { nombre: 'Iván', examen: 90, entrevista: 90, estudioSocioeconomico: true }
]);

//reglas
const aspurantesconPuntuaje= aspirantes.map(aspirante=>({
   ...aspirante,
   puntajeFinal:(aspirante.examen*0.70) + (aspirante.entrevista * 0.30) 
}))

const calificaParaBeca = aspirante =>aspirante.puntajeFinal>=85 && aspirante.estudioSocioeconomico === true

function* filtrarBecados(iterable, predicado){
    for (const aspirante of iterable){
        if (predicado(aspirante)){
            yield aspirante
        }
    }
}

const becados = filtrarBecados(aspurantesconPuntuaje,calificaParaBeca)
const becado1 = becados.next().value;
const becado2 = becados.next().value;
const primerOs2Becados = [becado1, becado2];
const promedioBecados = primerOs2Becados.reduce((suma, aspirante) => 
    suma + aspirante.puntajeFinal, 0
) / primerOs2Becados.length;

console.log('Becado 1: ', becado1);
console.log('Becado 2: ', becado2);

console.log('Promedio de puntajes de los primeros 2 becados:', promedioBecados);


//EJERCICIO 3

const paquetes =Object.freeze ([
 { tracking: 'ZA1', estado: 'Tabasco', peso: 20 },
 { tracking: 'ZA2', estado: 'Veracruz', peso: 18 },
 { tracking: 'ZA3', estado: 'Chiapas', peso: 5 },
 { tracking: 'ZA4', estado: 'Yucatán', peso: 25 },
 { tracking: 'ZA5', estado: 'Tabasco', peso: 10 },
 { tracking: 'ZA6', estado: 'Oaxaca', peso: 30 }
]);

//reglas

const esDestinoLocal = paquetitos => paquetitos.estado ==="Tabasco"
const esPesado = paquetitos => paquetitos.peso >= 15
const envioPrioritarioLocal = paquete => !esDestinoLocal(paquete) && esPesado(paquete)


function* filtrarPaquetesLocal(iterable, predicado){
    for (const paquete of iterable){
        if (predicado (paquete)){
            yield paquete
        }
    }
}
const paquetesEnvio = filtrarPaquetesLocal(paquetes,envioPrioritarioLocal)
console.log('paquetes que ocuparan el camion: ', paquetesEnvio.next().value);
console.log('paquetes que ocuparan el camion: ', paquetesEnvio.next().value);
