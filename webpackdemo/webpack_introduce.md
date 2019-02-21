##1.使用npm全局安装webpack

npm install webpack --global


##2.查看webpack是否安装成功
webpack -help


##3.创建文件夹
mkdir  demo
cd  demo


##4.npm初始化一个package
npm init（全部使用默认）

##5.在文件夹中安装webpack添加本地依赖

npm install webpack --save-dev

##6.创建entry.js,index.html

##7.使用webpack打包输出bundle.js文件
webpack entry.js bundle.js

##8.使用css-loader,style-loader
	##先安装 npm install css-loader style-loader --save-dev
	##引入样式文件
		在entry文件中  require("style!css!.style.css");


## 9.因为webpack压缩打包后文件不便调试
 使用命令
 webpack --devtool source-map
 打包关联源文件，map文件


 ##10.使用babel转码器
 安装babel
 npm install babel-core babel-loader babel-preset-es2015 --save-dev

babel-preset-es2015,将浏览器不支持的高级语法转成es5语法


##11.创建babel配置文件 .babelrc
添加presets声明
presets: ['es2015']

webpack.config.js增加babel-loader配置

babel使用了es5转换器，支持es6新语法特性

##12.webpack-dev-server
安装开发服务器
	功能：监视文件变化，自动热更新
	##安装：npm install webpack-dev-server --global
			npm install webpack-dev-server --save-dev
			全局和本地都安装一遍
#####注意webpack也需要本地安装，否则找不到module webpack

13.()