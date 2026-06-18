//Ejercicio 3
const usuarios = [
  { nombre: 'Ana', edad: 25, rol: 'admin', activo: true },
  { nombre: 'Carlos', edad: 17, rol: 'user', activo: true },
  { nombre: 'Beto', edad: 30, rol: 'user', activo: false }
];


//3.1
// reglas
const estaDeshabilitado = usuario => usuario.activo === false;  

//Combinacion
const usuariosdeshabilitado = usuarios => estaDeshabilitado(usuarios);

// Consulta
const usuariosDeshabilitados = usuarios.filter(estaDeshabilitado);
console.log('Usuarios para enviar correo:', usuariosDeshabilitados);


//3.2
//regla
const mayoredad = usuario => usuario.edad >= 18;
const esactivo = usuario => usuario.activo === true;

//combinacion
const usuariosactivosmayores = usuario => mayoredad(usuario) && esactivo(usuario);

// Consulta
const usuariosss = usuarios.filter(usuariosactivosmayores);
console.log('Usuarios activos mayores de edad:', usuariosss);


//3.3
//regla
const esmenor = usuario => usuario.edad < 18;
const esadmin = usuario => usuario.rol === 'admin';
//combinacion
const usuariomenoradmin = usuario => esmenor(usuario) && esadmin(usuario)

// Consulta
const usermenoradmin = usuarios.find(usuariomenoradmin);
console.log('Usuarios menores de edad con rol admin:', usermenoradmin);


//3.4

//combinacion

const puedeeditar = usuario => mayoredad(usuario) || esactivo(usuario) || esadmin(usuario)

//consulta

const usuarioeditor = usuarios.find(puedeeditar)
console.log('usuario puede editar: ', usuarioeditor);





/*/ ejercicios 4.1

const clientes = [{ nombre: 'Luis', historialLimpio: true, ingresosEstables: true },
{ nombre: 'María', historialLimpio: true, ingresosEstables: false },
{ nombre: 'Jorge', historialLimpio: false, ingresosEstables: true }
]


//reglas

const historialLimpio = cliente => cliente.historialLimpio === true;
const ingresosEstables = cliente => cliente.ingresosEstables === true;

//combinacion
const tarjetablack = cliente => historialLimpio(cliente) && ingresosEstables(cliente);

//consulta
const clienteCredito = clientes.filter(tarjetablack);
console.log('Clientes con buen crédito:', clienteCredito);



//4.2

//reglas

const ingresosbajos = cliente => cliente.ingresosEstables === false;
const historialmalo = cliente => cliente.historialLimpio === false;

//combinacion
const reactivacion = cliente => ingresosbajos(cliente) || historialmalo(cliente);

//consulta
const clienteReactivacion = clientes.filter(reactivacion);
console.log('Clientes para reactivación:', clienteReactivacion);



//4.3

//combinacion
const riesgomedio = cliente => ingresosEstables(cliente) && historialmalo(cliente)

//consulta
const clienteRiesgoMedio = clientes.filter(riesgomedio);
console.log('Clientes de riesgo medio:', clienteRiesgoMedio);



//4.4
//combinacion
const riesgocritico = cliente => ingresosbajos(cliente) && historialmalo(cliente)

//consulta
const clienteRiesgoCritico = clientes.some(riesgocritico);
console.log('alerta de riesgo crítico:', clienteRiesgoCritico);


//4.5

//combinacion
const buencliente = cliente => ingresosEstables(cliente) && historialLimpio(cliente)

//consulta
const BuenCliente = clientes.filter(buencliente);
console.log('Clientes buenos:', BuenCliente);

*/