var webpack = require('webpack');
const path = require('path');

var config = {
    context: __dirname + '/../src/', // `__dirname` is root of project and `src` is source
    entry: {
        app: './index.js',
    },
    output: {
        path: __dirname + '/../dist', // `dist` is the destination
        filename: '[name].bundle.js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    'react',
                    'es2015',
                    'stage-2'
                ],
                plugins: []
            },
            exclude: /node_modules/,
            // include: [
            //     path.resolve(__dirname, '/src/main/resources/static')
            // ]
        }, {
            test: /\.json$/,
            loader: "json-loader"
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        // new BabiliPlugin()
    ],
    resolve: {
        modules: [
            path.join(process.cwd(), 'frontend/src'),
            'node_modules'
        ],
        extensions: [ '*', '.js', '.json']
    },
    devtool: false
};

module.exports = config;