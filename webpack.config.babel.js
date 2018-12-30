import path from 'path';
import writeFilePlugin from 'write-file-webpack-plugin';

export default {
    mode: 'production',
    //devtool: 'cheap-source-map',
    entry: {
        es6_101: [
            './es6_101/t1_es6.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    target: 'node',

    module: {
        rules: [
            // js files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    optimization: {
        minimize: false,
        namedModules: false
    },

    // watch: true,
    // watchOptions: {
    //     ignored: /node_modules/
    // },

    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 4000,
        index: 'index.html',
        watchOptions: {
            ignored: /node_modules/
        }
    },

    plugins: [
        new writeFilePlugin()
    ]
};