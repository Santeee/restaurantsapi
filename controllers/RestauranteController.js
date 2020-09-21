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

module.exports = {
    saveOne
}