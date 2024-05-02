const path = require("path");
const nameofTransformer = require("@typescript-nameof/nameof");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: path.resolve(__dirname, "index.ts"), 

  output: {
    path: path.resolve(__dirname, "dist")
  }, 

  devServer: {
    open: true, 
    host: "localhost"
  }, 
  
  plugins: [
    new HtmlWebpackPlugin(), 
  ], 

  module: {
    rules: [
      {
        test: /\.(ts|js)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/", /\.d\.ts$/i],
        options: {
          getCustomTransformers: () => {
            return {
              before: [ nameofTransformer ]
            }
          }
        }
      }
    ]
  }, 
  resolve: {
    extensions: [ ".ts", ".js", ".html" ]
  }
}

module.exports = config;