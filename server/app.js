const Koa = require('koa')

const router = require('./router')

const app = new Koa()

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(8099, () => {
    console.log('server is running on port 8099')
})
