const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const routes = require('./src/routes/routes')

const forceSsl = function (req, res, next) {   //Redirecionamento automático de HTTP para HTTPS
    if (req.headers['x-forwarded-proto'] !== 'https'  && req.hostname !== 'localhost') {
        console.log('REDIRECT HTTP > HTTPS')
        return res.redirect(['https://', req.get('Host'), req.url].join(''))
    }
    return next()
}
app.use(forceSsl)

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