var nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  target: "node",
  externals: [nodeExternals()],
  externalsPresets: {
        node: true // in order to ignore built-in modules like path, fs, etc. 
  },
  entry: {
    main: "./src/main.ts",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "app-bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
	exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  }
};
