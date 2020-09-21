const RestauranteService = require('../services/RestauranteService')
let { restaurantes } = require('../models/Restaurante')

/**
 * Valida los datos y si no existe duplicados guarda los datos de un restaurante
 */
const saveOne = (req, res) => {

    if (RestauranteService.nameExists(restaurantes, req.body.name)){
        res.status(400)
        return res.send("El nombre del restaurante ya existe")
    }

    restaurantes = RestauranteService.saveOne(restaurantes, req.body)

    res.status(201)
    res.send("Restaurante agregado")
}

/**
 * Devuelve el listado de todos los restaurantes...
 */
const getAll = (req, res) => {
    res.json( restaurantes )
}

/**
 * Devuelve el listado de todos los restaurantes que tengan el mismo atributo kingOfRestaurante
 */
const getAllByKing = (req, res) => {

    let restaurantesSameKing = RestauranteService.getAllByKing(restaurantes, req.params.king)

    res.json( restaurantesSameKing )
}

module.exports = {
    saveOne,
    getAll,
    getAllByKing
}