var path    = require('path');
var webpack = require('webpack');
var fs      = require('fs');

module.exports = {
  entry: {
    'editor' : './src/editor/entry.ts'
  },
  output: {
    path: __dirname + '/public',
    filename: '/bundle/[name].js',
    publicPath: '/public/',
    sourceMapFilename: '/bundle/[name].js.map'
  },
  resolve: {
    modulesDirectories: [__dirname + '/src', 'node_modules', 'bower_components', 'src', 'vendor', __dirname],
    extensions: ['', '.json', '.ts', '.scss']
  },
  devtool: 'inline-source-map',
  
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src')]
  },
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  },
  lazy: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 500
  },
  node: {
    __filename: true
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff)$/,
        loader: 'url-loader?limit=1000'
      },
      {
        test: /\.pegjs$/,
        loader: 'pegjs-loader?cache=true'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.json$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'json'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
};
