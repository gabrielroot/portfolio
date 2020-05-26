const {Router} = require('express')
const routes = Router()
const paginas = require('../controllers/paginas')

routes.get('/', paginas.index)

module.exports = routes