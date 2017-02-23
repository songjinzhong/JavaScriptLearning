/*
 * 关于获得 dom 背景颜色 backgroud-color 的原生实现方法
 */

/*
 * 转成驼峰写法
 */

function getCamel(str){
  return str.replace(/-(\w)/g, (all, m1)=>m1.toUpperCase());
}

/*
 * 驼峰转 - 写法
 */

function getU(str){
  return str.replace(/[A-Z]/g, '-$&');
}

/*
 * 原生 js 获取 dom style 属性
 */

// 假设 name  - 写法
function getStyle(elem, name){
  if(!name){
    // 二少一
    return;
  }
  if(elem.nodeType != 1){
    // 非 elem 元素
    return;
  }
  name = getU(name);
  if(elem.style[name]){
    return elem.style[name];
  }
  name = getCamel(name);
  return (elem.currentStyle && elem.currentStyle[name]) || (window.getComputedStyle && window.getComputedStyle(elem)[name])
}