const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    devServer: {
        client: {
            overlay: true,
            progress: true,
            reconnect: true,
        },
        open: true,
        port: 9000,
        historyApiFallback: true,
    },
    entry: [path.resolve(__dirname, "src", "root.jsx")],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader','css-loader', 'sass-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    resolve: {
        alias: {
            "@common": path.resolve(__dirname, 'src', 'common'),
            "@pages": path.resolve(__dirname, 'src', 'pages'),
            "@services": path.resolve(__dirname, 'src', 'services'),
            "@style": path.resolve(__dirname, 'src', 'style')
        },
        extensions: [".js", ".jsx"]
    }
}