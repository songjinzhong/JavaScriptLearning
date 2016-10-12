本次task 增加了两个函数 attr 和 data 函数，

```javascript
attr : function(attr, val){
  for(var i = 0; i < this.length; i++){
    if(arguments.length == 1){
      if(typeof attr === 'string'){
        return this[i].getAttribute(attr);
      }else if(typeof attr === 'object'){
        var self = this;
        jquery.each(attr, function(attr, val){
          self[i].setAttribute(attr, val);
        });
      }
    }else{
      this[i].setAttribute(attr, val);
    }
  }
  return this;
},
data : function(attr, val){
  for(var i = 0; i < this.length; i++){
    if(arguments.length == 1){
      if(typeof attr === 'string'){
        return this[i].getAttribute('data-' + attr)
      }else if(typeof attr === 'object'){
        var self = this;
        jquery.each(attr, function(attr, val){
          self[i].setAttribute('data-' + attr, val);
        });
      }
    }else{
      this[i].setAttribute('data-'+attr, val);
    }
  }
  return this;
}
```

这两个函数极其类似，还是用了先前 `jqeury.each` 函数，在这里需要注意的是 `var self = this`，应该懂了吧！