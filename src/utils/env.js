/**
 * @description 环境变量
 * @author 双越
 */

const ENV = process.env.NODE_ENV || ''

module.exports = {
    isPrdDev: ENV === 'prd_dev',
    isDev: ENV === 'dev'
}
