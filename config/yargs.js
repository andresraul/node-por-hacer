const descripcion = {
    alias: 'd',
    describe: 'Agrega una descripción de la tarea por hacer',
    demand: true
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado: {
            alias: 'c',
            describe: 'Marca como completado o pendiente la tarea',
            default: true
        }
    })
    .command('borrar', 'Borrar tarea', {
        descripcion
    })
    .command('listar', 'Listado de tareas', {
        completado: {
            alias: 'c',
            describe: 'Lista las tareas completadas o las tareas sin completar',
            default: true
        }
    })
    .help()
    .argv;



module.exports = {
    argv
}