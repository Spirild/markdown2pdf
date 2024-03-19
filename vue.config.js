const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const devEnv = require("./config/dev.env")

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {  
    config.plugin('define').use(webpack.DefinePlugin, [{  
      'process.env': devEnv  
    }]);  
  } 
})
