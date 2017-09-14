module.exports  = async (ctx, next) => next().catch((err) => {
	if (err.status === 401) {
		ctx.status = 401
		ctx.body = {message: ':( bye'}
	}
})