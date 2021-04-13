const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const withTM = require('next-transpile-modules')(['react-cron-generator'])
const withPlugins = require('next-compose-plugins')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './styles/antd-custom.less'), 'utf8')
)

module.exports = withPlugins([
  [withTM],
  [withCSS],
  [
    withLess,
    {
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables
      }
    }
  ]
])
