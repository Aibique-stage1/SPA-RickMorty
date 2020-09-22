const path = require('path');// Direct acces to the folders (local or cloud)
const HtmlWebpackPlugin = require('html-webpack-plugin');//Permit to work with html
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports ={ //Block of settings of what will happen. It will be exported.
    entry: './src/index.js',// From this point will be export the code settings.
    output: {//Adress where the project compiled and structured will be sent.
        path: path.resolve(__dirname, 'dist'),//Building location where the proyect will be sent.
        filename: 'main.js'//Final file to received the proyect.
    },
    resolve:{
        extensions: ['.js'],//Type of extensions to use
    },
    module:{//Module that contains the rules we are going to work under.
        rules: [
            {//Babel Structure
                test: /\.js?$/,//It helps to identify the files in our enviroment.
                exclude:/node_modules/,//Exclude the folder "node_modules"
                use:{
                    loader: 'babel-loader',//Babel loader as stablished setting
                }
            }
        ]
    },
    plugins: [//Pluggins to use
        new HtmlWebpackPlugin(//It allows to work with html files
            {
                inject: true,//Way to inject value to html
                template: './public/index.html',//Adress of where the template is found
                filename: './index.html',//name of the file
            }
        ),
        new CopyWebpackPlugin({
            patterns:[{
                from: './src/styles/styles.css',
                to: ''
            }]
        }),
    ]

}
