const Koa = require('koa')
const jsonParse = require('koa-bodyparser')
const cors = require('kcors')
const app = new Koa()
const env = require('dotenv').config()

// middlewares
app.use(jsonParse())
app.use(cors())
app.use(require('./middlewares/unauthorized'))
// routes
const notices = require('./routes/notices')
const authentication = require('./routes/authentication')
app.use(notices.routes())
app.use(authentication.routes())

app.listen(3000)