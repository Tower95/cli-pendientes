// cuando importamos desde otro lugar tenemos que espesificar la funcion
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];
const porHacer = require('./por-hacer/por-hacer')
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);


        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=====Tarea por Hacer====='.green, '\n');
            console.log(tarea.descripcion.magenta, '\n');
            console.log('Estado:'.cyan, (tarea.completado) ? 'completado'.blue : 'pendiente'.red, '\n');
            console.log('========================='.green, '\n');
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('el comando no es roconocido'.red);
}