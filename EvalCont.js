const BD = [{id:1,nombre:'Autenticacion', zona:'us-east',consultasPorMinuto:12000, activo: true,tecnologias: ['Node','Redis']},
{id:2, nombre:'Procesamiento de pagos', zona:'us-west',consultasPorMinuto:4500, activo: true,tecnologias: ['Java','Spring']},
{id:3, nombre:'Recomendaciones AI', zona:'us-east',consultasPorMinuto:25000, activo: false,tecnologias: ['Python','TensorFlow']},
{id:4, nombre:'Notificaciones', zona:'us-central',consultasPorMinuto:8500, activo: true,tecnologias: ['Node','RabbitMQ']},
{id:5, nombre:'Reportes Historicos', zona:'us-west',consultasPorMinuto:500, activo: false,tecnologias: ['Python','MongoDB']}];

//reglas
const estaactivo = servicio => servicio.activo === true
const noestaactivo = servicio => servicio.activo === false
const esZonaUS = servicio => servicio.zona === 'us-east' || servicio.zona === 'us-west'
const esAltaCarga = servicio => servicio.consultasPorMinuto > 10000
const esBajaCarga = servicio => servicio.consultasPorMinuto < 10000
const usaNode = servicio => servicio.tecnologias.includes('Node')
const nombre = servicio => servicio.nombre

//combinacion
const requiereMantenimientoUrgente = servicio => noestaactivo(servicio) && esAltaCarga(servicio)

const esServicioCriticoUS = servicio => estaactivo(servicio) && esZonaUS(servicio) || esAltaCarga(servicio)

const migrarACloudflare = servicio => esZonaUS(servicio) && usaNode(servicio) && esBajaCarga(servicio)

//consulta
const listaesServiocioCritico = BD.filter(esServicioCriticoUS).map(nombre)
console.log('lista de nombres de servicios criticos: ', listaesServiocioCritico)

const ListaRequiereMantenimientoUrgente = BD.filter(requiereMantenimientoUrgente).map(nombre)
console.log('lista de nombres de servicios que requieren mantenimiento urgente: ',ListaRequiereMantenimientoUrgente)

const AcumuladodeConsultasActivos = BD.filter(estaactivo).reduce((acumulador, servicio) => acumulador + servicio.consultasPorMinuto, 0)
console.log('acumulado de consultas por minuto de servicios activos: ', AcumuladodeConsultasActivos)


