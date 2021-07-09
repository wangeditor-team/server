/**
 * @description 服务端路由
 * @author wangfupeng
 */

const router = require('koa-router')()
const saveFiles = require('./controller/save-file')
const saveVideoFile = require('./controller/saveVideo-file')

router.prefix('/api')

// 测试用
router.get('/test', async function (ctx, next) {
    ctx.body = 'See other routes in `src/router.js`'
})

// 上传图片
router.post('/upload-img', async function (ctx, next) {
    const data = await saveFiles(ctx.req)
    ctx.body = data
})

// 上传图片 - 用于测试超时
router.post('/upload-img-10s', async function (ctx, next) {
    const data = await saveFiles(ctx.req, 10 * 1000)
    ctx.body = data
})

// 上传图片 - 测试 failed
router.post('/upload-img-failed', async function (ctx, next) {
    ctx.body = { errno: 1, message: 'upload-img-failed - 模拟失败' }
})

// 上传视频
router.post('/upload-video', async function (ctx, next) {
    const data = await saveVideoFile(ctx.req)
    ctx.body = data
})

module.exports = router
