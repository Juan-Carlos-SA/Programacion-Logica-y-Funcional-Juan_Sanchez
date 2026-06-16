const cursos=[{ titulo: 'React Avanzado', categoria: 'Desarrollo', esGratis: false, tieneCertificado: true },
{ titulo: 'Introducción a UX/UI', categoria: 'Diseño', esGratis: true, tieneCertificado: false },
{ titulo: 'Node.js y MongoDB', categoria: 'Desarrollo', esGratis: true, tieneCertificado: true },
{ titulo: 'Figma para Principiantes', categoria: 'Diseño', esGratis: false, tieneCertificado: false}]

function desarrollo(desarrollo){
    const curso_desarrollo=cursos.filter(cursos=>cursos.categoria==="Desarrollo" && cursos.tieneCertificado===true);
    return curso_desarrollo;
}
console.log(desarrollo("Desarrollo"));


function esGratis(esGratis){
    const curso_esGratis=cursos.filter(cursos=>cursos.esGratis===true || cursos.categoria==="Diseño");
    return curso_esGratis;
}
console.log(esGratis("esGratis"));

function tieneCertificado(tieneCertificado){
    const curso_tieneCertificado=cursos.filter(cursos=>cursos.tieneCertificado===false);
    return curso_tieneCertificado;
}
console.log(tieneCertificado("tieneCertificado"));

function Beneficio(Beneficio){
    const beneficios=cursos.filter(cursos=>cursos.categoria==="Desarrollo" && cursos.esGratis===true || cursos.tieneCertificado===true);
    return beneficios;
}
console.log(Beneficio("beneficios"));





//Ejercicio 2.1

const familia=[{padre:"Juan", hijo:"Luis"},
    {padre:"Juan", hijo:"Pedro"},
    {padre:"Abraham", hijo:"Juan"}]

function hermanos(hermanos){
   const son_hermanos=familia.filter(familia=>familia.padre==="Juan" && familia.hijo==="Luis" || familia.hijo==="Pedro");
    return son_hermanos;
}
console.log(hermanos("son_hermanos"));

function abuelos(abuelos){
    const es_abuelo=familia.filter()
}




//Ejercicio 2.2
//A= abraham, B= luis , C= (juan,pedro)

function comparacion(a,b,c){
    const Abuelo = familia.some(relacion => relacion.padre === a && relacion.hijo === b) &&
    familia.some(relacion => relacion.padre === b && relacion.hijo === c);
    return Abuelo;
}   
console.log(comparacion('Abraham', 'Juan', 'Luis'));


//preguntas logicas

//abraham es padre de juan?
function esPadre(esPadre){
const espapa=familia.some(familia=>familia.padre==="Abraham" && familia.hijo==="Juan");
return espapa;}
console.log(esPadre("espapa"));

//quien es el padre de luis?
function padreLuis(padreLuis){
const padre=familia.find(familia=>familia.hijo==="Luis")
return padre;}
console.log(padreLuis("padre"));

//quienes son los hijos de juan?
function hijosJuan(hijosJuan){
const hijos=familia.filter(familia=>familia.padre==="Juan");
return hijos;}
console.log(hijosJuan("hijos"));
