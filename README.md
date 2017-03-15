### Learn more and know more

这个项目记录我学习 JavaScript 的点点滴滴！

* `coderwars.com`是我在[http://www.codewars.com](http://www.codewars.com)做 JS 题目时总结的经验和部分题目代码。
* `JavaScript Ninja` 是 《JavaScript 忍者秘籍》的代码
* `Interesting` 是 JS 中比较绕人的题目，来源于平时和同学、基友的讨论
* `BuildJQuery` 是我学习 JQuery 的基础

### 一些有意思我碰到的面试题

**问题 1：用原生的 JS 实现深拷贝函数，带有 deep 开关，可选择是否深拷贝。**[来源](https://github.com/qiu-deqing/FE-interview#编写javascript深度克隆函数deepclone)。

其实关于深拷贝，jQuery 中 extend 函数就实现了，只不过它接受的参数比较多，功能比较复杂而已。[extend](http://yuren.space/blog/2017/01/29/jquery-source-main/#extend)。

```javascript
// ojb 克隆对象，deep 表示是否为深拷贝
function clone(obj, deep){
  // 非引用数据，直接返回，同时也实现递归
  if(!obj || typeof obj !== 'object'){
    return obj;
  }

  if(deep){
    if(obj.nodeType && obj.cloneNode){
      return obj.cloneNode(true);
    }

    var str = Object.prototype.toString.call(obj);
    if(str === '[object RegExp]'){
      var arr = [];
      if(obj.global) arr.push("g");
      if(obj.multiline) arr.push("m");
      if(obj.ignoreCase) arr.push("i");
      return new RegExp(obj.source, arr.join(""));
    }
    if(str === '[object Date]'){
      return new Date(obj.getTime());
    }
  }

  var ret = Array.isArray(obj) ? [] : 
      obj.constructor ? new obj.constructor() : {},
      i;
  if(deep){
    for(i in obj){
      ret[i] = clone(obj[i], true);
    }
  }else{
    for(i in obj){
      ret[i] = obj[i];
    }
  }
  return ret;
}
```