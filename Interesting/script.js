/*
2016-9-12
*/
var obj = {
  foo : ()=>{log(this);}
}
obj.foo();
obj.foo.bind(obj)()