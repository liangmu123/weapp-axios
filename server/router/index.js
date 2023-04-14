const Router = require('koa-router')

const router = new Router()

router.get('/user', async ctx => {
    ctx.body = {
        name: 'jack',
        age: 18
    }
})

module.exports = router