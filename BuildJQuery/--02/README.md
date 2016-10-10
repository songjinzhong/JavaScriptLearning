### 02

在这个例子中加入了三个函数，分别是 hasClass、addClass、removeClass

```javascript
hasClass : function(cn){
  var regex = new RegExp('(\\s|^)' + cn + '(\\s|$)');
  for(var i = 0; i < this.length; i++){
    if(this[i].className.match(regex))
      return true;
  }
  return false;
},
addClass : function(cn){
  var regex = new RegExp('(\\s|^)' + cn + '(\\s|$)');
  for(var i = 0; i < this.length; i++){
    if(!this[i].className.match(regex)){
      this[i].className += ' ' + cn;
    }
  }
  return this;
},
removeClass : function(cn){
  var regex = new RegExp('(\\s|^)' + cn + '(\\s|$)');
  for(var i = 0; i < this.length; i++){
    if(this[i].className.match(regex)){
      this[i].className = this[i].className.replace(regex," ").trim();
    }
  }
  return this;
}
```

主要还是借助正则表达式，用到的原生 dom 属性有 'className'，比较复杂一点的是在 removeClass 函数，用replace把字符串替换成空格之后防止className出现在两头还要对字符串进行trim()过滤。