### Learn more and know more

这个项目记录我学习 JavaScript 的点点滴滴！

* [coderwars.com](https://github.com/songjinzhong/JavaScriptLearning/tree/master/www.codewars.com) 是我在[http://www.codewars.com](http://www.codewars.com)做 JS 题目时总结的经验和部分题目代码。
* [JavaScript Ninja](https://github.com/songjinzhong/JavaScriptLearning/tree/master/JavaScript%20Ninja) 是 《JavaScript 忍者秘籍》的代码
* [Interesting](https://github.com/songjinzhong/JavaScriptLearning/tree/master/Interesting) 是 JS 中比较绕人的题目，来源于平时和同学、基友的讨论
* [BuildJQuery](https://github.com/songjinzhong/JavaScriptLearning/tree/master/BuildJQuery) 是我学习 JQuery 的基础

## 一些有意思我碰到的面试题

### deepClone

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

### flatArray

**问题 2：数组扁平化操作，传入数组参数，其中数组的每一个元素可以为整数或数组，然后按照顺序将其扁平化**。[来源](https://github.com/qiu-deqing/FE-interview#完成一个函数接受数组作为参数数组元素为整数或者数组数组元素包含整数或数组函数返回扁平化后的数组)。

看到这个，又让我想到了 **递归**，但是稍微有点麻烦，解决办法还是 nice 的：

```javascript
function flatArray(arr){
  var ret = [];
  function flat(arr2){
    arr2.forEach(function(a){
      if(typeof a === 'number'){
        ret.push(a);
      }else if(Array.isArray(a)){
        flat(a);
      }
    });
  }
  flat(arr);
  return ret;
}
```

原作者用了另外一种思路解决办法，不过要传入两个参数：

```javascript
function flat(data, result) {
    var i, d, len;
    for (i = 0, len = data.length; i < len; ++i) {
        d = data[i];
        if (typeof d === 'number') {
            result.push(d);
        } else {
            flat(d, result);
        }
    }
}

var result = [];
var data =  [1, [2, [ [3, 4], 5], 6]];
flat(data, result);

console.log(result);
```

### Event

**问题 3：实现一个简单的 event 事件类，要包括基本的 on、off、trigger**。[参考](https://github.com/qiu-deqing/FE-interview#请实现一个event类继承自此类的对象都会拥有两个方法onoffonce和trigger)。

用函数 + 原型链实现继承。

```javascript
function event(){
  this._callbacks = {};
}

event.prototype.on = function(type, handler){
  this._callbacks = this._callbacks || {};
  this._callbacks.type = this._callbacks.type || [];
  this._callbacks.type.push(handler);
  return this;
}

event.prototype.off = function(type, handler){
  var list = this._callbacks.type;
  if(list){
    list = list.filter(function(a){
      return a !== handler;
    })
  }
  return this;
}

event.prototype.trigger = function(type, data){
  var list = this._callbacks.type;
  if(list){
    list.forEach(function(a){
      a.call(this, data);
    })
  }
}

event.prototype.once = function(type, handler){
  var self = this;

  function deleSelf(){
    handler.apply(self, arguments);
    self.off(type, deleSelf);
  }
  self.on(type, deleSelf);
  return this;
}

//test
var e = new event();
e.on('show', showIt);
e.trigger('show', [1, 2, 3]);
//这是啥玩意测试。。你们还是自己来吧
```