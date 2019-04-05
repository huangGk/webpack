# webpack如何进行模块解析

## 模块解析规则 ##
- 解析相对路径
	- 查找相对当前模块的路径下是否有对应的文件或文件夹
	- 是文件直接加载
	- 是文件夹则继续查找文件夹下的package.json文件
	- 有package.json文件则按照文件中main字段的文件名来查找文件
	- 没有package.json文件或无main字段则查找index.js文件
- 解析模块名
	- 查找当前文件目录下，父级目录及上下目录的node_modules文件夹，看是否有对应名称的模块
- 解析绝对路径
	- 直接查找对应路径的文件

## 常用的一些配置 ##
- resolve.alias 配置某个模块(路径)的别名， Vue中的@就是通过webpack中的alias来进行配置的
	- path.resolve用于将相对路径转换成绝对路径 __dirname当前模块的路径名
	- alias: { @: path.resolve(__dirname, 'src') } 模糊匹配
	- alias:{ @$:path.resolve(__dirname, 'src') } 精确匹配
- resolve.extensions 作用：在进行解析模块路径的时候，webpack会尝试帮你补全那些后缀名来进行查找
	- extensions:[ '.js', '.json', '.vue' ] 
		- 引用index.vue文件的时候可以写成 import index from 'index' 因为webpack会自动补全后缀
- resolve.modules 解析模块时应该搜索的目录
	- modules: ['node_modules']  import React from 'react'，直接引用react,那么webpack会从node_modulse文件夹下面查找对应的依赖
- resolve.mainFiles
	- 当目录下没有package.json文件的时候，可以通过通过resolve.minFules进行配置
	- mainFiles: ['index'] 如果直接引用某个文件夹，该文件夹中没有package.json文件，那么会直接去查找mainFiles中配置的文件名