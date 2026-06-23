//ejercicio 1
// --- CÓDIGO INICIAL (A TRANSFORMAR) ---
function generarIds() {
const ids = [];
for (let i = 1; i <= 100; i++) {
ids.push(`TEC-2026-${i}`);
}
return ids; // Retorna los 100 IDs saturando memoria de inmediato
}


function* generarid(){
    for(let generar = 1; generar <= 100; generar++){
        console.log(`Generando id ${generar}`);
        yield `TEC-2026-${generar}`;
    }
}

const generador = generarid();

console.log("Solicitando primer ID:");
console.log("resultado:", generador.next().value);

console.log("Solicitando segundo ID:");
console.log("resultado:", generador.next().value);

//ejercicio 2
// --- CÓDIGO INICIAL (A TRANSFORMAR) ---
const dbPosts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"];

function obtenerTodoElFeed(posts) {
 console.log("-> Procesando e indexando todos los posts en el cliente...");
 return posts.map(p => `<html>${p}</html>`);
}



function* obtenerfeed(posts) {
    for (const post of posts) {
        console.log(`-> Procesando e indexando post en el cliente: ${post}`);
        yield `<html>${post}</html>`;
    }
}

const feed = obtenerfeed(dbPosts);

console.log("Solicitando primer item lazy:");
console.log("resultado:", feed.next().value);

console.log("Solicitando segundo item lazy:");
console.log("resultado:", feed.next().value);


//ejercicio 3
// --- CÓDIGO INICIAL (A TRANSFORMAR) ---
const logsServidor = ["200 OK", "200 OK", "500 ERROR", "200 OK", "500 ERROR", "404 NOT FOUND"];
/*function buscarTodosLosErrores(logs) {
 return logs.filter(log => log.includes("500")); // Retorna un array con todos
}*/

function* buscarerror(logs){
    for (const log of logs){
        if (log.includes("500")){
            console.log(`buscando errores: ${log}`);
            yield log 
        }
    }

}

const erroress = buscarerror(logsServidor)
console.log("filtrando errores");
console.log("errores presentes 1: ", erroress.next().value);
console.log("errores presentes 2: ", erroress.next().value);
console.log("errores presentes 3: ", erroress.next().value);


//ejercicio 4
// --- CÓDIGO INICIAL (A TRANSFORMAR) ---
function serieFibonacciEager(limite) {
 let secuencia = [0, 1];
 for (let i = 2; i < limite; i++) {
 secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
 }
 return secuencia; // Si pides un límite muy grande, truena la memoria
}


function* seriefibbo (limite){
    let a = 0;
    let b = 1;
    for(let fin = 0; fin < limite; fin++){
        yield a;
        [a,b] = [b,a + b];
    }
}
const fibbo = seriefibbo(5)
console.log(fibbo.next().value);
console.log(fibbo.next().value);
console.log(fibbo.next().value);
console.log(fibbo.next().value);
console.log(fibbo.next().value);
console.log(fibbo.next().value);


//ejercicio 5
// --- CÓDIGO INICIAL (A TRANSFORMAR) ---
const preciosAlmacen = [100, 200, 300, 400, 500];
function aplicarIvaATodo(precios) {
 const procesados = [];
 for(let precio of precios) {
 procesados.push(precio * 1.16);
 }
 return procesados;
}


function* aplicarivaodescu (precios){
    for (const precio of precios){
        yield precio * 1.16;
    }
}

const preciosivadescu = aplicarivaodescu(preciosAlmacen)
console.log(preciosivadescu.next().value);
console.log(preciosivadescu.next().value);
console.log(preciosivadescu.next().value);
console.log(preciosivadescu.next().value);
