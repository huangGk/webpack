- demo3
	- webpack 如何开启服务，并且启用模块热更新
	- webpack 开启服务有三种方法
		- webpack watch mode(webpack 观察模式)
		- webpack-dev-server(该demo使用的webpack-dev-server loader来开启的服务)
		- webpack-dev-middlewar(通过node的express框架开启一个node服务)
	- 如何通过babel将es6代码编译成es5代码
		
		1. 需要安装babel-loader @babel/core这两个包，来处理js文件
		2. 通过安装@babel/plugin-transform-runtime 包文件，在.babelrc文件里面配置(这个配置不会污染全局作用域)
		{
		  "plugins": [
		    [
		      "@babel/plugin-transform-runtime",
		      {
		        "corejs": false, // 如果设置为2，就需要单独安装一个包@babel/runtime-corejs2
		        "helpers": true,
		        "regenerator": true,
		        "useESModules": false
		      }
		    ]
		  ]
		}
		3. 或者通过另一种方式来配置Babel(这种方法会污染全局作用域)，需要安装 @babel/preset-env @babel/polyfill 这两个包，在webpack.config.js里面设置entry: ["@babel/polyfill", "./src/index.js"]，并且在rules里面针对js的规则里面添加一个
		options: { 
			// options具体配置参数可以参照Babel官网https://babeljs.io/docs/en/next/babel-preset-env.html
			presets: [
				[
					'@babel/preset-env', 
					{
						target: {},
						useBuiltIns: 'usage' 只打包用到的es6语法，到index.js文件里面
					}
				]
			]
		}
		
		
		

	