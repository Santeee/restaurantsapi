const { restaurantes } = require("../models/Restaurante")

/**
 * Verifica que el nombre del resutante exista en la lista
 * @param {Array} restaurantes Resturantes actualmente en memoria
 * @param {String} name Nombre del restaurante a buscar
 */
const nameExists = (restaurantes, name) => {
    const match = restaurantes.filter( restaurante => restaurante.name == name)

    return match.length != 0
}

/**
 * Guarda un restaurante en el listado...
 * @param {Array} restaurantes Resturantes actualmente en memoria
 * @param {Object} nuevoRestaurante Datos del nuevo restaurante
 */
const saveOne = (restaurantes, nuevoRestaurante) => {
    restaurantes.push(nuevoRestaurante)

    return restaurantes
}

/**
 * Busca los restaurantes que tengan el mismo atributo kingOfRestaurant
 * @param {Array} restaurantes Resturantes actualmente en memoria
 * @param {String} kingName Nombre de kingOfRestaurante a buscar
 */
const getAllByKing = (restaurantes, kingName) => {
    const match = restaurantes.filter( restaurante => restaurante.kingOfRestaurant == kingName)

    return match
}

module.exports = {
    nameExists,
    saveOne,
    getAllByKing
}