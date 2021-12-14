// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [path.resolve(__dirname, './src/assets/scss/variable.scss')],
        })
}

module.exports = {
    siteName: 'Gridsome',
    siteUrl: 'https://raypan13.github.io',
    pathPrefix: '/wedding',
    plugins: [],
    chainWebpack(config) {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach((type) => {
            addStyleResource(config.module.rule('scss').oneOf(type))
        })
    },
}
