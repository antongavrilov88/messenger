const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        writeToDisk: true,
        hot: true,
        port: 9000,
    },
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'project-name.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'sass-loader'
                    }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My messenger',
            template: 'static/index.html'
        })
    ]
};