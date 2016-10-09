### 实现一个 JQuery 的第一步，生成一个框架

```javascript
(function(window,document){
			var jquery = function(selector){
				return new jquery.prototype.init(selector);
			}
			jquery.prototype = {
				constructor : jquery,
				selector : '',
				length : 0,
				init : function(selector){
					//here function
				}
			}
			jquery.prototype.init.prototype = jquery.prototype;
			jquery.ajax = function(){
				console.log('ajax function');
			}
			window.$ = jquery;
})(window,document)
```

首先要做一个大闭包，把私有变量放在里面，这是闭包最喜欢干的，虽然很耗内存。

传入 'window' 和 'document' 两个参数，定义一个私有变量 'jquery'，在最后赋值给 'window.$ = jquery'。

摆脱 new 的困扰，直接传参数，
```javascript
var jquery = function(selector){
	return new jquery.prototype.init(selector);
}
```

定义原型'jquery.prototype.init.prototype = jquery.prototype'，实现的效果其实是因为 new 过程会执行下面三个步骤：

```javascript
var foo = {};
foo.__proto__ = jquery.prototype.init.prototype;
jquery.prototype.init.call(foo,selector);
```

这样子也就促成了链式操作。

好啦，一切都顺理成章，init函数就可以干我们想干的事情。