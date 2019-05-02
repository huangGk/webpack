// import './index.css';
// let btn = document.createElement('button');

// btn.innerHTML = '新增';
// document.body.appendChild(btn);

// btn.onclick = () => {
//   let div = document.createElement('div');
//   div.innerHTML = 'item';
//   document.body.appendChild(div)
// }
// 测试css模块热替换，css文件不需要写module.hot.accept的原因。是因为style-loader里面已经帮我们做了处理
// ---------------------------------------------

import counter from './counter';
import number from './number';

counter();
number();
if (module.hot) {
  // 具体内容参考webpack官方文档 API 模块热替换里面的介绍 https://webpack.docschina.org/api/hot-module-replacement/
  module.hot.accept('./number.js', () => {
    // 监听number.js文件发生变化
    document.body.removeChild(document.getElementById('number'));
    number();
  });
}
