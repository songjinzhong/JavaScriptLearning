task 08 新增方法 html, text, append, prepend, after, before, remove。

html 和 text 方法类似，当 value 未定义时，返回 jquery 对象第一个 dom 的 html 或 text，不然，就是把 jquery 对象的所有 dom 的 html 或 text 都设置成 value。

```javascript
html : function(value){
  if(value === undefined && this[0].nodeType == 1){
    return this[0].innerHTML;
  }else{
    for(var i = 0; i < this.length; i++){
      this[i].innerHTML = value;
    }
  }
  return this;
},
text : function(value){
  if(value === undefined && this[0].nodeType == 1){
    return this[0].innerText;
  }else{
    for(var i = 0; i < this.length; i++){
      this[i].innerText = value;
    }
  }
},
```

下面是五种 dom 操作的实现方法，在介绍这五种方法之前，准备先介绍两个函数，

```javascript
// 传统实现 html方法
function str2html(text){
  var div = document.createElement('div');
  div.innerHTML = text;
  return div.childNodes[0];
}
// 使用 insertAdjacentHTML 方法
function appendDom(ele, pos, text){
  ele.insertAdjacentHTML(pos, text);
}
```

为了实现 dom 操作，需要将 value 值转换成 dom 对象，`str2html()`是一个不错的方法，先 create 一个 div，然后返回 div 的子节点。另外一个方法，需要借助 `insertAdjacentHTML`函数，可以在 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML) 得到详细介绍，其中 pos 值:

* beforebegin =>在 element 元素的前面。
* afterbegin =>在 element 元素的第一个子节点前面。
* beforeend =>在 element 元素的最后一个子节点后面。
* afterend =>在 element 元素的后面。

下面是传统方式和 insertAdjacentHTML 方式实现，显然传统方式要复杂一点。

**传统**

```javascript
append : function(value){
  for(var i = 0; i < this.length; i++){
    if(this[i].nodeType === 1 || this[i].nodeType === 11 ||this[i].nodeType === 9){
      this[i].appendChild(str2html(value));
    }
  }
  return this;
},
prepend : function(value){
  for(var i = 0; i < this.length; i++){
    if(this[i].nodeType === 1 || this[i].nodeType === 11 ||this[i].nodeType === 9){
      this[i].insertBefore(str2html(value), this[i].firstChild);
    }
  }
  return this;
},
after : function(value){
  for(var i = 0; i < this.length; i++){
    if(this[i].nodeType === 1 || this[i].nodeType === 11 ||this[i].nodeType === 9){
      this[i].parentNode.insertBefore(str2html(value), this[i].nextSibling);
    }
  }
  return this;
},
before : function(value){
  for(var i = 0; i < this.length; i++){
    if(this[i].nodeType === 1 || this[i].nodeType === 11 ||this[i].nodeType === 9){
      this[i].parentNode.insertBefore(str2html(value), this[i]);
    }
  }
  return this;
},
remove : function(){
  for(var i = 0; i < this.length; i++){
    if(this[i].nodeType === 1 || this[i].nodeType === 11 ||this[i].nodeType === 9){
      this[i].parentNode.removeChild(this[i]);
    }
  }
  return this;
},
```

** NEW **

```javascript
_append : function(value){
  for(var i = 0; i < this.length; i++){
    appendDom(this[i], 'beforeend', value);
  }
  return this;
},
_prepend : function(value){
  for(var i = 0; i < this.length; i++){
    appendDom(this[i], 'afterbegin', value);
  }
  return this;
},
_before : function(value){
  for(var i = 0; i < this.length; i++){
    appendDom(this[i], 'beforebegin', value);
  }
  return this;
},
_after : function(value){
  for(var i = 0; i < this.length; i++){
    appendDom(this[i], 'afterend', value);
  }
  return this;
}
```

仔细发现，会看到少了 `remove` 函数，因为 insertAdjacentHTML 方法对于 remove 的处理和传统方法一样(因为找不到更好的方法)。