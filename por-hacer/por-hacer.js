const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);


    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {


    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];

    }



}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListado = (estado) => {
    if (estado) {
        cargarDB()
        let nuevo = listadoPorHacer.filter(tarea => tarea.completado === true)
        return nuevo;
    } else {

        cargarDB();
        return listadoPorHacer;
    }
}

const actualizar = (descripcion, estado) => {
    if (estado != true && estado != 'true' && estado != 'false') {

        return 'Solo se admiten valores booleanos';
    }

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {

        listadoPorHacer[index].completado = JSON.parse(estado);
        guardarDB();
        return true;

    } else {

        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {

        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true
    } else {
        return false;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}