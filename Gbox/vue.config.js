module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8082,
        open: true
    },
    baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
    // build: {
    //     assetsPublicPath: './',
    // }
};