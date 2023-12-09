const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/components/setting/profiles/manage.js",
  output: {
    filename: "manage.css",
    path: path.resolve(__dirname, "./src/assets/css"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
