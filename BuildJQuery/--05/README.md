首先，本次task添加了个重要的逻辑，即

```javascript
if(typeof selector === 'object' && selector instanceof Element){
  this[0] = selector;
  this.length = 1;
  return this;
}else if(typeof selector === 'function'){
  jquery.ready(selector);
  return;
}
```

添加了对selector 类型的判断，为后面的 first等一系列函数做准备。

```
jquery.ready = function(fn){
  document.addEventListener('DOMContentLoaded',function() {
      fn && fn();
  },false);
  document.removeEventListener('DOMContentLoaded',fn,true);
}
```

Ready函数这个逻辑是为了实现 JQuery(fn)的，配合前面的selector内容判断，这种方式其实就是document.ready的方式，据说速度要快。

接下来就是几个重要的函数，

```javascript
find : function(selector){
  if(!selector) return ;
  if(selector.charAt(0) == '#' && !selector.match(/\s/)){
    return new jquery(selector);
  }
  var context = this.selector;
  return new jquery(context + ' ' + selector);
},
first : function(){
  return new jquery(this[0]);
},
last : function(){
  return new jquery(this[this.length - 1]);
},
eq : function(num){
  while(num < 0)
    num += this.length;
  if(num >= this.length)
    num = num % this.length;
  return new jquery(this[num]);
},
get : function(num){
  while(num < 0)
    num += this.length;
  if(num >= this.length)
    num = num % this.length;
  return this[num];
}
```

`find` 返回子元素中满足条件的 jquery 对象，`first`和`last` 返回第一个和最后一个子 jquery对象，`eq(n)`可以指定返回的子 jquery 对象，`n=-1`返回最后一个，`get(n)`与`eq(n)`稍微有点不同，返回的是一个 dom 对象。