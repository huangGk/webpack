# 配置loader
  webpack不能识别非JS后缀的文件（模块），需要通过loader进行配置
  loader执行顺序，从下到上，从右到左
## loader匹配规则 ##
	
- 当我们需要配置loader时，都是在module.rules中添加新的配置项，在该字段中每一项被视为一条匹配使用loader的规则
### 规则条件配置 ###
- test 匹配特定条件
- include 匹配特定路径
- exclude 排除特定路径
- and 必须匹配数组中的所有条件
- or 匹配数组中的任意一个条件
- not 排除匹配数组中所有的条件
上述的匹配条件的值可以是：
- 字符串： 必须以提供的字符串开始，所以是字符串的话，这里需要提供绝对路径、
- 正则表达式：调用正则表达式的test方法来判断
- 函数：(path) => boolean, 返回true表示匹配
- 数组：至少包含一个条件的数组
- 对象：匹配所有属性值的条件

#### file-loader 与 url-loader区别 ####
- url-loader 将文件转换成base64格式的地址包含在js文件中，而不是作为单独的文件加载到另一个请求中，可以通过limit字段来限制文件大小。如果超出了limit的限制默认会调用file-loader进行处理(url-loader可以用来处理图片，减少http请求)
- file-loader 会去解析文件中的import/ require()，并将文件输出到打包后的目录中
#### autoprefixer可以补全CSS代码中的前缀，以便兼容不同浏览器 ####