const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [new HtmlWebpackPlugin()]
};
