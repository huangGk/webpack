import './index.scss';
import logo from './logo.png';

let img = new Image();
img.src = logo;
img.classList.add('avatar');

let root = document.getElementById('root');

let fontElement = document.createElement('span')
fontElement.className = 'iconfont icon-check-circle';

root.append(fontElement);
root.append(img);