task 11 增加了width height extend 的简易版本，相比于 JQuery还是有一段差距的。

width 和 height 函数很类似，看了下 JQuery 源码，发现还有好多参数，返回带 padding 和 border 的情况，不过我都没有实现 O_o

```javascript
width : function(value){
  if(value === undefined){
    if(this[0].document === document){
      return this[0].innerWidth;
    }else if(this[0].nodeType === 9){
      return document.documentElement.ClientWidth;
    }else{
      return getComputedStyle(this[0],null)['width'].replace('px','');
    }
  }else{
    for(var i = 0; i < this.length; i++){
      this[i].style.width = value + 'px';
    }
  }
},
height : function(value){
  if(value === undefined){
    if(this[0].document === document){
      return this[0].innerHeight;
    }else if(this[0].nodeType === 9){
      return document.documentElement.clientHeight;
    }else{
      return getComputedStyle(this[0],null)['height'].replace('px','');
    }
  }else{
    for(var i = 0; i < this.length; i++){
      this[i].style.height = value + 'px';
    }
  }
}
```

Extend 算是 JQuery 提供给外面的接口扩展吧，直接几行代码：

```javascript
jquery.prototype.extend = jquery.extend = function(){
  for(var i in arguments[0]){
    this[i] = arguments[0][i];
  }
}
```

使用的时候，可以这样：

```javascript
//jquery 上直接绑定函数
$.extend({
  sayHello : function(){
    console.log('hello');
  }
});
$.sayHello();
//jquery 实例上绑定函数
$.prototype.extend({
  write : function(){
    console.log('I can write!')
  }
});
$('#one').write();
```