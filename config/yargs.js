const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tearea'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', "Crea una nueva Tarea", {
        descripcion
    })
    .command('listar', 'Lista todas las tares', {

    })
    .command('actualizar', 'Cambia el estaddo de una tarea', {
        descripcion,
        completado
    }).command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}