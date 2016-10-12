本 task 实现 `get` `post` 方法

```javascript
function ajax(options){
  var defaultOptions = {
    url: false,
    type: 'GET',
    data: false,
    success: false,
    complete: false
  };
  for(var i in defaultOptions){
    if(!options[i]){
      options[i] = defaultOptions[i];
    }
  }
  var xhr = new XMLHttpRequest();
  var url = options.url;
  xhr.open(options.type, url);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      var result,
        status = xhr.status;
      if((status >= 200 && status <= 300) || status == 304){
        result = xhr.responseText;
        if(window.JSON){
          result = JSON.parse(result);
        }else{
          //另一种处理 json 数据的方法
          result = eval('(' + result + ')');
        }
        ajaxSuccess(result, xhr);
      }
    }
  }
  if(options.type.toLowerCase() === 'post'){
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
  xhr.send(options.data ? options.data : null);
  function ajaxSuccess(data, xhr){
    var status = 'success';
    options.success && options.success(data, options, status, xhr);
    ajaxComplete(status);
  }
  function ajaxComplete(status){
    options.complete && options.complete(status);
  }
}
```

无论是 POST 或 GET ，其实都是一种协议，通过函数就可以发现，如果类型为 `POST`，则多发送了一个请求头，`xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')`，其实 GET 也可以有请求体，只要它的 options.data 不为空。处理了两个回掉函数，一个是处理响应数据，一个是完全处理结束之后调用的函数。其中自动对响应数据进行 JSON 解码。

那么 get 和 post 方式就非常好实现了，甚至还有 ajax ：

```javascript
jquery.get = function(url, sucBack, complete){
  var options = {
    url : url,
    success : sucBack,
    complete : complete
  };
  ajax(options);
}
jquery.post = function(url, data, sucBack, complete){
  var options = {
    url : url,
    type : 'POST',
    data : data,
    success : sucBack,
    complete : complete
  };
  ajax(options);
}
jquery.ajax = function(options){
  ajax(options);
}
```