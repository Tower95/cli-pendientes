const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);


    fs.writeFile('por-hacer/db/data.json', data, (err) => {
        if (err) {
            throw err;
        } else { console.log('Modificacion Exitosa!') };
    });

}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../por-hacer/db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }
}

const getListado = () => {

    let carga = cargarDB();

    return (listadoPorHacer);
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    if (completado === "false") completado = false;
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
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

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}