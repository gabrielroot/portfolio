const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const routes = require('./src/routes/routes')

nunjucks.configure('./src/views',{
    express: app,
    noCache: true
})

app.set('view engine', 'njk')
app.use(express.static('./src/public'))

app.use(routes)

app.listen(process.env.PORT || 9000, ()=>{
    console.log('Rodando na porta 9000')
})