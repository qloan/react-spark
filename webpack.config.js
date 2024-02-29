const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin');

const nodeEnv = process.env.NODE_ENV

console.log(`Now building React-Spark for ENV: ${nodeEnv}`)

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(nodeEnv)
  })
]

if (nodeEnv === 'analyze') {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
  plugins.push(new BundleAnalyzerPlugin())
}



const webpackConfig = {
  entry: './src/index.js',
  devtool: nodeEnv === 'dev' ? 'eval' : 'source-map',
  output: {
    filename: 'react-spark-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'react-spark'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: ['babel-loader']
      }
    ]
  },
  plugins,
  stats: {
    errors: true
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 1000,
    poll: 1000
  }
};

if (nodeEnv === 'production' || nodeEnv === 'analyze') {
  webpackConfig.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: true,
          compress: {
            warnings: false
          }
        }
      })
    ]
  };
  plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
}

module.exports = webpackConfig;
