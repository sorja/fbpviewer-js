const webpack = require('webpack');

var config = {
  context: __dirname + '/js', // `__dirname` is root of project and `js` is source
  entry: {
    fbpviewer: './init.js',
  },
  externals: [
    {
      "window": "window",
      "navigator": "navigator"
    }
  ],
  output: {
    path: __dirname + '/../src/AppBundle/Resources/public/js',
    filename: '[name].bundle.js',
  },
  devtool: "cheap-module-eval-source-map",
};

module.exports = config;
