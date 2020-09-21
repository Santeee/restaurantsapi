const { restaurantes } = require("../models/Restaurante")

/**
 * Verifica que el nombre del resutante exista en la lista
 */
const nameExists = (restaurantes, name) => {
    const match = restaurantes.filter( restaurante => restaurante.name == name)

    return match.length != 0
}

/**
 * Guarda un restaurante en el listado...
 */
const saveOne = (restaurantes, nuevoRestaurante) => {
    restaurantes.push(nuevoRestaurante)

    return restaurantes
}

module.exports = {
    nameExists,
    saveOne
}