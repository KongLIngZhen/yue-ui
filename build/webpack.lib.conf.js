'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const vueLoaderConfig = require('./vue-loader.conf')
const components = require('../src/components/components.json')

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

const webpackConfig = merge(
  {
    context: path.resolve(__dirname, '../'),
    entry: function () {
      let ent = {}
      let componentNames = Object.keys(components)
      componentNames.forEach(name => {
        ent[name] = components[name]
      })
      return ent
    },
    output: {
      path: config.lib.assetsRoot,
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    },
    plugins: [

    ],
    module: {
      rules: [
        ...(config.dev.useEslint ? [createLintingRule()] : []),
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: vueLoaderConfig
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
        }
      ]
    },
    node: {
      // prevent webpack from injecting useless setImmediate polyfill because Vue
      // source contains it (although only uses it if it's native).
      setImmediate: false,
      // prevent webpack from injecting mocks to Node native modules
      // that does not make sense for the client
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    }
  },
  {
    module: {
      rules: utils.styleLoaders({
        sourceMap: config.lib.productionSourceMap,
        extract: true,
        usePostCSS: true
      })
    },
    devtool: config.lib.productionSourceMap ? config.lib.devtool : false,
    output: {
      path: config.lib.assetsRoot,
      filename: '[name].js',
      publicPath: '',
      library: '[name]',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {
      jquery: {
        root: 'jquery',
        commonjs: 'jquery',
        commonjs2: 'jquery',
        amd: 'jquery',
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': env
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false
          },
          output: {
            beautify: true,
            indent_level: 2
          }
        },
        sourceMap: config.lib.productionSourceMap,
        parallel: true
      }),
      // enable scope hoisting
      new webpack.optimize.ModuleConcatenationPlugin()
    ]
  }
)

if (config.lib.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
