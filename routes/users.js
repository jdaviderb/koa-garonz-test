const koaRouter = require('koa-router')
const user = require('../models/user')
const router = new koaRouter({
	prefix: '/users'
})
const needAuth = require('../middlewares/jwt')
const bcrypt = require('bcrypt')
router.use(needAuth)

router.get('/', async (ctx) => {
	const users = await user.find()
	const salt = '$2a$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa'
	const password = await bcrypt.hash('lol', salt)
	console.log('password: ')
	console.log(bcrypt.compare)

	ctx.status = 200
	ctx.body = users
})

router.get('/:id', async (ctx) => {
	ctx.status = 200
	ctx.body = {id: ctx.params.id}
})

module.exports = router