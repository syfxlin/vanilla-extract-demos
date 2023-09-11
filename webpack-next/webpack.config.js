const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin/next");

module.exports = {
  mode: "production",
  entry: "./src/index.css.js",
  plugins: [
    new VanillaExtractPlugin(),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /vanilla\.virtual\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              url: false
            }
          },
          VanillaExtractPlugin.loader,
        ]
      }
    ]
  }
}
