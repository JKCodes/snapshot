var webpack = require('webpack');
var path = require('path');
require('dotenv').config();

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'public/dist/bundle.js',
    sourceMapFilename: 'public/dist/bundle.map'
  },
  devtool: '#source-map',
  plugins: process.env.NODE_ENV === 'production' ? [
      new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: true
        }
      }),
      new webpack.EnvironmentPlugin([
        'CLOUDINARY_CLOUDNAME',
        'CLOUDINARY_API_KEY',
        'CLOUDINARY_API_SECRET',
        'CLOUDINARY_UPLOAD_PRESET'
      ])
  ] : [
    new webpack.EnvironmentPlugin([
      'CLOUDINARY_CLOUDNAME',
      'CLOUDINARY_API_KEY',
      'CLOUDINARY_API_SECRET',
      'CLOUDINARY_UPLOAD_PRESET'
    ])
  ], 
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query:{
          presets:['react', 'es2015']
        }
      }
    ]
  }
}