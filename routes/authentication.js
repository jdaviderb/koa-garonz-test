const KoaRouter = require('koa-router')
const router = new KoaRouter({
	prefix: '/login'
})
const jwt = require('jsonwebtoken')

router.post('/', async (ctx) => {
	const params = ctx.request.body
	if (params.username === 'jdaviderb') {
		ctx.status = 200
		ctx.body = {token: jwt.sign({id: 1, name: 'jorge hernandez'}, process.env.JWT)}
	} else {
		ctx.status = 400
		ctx.body = {failed: false}
	}
})

module.exports = router