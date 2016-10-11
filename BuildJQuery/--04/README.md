本次增加了 each 函数，可以处理 $对象、数组和obj，处理方法主要靠回掉函数

```javascript
jquery.each = function(obj, callback){
  var length = obj.length,
    con = obj.constructor,
    i = 0;
  //用来调用自身
  if(con == window.$ ){
    for(; i < length; i++){
      var val = callback.call(obj[i], i, obj[i]);
      if(val = false)
        break;
    }         
  }else if(isArray(obj)){
    for(; i < length; i++){
      var val = callback.call(obj[i], i, obj[i]);
      if(val = false)
        break;
    }           
  }else{
    for(i in obj){
      var val = callback.call(obj[i], i, obj[i]);
      if(val = false)
        break;
    } 
  }
}
```
回掉函数`callback.call(obj[i], i, obj[i])`采用的方法传递两个参数，第一个参数 i 是索引，第二个参数是对象本身