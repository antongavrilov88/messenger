const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        writeToDisk: true,
        hot: true,
        port: 9000,
        overlay: true,
        open: true
      },
    mode: 'development',
    entry: './build/js/index.js',
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
                            src: './'
                        },
                    },
                ],
                exclude: /(node_modules)/
            }
        ]
    }
}; 

// // module.exports = {
//     entry: './src/index.js',
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: 'bundle.js'
//     }
//   };