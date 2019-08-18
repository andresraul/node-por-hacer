const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let completo = false;
        if ((argv.completado == 'true' || argv.completado == true) && (process.argv.length > 3)) {
            completo = argv.completado;
        }

        let listado = [];

        if (argv.completado == 'false') {
            let lista = porHacer.getListado(completo)
            listado = lista.filter(list => list.completado == false);
        } else {
            listado = porHacer.getListado(completo)
        }


        for (let tarea of listado) {
            console.log('===============Por Hacer============='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('====================================='.green);

        }
        break;
    case 'borrar':
        let borrarTarea = porHacer.borrar(argv.descripcion)
        console.log(borrarTarea);
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    default:
        console.log('Comando no reconocido');

}