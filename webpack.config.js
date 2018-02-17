var webpack =require("webpack");
const path = require('path');

module.exports={
  entry: "./src/index.js",
  output:{
    path: path.resolve(__dirname, "dist/assets"),
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer:{
    inline: true,
    contentBase: './dist',
    port: 8080
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /{node_modules}/,
        loader: ["babel-loader"],
      },
      {
        test: /\.json$/,
        exclude: /{node_modules}/,
        loader: "json-loader",

      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader",

      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!autoprefixer-loader!sass-loader",

      }
    ]


  }
}