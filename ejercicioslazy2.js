//EJERCICIO 1

const lecturasSensor = Object.freeze([
 { id: 1, tempC: 150, estado: "estable" },
 { id: 2, tempC: 850, estado: "estable" },
 { id: 3, tempC: 920, estado: "mantenimiento" },
 { id: 4, tempC: 120, estado: "estable" },
 { id: 5, tempC: 1100, estado: "estable" },
 { id: 6, tempC: 1300, estado: "crítico" }
]);

const estadosensor = estadoactual => estadoactual.estado === "crítico" || estadoactual.tempC >= 1000


function* sensor (flujo,regla){
    for (const estadoactual of flujo){
        if (regla(estadoactual)){
            yield {
                 ...estadoactual,
                tempF: (estadoactual.tempC * 9/5)+32
        }
    }
}
}
const generador = sensor(lecturasSensor,estadosensor)

console.log("Anomalia de temperatura",generador.next().value);
console.log("Anomalia de temperatura",generador.next().value)



//EJERCICIO 2

const chunksVideo = Object.freeze([
 { n: 1, sizeMb: 4, codec: "h264" },
 { n: 2, sizeMb: 25, codec: "raw" },
 { n: 3, sizeMb: 12, codec: "h265" },
 { n: 4, sizeMb: 40, codec: "raw" },
 { n: 5, sizeMb: 50, codec: "webm" }
]);

const procesovideo = proceso => proceso.sizeMb >= 20 && proceso.codec === "raw"

function* procesarvideo (flujo,regla){
    for (const proceso of flujo){
        if (regla(proceso)){
            yield {...proceso,
                sizeMb: proceso.sizeMb * 0.5,
                calidad: "reducida"
            }
        }
    }
}

const generadorr = procesarvideo(chunksVideo,procesovideo)

console.log("video a procesar: ",generadorr.next().value);
console.log("video a procesar: ",generadorr.next().value)


//EJERCICIO 3

const aduanaPuerto = Object.freeze([
 { manifiesto: "C-01", destino: "Rotterdam", pesoToneladas: 12 },
 { manifiesto: "C-02", destino: "Tokio", pesoToneladas: 45 },
 { manifiesto: "C-03", destino: "Rotterdam", pesoToneladas: 60 },
 { manifiesto: "C-04", destino: "Rotterdam", pesoToneladas: 18 },
 { manifiesto: "C-05", destino: "Lisboa", pesoToneladas: 22 }
]);

const contenedores = puerto => puerto.destino ==="Rotterdam" && puerto.pesoToneladas <= 30

function* contenedorespuerto (flujo,regla){
    for(const puerto of flujo){
        if (regla(puerto)){
            yield puerto
        }
    }
}

const generadorrr = contenedorespuerto(aduanaPuerto,contenedores)

const primerContenedor = generadorrr.next().value
const segundoContenedor = generadorrr.next().value

const contenedorespesados = [primerContenedor,segundoContenedor]

const pesofinalcontenedores = contenedorespesados.reduce(
    (suma,contenedor) => suma + contenedor.pesoToneladas, 0
)

console.log("Contenedores a inspeccionar: ", contenedorespesados)
console.log("Peso final de contenedores: ", pesofinalcontenedores)