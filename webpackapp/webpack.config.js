const path = require("path");

module.exports = {
	//配置入口文件
	entry:"./src/js/app.js",
	//配置出口文件
	output:{
		// path:__dirname,                 //不引人path用这个
		path:path.resolve(__dirname + "/dist"),       //引入path用这个
		filename:"bundle.js"
	},
	module:{     //配置模块信息
		loaders:[
			{
				test:/\.css$/,     //正则
				loader:"style-loader!css-loader"
			},
			{
				test:/\.js$/,
				loader:"babel-loader",
				exclude:/node_modules/,            //不包含
				query:{
					presets:["es2015"]
				}
			}
		]
	}
}