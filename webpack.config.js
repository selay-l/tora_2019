const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 'production' か 'development' を指定
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  mode: MODE,
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js"
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.pug"
    }),
    new HtmlWebpackPlugin({
      title: "レギュレーション",
      filename: "regulation.html",
      template: "./src/regulation.pug"
    }),
    new HtmlWebpackPlugin({
      title: "人物",
      filename: "npc.html",
      template: "./src/npc.pug"
    }),
    new HtmlWebpackPlugin({
      title: "世界",
      filename: "world.html",
      template: "./src/world.pug"
    }),
    new HtmlWebpackPlugin({
      title: "ルール",
      filename: "undertown.html",
      template: "./src/undertown.pug"
    }),
    new HtmlWebpackPlugin({
      title: "アイテム",
      filename: "items.html",
      template: "./src/items.pug"
    }),
    new HtmlWebpackPlugin({
      title: "セッション記録(4月)",
      filename: "report_1904.html",
      template: "./src/report_1904.pug"
    }),
    new HtmlWebpackPlugin({
      title: "セッション記録(6月)",
      filename: "report_1906.html",
      template: "./src/report_1906.pug"
    }),

    new HtmlWebpackPlugin({
      title: "セッション記録(8月)",
      filename: "report_1908.html",
      template: "./src/report_1908.pug"
    }),

    new HtmlWebpackPlugin({
      title: "セッション記録(10月)",
      filename: "report_1910.html",
      template: "./src/report_1910.pug"
    }),

    new ExtractTextPlugin("style.css")
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        use: ExtractTextPlugin.extract({
          use: [
            // CSSをバンドルするための機能
            {
              loader: "css-loader",
              options: {
                // オプションでCSS内のurl()メソッドの取り込みを禁止する
                url: false,
                // ソースマップの利用有無
                sourceMap: enabledSourceMap,

                // 0 => no loaders (default);
                // 1 => postcss-loader;
                // 2 => postcss-loader, sass-loader
                importLoaders: 2
              }
            },
            {
              loader: "sass-loader",
              options: {
                // ソースマップの利用有無
                sourceMap: enabledSourceMap
              }
            }
          ]
        })
      }
    ]
  }
};
module.exports = (env, argv) => {
if (argv.mode === 'development') {}
 if (argv.mode === 'production') {}
return config;
}