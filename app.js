const Koa = require('koa')
const jsonParse = require('koa-bodyparser')
const cors = require('kcors')
const app = new Koa()
const env = require('dotenv').config()
const logger = require('koa-logger')
const helmet = require('koa-helmet')


// middlewares
app.use(logger())
app.use(helmet())
app.use(jsonParse())
app.use(cors())
app.use(require('./middlewares/unauthorized'))
// routes
const users = require('./routes/users')
const authentication = require('./routes/authentication')
app.use(users.routes())
app.use(authentication.routes())
app.listen(process.env.PORT_SERVER || 3000)