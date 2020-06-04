const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

    app.use(createProxyMiddleware('/api',
        {
            target: 'http://localhost:988',
            changeOrigin: true,
            headers: {
                host: 'http://localhost:988',
                origin: 'http://localhost:988'
            }
        }));

    //app.use(proxy(...)) //可以配置多个代理
}