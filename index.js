const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const RestauranteController = require('./controllers/RestauranteController')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/restaurantes', (req, res) => {
    res.send('Hello World!')
})

app.post('/restaurantes', RestauranteController.saveOne)

app.listen(port, () => {
    console.log(`Corriendo en: http://localhost:${port}`)
})