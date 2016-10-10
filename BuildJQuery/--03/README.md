```javascript
css : function(attr,val){
  for(var i = 0; i < this.length; i++){
    if(val == undefined){
      if(typeof attr === 'object'){
        for(var key in attr){
          this.css(key, attr[key]);
        }
      }else if(typeof attr === 'string'){
        return getComputedStyle(this[i])[attr];
      }
    }else{
      this[i].style[attr] = val;
    }
  }
},
next : function(){
  return sibling(this[0], 'nextSibling');
},
prev : function(){
  return sibling(this[0], 'previousSibling');
},
parent : function(){
  var parent = this[0].parentNode;
  parent = parent && parent.nodeType !== 11 ? parent : null;
  var jq = jquery();
  jq[0] = parent;
  jq.selector = parent.tagName.toLocaleLowerCase();
  jq.length = 1;
  return jq;
}
```

今天实现的四个功能，分别是 css，next，prev，parent，另外，参考 JQuery 又添加了一个函数，'sibling'，用来返回next和prev。

其中next 和prev 没有返回一个this，链式会被终止，parent仍然是链式的。

```javascript
function sibling(cur, dir){
  while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
  return cur;
}
```