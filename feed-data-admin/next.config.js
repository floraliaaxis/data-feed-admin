const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './styles/antd-custom.less'), 'utf8')
)

module.exports = withLess({
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables
    }
})