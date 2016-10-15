在第九章的基础之上，实现了 on 和 off 的事件委托，即三个参数，借鉴了很多人的，感觉还是以一个新的 deleid 和 deleEvents，与之前的事件绑定区别开，好了，开始介绍代码：

```javascript
function addEvent(dom, type, selector){
  dom.addEventListener(type, function(e){
    var target = e.target;
    var ctarget = e.currentTarget;
    var bubble = true;
    var id = dom.deleid;
    if(jquery.deleEvents[id][selector][type]){
      while(bubble && target != ctarget){
        if(filiter(dom, selector, target)){
          for(var i = 0; i < jquery.deleEvents[id][selector][type].length; i++){
            bubble = jquery.deleEvents[id][selector][type][i].call(target, e);
            return bubble;
          }
        }
        target = target.parentNode;
      }
    }
  }, false);
  function filiter(dom, selector, target){
    var nodes = dom.querySelectorAll(selector);
    for(var i = 0; i < nodes.length; i++){
      if(nodes[i] == target){
        return true;
      }
    }
    return false;
  }
}
```

`addEvent` 是事件委托的入口函数，`filiter`函数是对委托对象的判断，确保委托的成功进行。整体逻辑和绑定基本一致，只是用到的 id 和 events 数组不一样。

完整的 on、off 如下：

```javascript
on : function(type, selector, fn){
  // 参考 JQuery 的参数判断
  if(fn === undefined){
    fn = selector;
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
  }else{
    for(var i = 0; i < this.length; i++){
      if(!this[i].deleid){
        var id = jquery.deleid++;
        this[i].deleid = id;
        jquery.deleEvents[id] = {};
        jquery.deleEvents[id][selector] = {};
        jquery.deleEvents[id][selector][type] = [fn];
        addEvent(this[i], type, selector);
      }else{
        var id = this[i].deleid,
          obj = this.deleEvents[id];
        if(!obj[selector]){
          obj[selector] = {};
          obj[selector][type] = [fn];
          addEvent(this[i], type, selector);
        }else{
          if(obj[selector][type]){
            obj[selector][type].push(fn);
          }else{
            obj[selector][type] = [fn];
            addEvent(this[i], type, selector);
          }
        }
      }
    }
  }
},
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
  }else{
    for(var i = 0; i < this.length; i++){
      var id = this[i].deleid;
      delete jquery.deleEvents[id][selector][type];
    }
  }
}
```

实际上在看过 JQuery 的源码之后，发现 JQuery 的实现方式要好一些。对所有的参数先进行判断，然后给参数进行位移，使用独立的 on 函数作为所有事件的入口。当然，JQuery on 事件还支持一次绑定和 data 数据功能，当然老版本还是用 `delegate`, `live`和`bind`方法，在 1.7 之后，统统改成 on 的方式来实现。