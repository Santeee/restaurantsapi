const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const RestauranteController = require('./controllers/RestauranteController')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/restaurantes', RestauranteController.getAll)
app.post('/restaurantes', RestauranteController.saveOne)
app.get('/restaurantes/king/:king', RestauranteController.getAllByKing)


app.listen(port, () => {
    console.log(`Corriendo en: http://localhost:${port}`)
})