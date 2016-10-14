时间监听和注册，我自己搞得也不是非常懂，还好看了 JQuery 的源码，又参考别人的，借鉴过来，实现了我的 on 函数

```javascript
function add(dom, type, guid){
  dom.addEventListener(type,function(e){
    if(jquery.events[guid][type]){
      for(var i = 0; i < jquery.events[guid][type].length; i++){
        jquery.events[guid][type][i].call(dom, e);
      }
    }
  }, false);
}
```

这是 add 函数，用来添加事件用的，三个参数分别是 dom 对象，事件类型，guid。

```javascript
on : function(type, selector, fn){
  if(typeof selector == 'function'){
    fn = selector;
    selector = undefined;
    for(var i = 0; i < this.length; i++){
      if(!this[i].guid){
        var id = jquery.guid++;
        this[i].guid = id;
        jquery.events[id] = {};
        jquery.events[id][type] = [fn]
        add(this[i], type, id);
      }else{
        var id = this[i].guid;
        if(jquery.events[id][type]){
          jquery.events[id][type].push(fn);
        }else{
          jquery.events[id][type] = [fn];
          add(this[i], type, id);
        }
      }
    }
  }
},
```

on 函数，暂时还没有绑定事件，selector为空，参数只能传递两个，全局设置`jquery.guid = 0`,`jquery.events = []` guid 用来存储事件标识，events 用来存储事件内容，按照事件类型来存储。

```javascript
off : function(type, selector){
  if(arguments.length == 0){
    for(var i = 0; i < this.length; i++){
      var id = this[i].guid;
      jquery.events[id] = [];
    }
  }else if(arguments.length == 1){
    for(var i = 0; i < this.length; i++){
      var id = this[i].guid
      delete jquery.events[id][type];
    }
  }
}
```

off 函数解除事件绑定，发现了一个 bug，如果事件先绑定后接触， add 函数要对事件判断，是否为空，否则报错。