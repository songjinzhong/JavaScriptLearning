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
/*
var x = 5;
console.log(x>1 && x<10)
console.log(x>6 && x<10)
console.log(false && true)
console.log(false && 2)
console.log(true && 2)
console.log(true && '@')
console.log(true && x<10)
*/

/*
 *  箭头函数
 *  什么时候不该使用es6箭头函数
 */
var obj = {  
    array: [1, 2, 3],
    sum: () => {
        console.log(this === window); // => true
        return this.array.reduce((result, item) => result + item);
    }
};
obj.sum();
//同理，在原型的方法上（本质是一样的）
function Person (pName) {
    this.pName = pName;
}

Person.prototype.sayName = () => {
    console.log(this === window); // => true
    return this.pName;
}

var person = new Person('wdg');

person.sayName(); // => undefined
// 这个函数的作用就是当只有一个参数a时，返回接受一个参数b返回a*b的函数，接收两个参数时直接返回乘积，这个函数可以很好的工作并且看起很简洁，但是从第一眼看去并不是很好理解。
let multiply = (a, b) => b === undefined ? b => a * b : a * b;

let double = multiply(2);

double(3); // => 6

multiply(2, 3); // =>6

//动态上下文
var button = document.getElementById('myButton');  
button.addEventListener('click', () => {  
    console.log(this === window); // => true
    this.innerHTML = 'Clicked button';
});

//构造函数
var Person = (name) => {
    this.name = name;
}

// Uncaught TypeError: Person is not a constructor
var person = new Person('wdg');