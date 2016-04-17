var path              = require('path');
var webpack           = require('webpack');

var babelPresets = ['react', 'es2015', 'stage-1', 'stage-0'];

module.exports = {
  entry: {
    'editor' : './src/editor/entry.js'
  },
  output: {
    path: __dirname + '/public',
    filename: '/bundle/[name].js',
    publicPath: '/public/',
    sourceMapFilename: '/bundle/[name].js.map'
  },
  resolve: {
    modulesDirectories: [__dirname + '/src', 'node_modules', 'bower_components', 'src', 'vendor', __dirname],
    extensions: ['', '.json', '.jsx', '.js', '.scss']
  },
  devtool: 'inline-source-map',
  
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src')]
  },
  lazy: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 500
  },
  node: {
    __filename: true
  },
  isparta: {
    embedSource: true,
    noAutoWrap: true,
    // these babel options will be passed only to isparta and not to babel-loader
    babel: {
      presets: babelPresets
    }
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
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: babelPresets,
          plugins: ['transform-decorators-legacy'],
          ignore: ['buffer']
        }
      }
    ]
  }
};
