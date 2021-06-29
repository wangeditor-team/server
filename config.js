/**
 * @description 全局配置
 */

const ENV = process.env.NODE_ENV || 'prd_dev'

let IP = ENV === 'prd_dev' ? '106.12.198.214' : '127.0.0.1'

module.exports = {
    PROTOCOL: 'http',
    IP,
    PORT: '3000'
}
