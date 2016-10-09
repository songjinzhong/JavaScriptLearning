/*
2016-9-12
*/
/*
var obj = {
  id : 1,
  foo : ()=>{log(this,id);}
}
obj.foo();
obj.foo.bind(obj)()
*/
/*
var obj = {
  id : 1,
  foo : function(){
  	return () => {log(this.id)}
  }
}
obj.foo()();
*/
/*
var obj = {
  id : 1,
  foo : function(){
  	log(this.id);
  }
}
obj.foo();
obj.foo.bind(obj)()
*/


/*
2016-9-13
*/
/*
function foo(){
	return () => {log(this);}
}
foo.call({id : 1})()
*/

/*
2016-9-13 一个经典的面试题
写一个函数，实现的效果是，传2个参数进去，
第一个参数是一个需要被执行的函数，第二个参数是允许执行的次数
*/
/*
function once(fn,num){
  var f = fn;
  return (function(){
    if(num>0){
      fn.apply();
      num-=1;
      return arguments.callee();
    }
  })();
}
var obj = {
  name : 'song',
  foo : function(){
    console.log(this.name);
  }
}
obj.foo();
var newFunc = once(obj.foo ,3);
*/
/*
2016-9-15 
关于 prototype 和 __proto__ 区别
https://segmentfault.com/a/1190000006711220
*/
/*
var Person = function () { };
Person.prototype.Say = function () {
    alert("Person say");
}
Person.prototype.Salary = 50000;
var Programmer = function () { };
Programmer.prototype = new Person();
Programmer.prototype.WriteCode = function () {
    alert("programmer writes code");
};
Programmer.prototype.Salary = 500;
var p = new Programmer();
p.Salary = 300;
p.Say();
p.WriteCode();
alert(p.Salary);
*/

/*
 * 关于动态函数中的 && 深入理解
 * 2016-09-29
 *
 */
var x = 5;
console.log(x>1 && x<10)
console.log(x>6 && x<10)
console.log(false && true)
console.log(false && 2)
console.log(true && 2)
console.log(true && '@')
console.log(true && x<10)