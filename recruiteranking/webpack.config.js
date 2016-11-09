var path = require("path");

module.exports = {
    entry: {
      main: "./app/js/main.js"
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.vue$/, loader: 'vue' }
        ]
    },
     sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules/foundation-sites/scss/")]
    }
};