const koaRouter = require('koa-router')
const router = new koaRouter({
	prefix: '/notices'
})
const needAuth = require('../middlewares/jwt')
router.use(needAuth)

router.get('/', async (ctx) => {
	ctx.status = 200
	ctx.body = [{id: 1}, {id: 2}, {id: 3}, {id: 45}]
})

router.get('/:id', async (ctx) => {
	ctx.status = 200
	ctx.body = {id: ctx.params.id}
})

module.exports = router