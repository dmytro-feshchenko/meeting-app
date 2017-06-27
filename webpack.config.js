var webpack = require('webpack');
const path = require('path');

var config = {
    context: __dirname + '/src/main/resources/static', // `__dirname` is root of project and `src` is source
    entry: {
        app: './app.js',
    },
    output: {
        path: __dirname + '/src/main/resources/dist', // `dist` is the destination
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
            path.join(process.cwd(), 'src/main/resources/static'),
            'node_modules'
        ],
        extensions: [ '*', '.js', '.json']
    },
    devtool: false
};

module.exports = config;