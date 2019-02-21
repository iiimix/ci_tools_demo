var webpack = require("webpack");
var path =require("path");

module.exports = {
	// entry: "./js/entry.js",
	entry: "./js/Box.js",
	output : {
		path: path.resolve(__dirname, "dist"),
		filename : "bundle.js"
	},
	devtool: "#source-map",
	module : {
		loaders : [
			{test: /\.js$/, exclude:/node_modules/, loader: "babel-loader" },
			{test: /\.css$/, loader: "style-loader!css-loader" },
			{test: /.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
		]
	},
    devServer: {
        // contentBase: __dirname,  //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true  //实时刷新
    },
    plugins:[
    	new webpack.BannerPlugin("@iiimix All rights reserved版权所有 翻版必究")
	]
}

// entry 打包入口文件
// output 指定目标输出文件夹 path需要使用绝对路径
// devtool  生成sourceMap源文件
// module 使用转换器loaders
