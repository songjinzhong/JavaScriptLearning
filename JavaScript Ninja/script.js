/* 3.1
function useless(f){return f()};
var text='hello world'
assert(useless(function(){return text;}),"done"+text);
*/
//3.2
/*
function isNimble(){return true;}
assert(typeof window.isNimble==='function',"isNimble() defined")
assert(isNimble.name==="isNimble",'have name')
var canFly = function(){ return true; };                       //#3

assert(typeof window.canFly === "function",                    //#4
     "canFly() defined");
assert(canFly.name === "",
     canFly.name);


window.isDeadly = function(){ return true; };                  //#5

assert(typeof window.isDeadly === "function",                  //#6
     "isDeadly() defined");

function outer(){                                              //#7
assert(typeof inner === "function",
       "inner() in scope before declaration");
function inner(){}
assert(typeof inner === "function",
      "inner() in scope after declaration");
assert(window.inner === undefined,
       "inner() not in global scope");
}

outer();                                                       //#8
assert(window.inner === undefined,
     "inner() still not in global scope");

window.wieldsSword = function swingsSword() { return true; };  //#9

assert(window.wieldsSword.name === 'swingsSword',
     "wieldSword's real name is swingsSword");
*/
/*
assert(true,"|----- BEFORE OUTER -----|");          //#1
assert(typeof outer==='function',
    "outer() is in scope");
assert(typeof inner==='function',
    "inner() is in scope");
assert(typeof a==='number',
    "a is in scope");
assert(typeof b==='number',
    "b is in scope");
assert(typeof c==='number',
    "c is in scope");

function outer(){

assert(true,"|----- INSIDE OUTER, BEFORE a -----|");  //#2
assert(typeof outer==='function',
    "outer() is in scope");
assert(typeof inner==='function',
    "inner() is in scope");
assert(typeof a==='number',
    "a is in scope");
assert(typeof b==='number',
    "b is in scope");
assert(typeof c==='number',
    "c is in scope");

var a = 1;

assert(true,"|----- INSIDE OUTER, AFTER a -----|");  //#3
assert(typeof outer==='function',
      "outer() is in scope");
assert(typeof inner==='function',
      "inner() is in scope");
assert(typeof a==='number',
      "a is in scope");
assert(typeof b==='number',
      "b is in scope");
assert(typeof c==='number',
      "c is in scope");

function inner(){ }

var b = 2;

assert(true,"|----- INSIDE OUTER, AFTER inner() AND b -----|"); //#4
assert(typeof outer==='function',
      "outer() is in scope");
assert(typeof inner==='function',
      "inner() is in scope");
assert(typeof a==='number',
      "a is in scope");
assert(typeof b==='number',
      "b is in scope");
assert(typeof c==='number',
      "c is in scope");

if (a == 1) {
  var c = 3;
  assert(true,"|----- INSIDE OUTER, INSIDE if -----|"); //#5
  assert(typeof outer==='function',
        "outer() is in scope");
  assert(typeof inner==='function',
        "inner() is in scope");
  assert(typeof a==='number',
        "a is in scope");
  assert(typeof b==='number',
        "b is in scope");
  assert(typeof c==='number',
        "c is in scope");
}

assert(true,"|----- INSIDE OUTER, AFTER c -----|"); //#6
assert(typeof outer==='function',
      "outer() is in scope");
assert(typeof inner==='function',
      "inner() is in scope");
assert(typeof a==='number',
      "a is in scope");
assert(typeof b==='number',
      "b is in scope");
assert(typeof c==='number',
      "c is in scope");

}

outer();

assert(true,"|----- AFTER OUTER -----|"); //#7
assert(typeof outer==='function',
     "outer() is in scope");
assert(typeof inner==='function',
     "inner() is in scope");
assert(typeof a==='number',
     "a is in scope");
assert(typeof b==='number',
     "b is in scope");
assert(typeof c==='number',
     "c is in scope");
*/

//3.3
/*
function creep(){ return this; }                     //#1
      assert(creep() === window,                           //#1
             "Creeping in the window");                    //#1

      var sneak = creep;                                   //#3
      assert(sneak() === window,                           //#4
             "Sneaking in the window");                    //#4

      var ninja1 = {                                       //#5
        skulk: creep                                       //#5
      };
      assert(ninja1.skulk() === ninja1,                    //#6
             "The 1st ninja is skulking");                 //#6

      var ninja2 = {                                       //#7
        skulk: creep                                       //#7
      };
      assert(ninja2.skulk() === ninja2,                    //#8
             "The 2nd ninja is skulking"); 
             */
//3,4 
/*
function Ninja() {                                 //#1
  this.skulk = function() { return this; };        //#1
}                                                  //#1

var ninja1 = new Ninja();                          //#2
var ninja2 = new Ninja();                          //#2

assert(ninja1.skulk() === ninja1,                  //#3
       "The 1st ninja is skulking");               //#3
assert(ninja2.skulk() === ninja2,                  //#3
       "The 2nd ninja is skulking");               //#3
*/
//test
/*
var test={
  hello : function(){
    this.world="world";
    function aa(){
      this.w=this;
    }
    var a=new aa();
    assert(a.w===a,'a')
  }
}

test.hello();
assert(test.world==='world','world')
*/
//3.5
/*
function juggle(){
  var result = 0;
  for(var n = 0; n < arguments.length; n++){
    result +=arguments[n];
  }
  this.result = result;
}
var ninja1 = {};
var ninja2 = {};
juggle.apply(ninja1,[1,2,3,4]);
juggle.call(ninja2,5,6,7,8);
assert(ninja1.result === 10,'10');
assert(ninja2.result === 26,'26');
function forEach(list,callback) {                   //#1
  for (var n = 0; n < list.length; n++) {
    callback.call(list[n],n);                       //#2
  }
}

var weapons = ['shuriken','katana','nunchucks']     //#3

forEach(                                             //#4
    weapons,
  function(index){
    assert(this == weapons[index],
           "Got the expected value of " + weapons[index]);
  }
);
*/


//4.1
/*
window.onload =                                 //#1
  function(){ assert(true, 'power!'); };        //#1

var ninja = {
  shout: function(){                            //#2
    assert(true,"Ninja");                       //#2
  }                                             //#2
};

ninja.shout();

setTimeout(
  function(){ assert(true,'Forever!'); },        //#3
  1000);
*/
//huiwen
/*
function ishuiwen(text){
  if(text.length <= 1)return true;
  if(text.charAt(0) != text.charAt(text.length - 1))
    return false
  return ishuiwen(text.substr(1,text.length - 2))
}
assert("4" == 4,'1');
assert("4" === 4,'2');
assert(ishuiwen('aba'),'3')
*/

//4.3
/*
var ninja={
  chirp: function(n){
    return n > 1 ? ninja.chirp(n-1) + '-chirp' : 'chirp';
  }
}
assert(ninja.chirp(3) === 'chirp-chirp-chirp','chirp')
*/
//4.4
/*
var ninja = {
  chirp: function(n) {
    return n > 1 ? this.chirp(n - 1) + "-chirp" : "chirp";
  }
};

var samurai = { chirp: ninja.chirp };                     //#1

ninja = {};                                               //#2

try {
  assert(samurai.chirp(3) == "chirp-chirp-chirp",         //#3
        "Is this going to work?");
}
catch(e){
  assert(false,
         "Uh, this isn't good! Where'd ninja.chirp go?");
}
*/
//4.5
/*
var ninja = {
  chirp: function signal(n) {                              //#1
    return n > 1 ? signal(n - 1) + "-chirp" : "chirp";
  }
};

assert(ninja.chirp(3) == "chirp-chirp-chirp",             //#2
       "Works as we would expect it to!");

var samurai = { chirp: ninja.chirp };                     //#3

ninja = {};                                               //#4

assert(samurai.chirp(3) == "chirp-chirp-chirp",           //#5
       "The method correctly calls itself.");
*/
//4.6
/*
function myNinja(){                                  //#1
  assert(ninja == myNinja,                                       //#2
         "This function is named two things at once!");          //#2
};
var ninja = myNinja;
ninja();                                                         //#3

assert(typeof myNinja == "function",                            //#4
       "But myNinja isn't defined outside of the function.");    //#4
assert(true,ninja.name)
var a={
  b : function close(){return 0}
}
assert(true,a.b.name)
*/
//4.7
/*
var ninja = {
  chirp: function(n) {                              //#1
    return n > 1 ? arguments.callee(n - 1) + "-chirp" : "chirp";
  }
};

assert(ninja.chirp(3) == "chirp-chirp-chirp",      //#2
       "arguments.callee is the function itself.");
*/
//4.8
/*
var store = {
  nextId: 1,                                        //#1
  cache: {},                                        //#2
  add: function(fn) {                               //#3
    if (!fn.id) {                                   //#3
      fn.id = store.nextId++;                       //#3
      return !!(store.cache[fn.id] = fn);           //#3
    }                                               //#3
  }
};

function ninja(){}

assert(store.add(ninja),                            //#4
       "Function was safely added.");               //#4
assert(!store.add(ninja),                           //#4
       "But it was only added once.");              //#4
*/
//4.9
/*
function isPrime(n){
  if(!isPrime.cache)
    isPrime.cache = {};
  if(isPrime.cache[n] != null)
    return isPrime.cache[n]
  var prime = n != 1;
  for(var i = 2; i < n; i++){
    if(n % i == 0){
      prime == false;
      break;
    }
  }
  return isPrime.cache[n] = prime;
}
assert(isPrime(5),'5');
assert(isPrime.cache[5],'true')
*/
//4.11
/*
var d=[]
function maxest(arr){
  return Math.max.apply(Math,arr)
}
assert(maxest([1,2,3,4,3,2,1]),'4')
*/
//4.12
/*
function merge(root){                                   //#1
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      root[key] = arguments[i][key];
    }
  }
  return root;
}

var merged = merge(                                     //#2
  {name: "Batou"},                                      //#2
  {city: "Niihama"});                                   //#2

assert(merged.name == "Batou",                          //#3
       "The original name is intact.");                 //#3
assert(merged.city == "Niihama",                        //#3
       "And the city has been copied over.");           //#3
*/
//4.13
/*
function multiMax(multi){
  return multi * Math.max.apply(Math, Array.prototype.slice.call(arguments,1));
}

assert(multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)");
*/
//4.15
/*
function addMethod(o, name, fn){
  var old = o[name]
  o[name] = function(){
    if(fn.length == arguments.length)
      return fn.apply(this, arguments);
    else if(typeof old == 'function')
      return old.apply(this, arguments);
  }
}
var ninja={};
addMethod(ninja,'whatever',function(){return '1'});
addMethod(ninja,'whatever',function(a){return '1'+a});
addMethod(ninja,'whatever',function(a,b){return '1'+a+b});
assert(true,ninja['whatever']())
assert(true,ninja['whatever']("a"))
assert(true,ninja['whatever']("a","b"))
*/
//4.16
/*
function addMethod(o, name, fn){
  var old = o[name]
  o[name] = function(){
    if(fn.length == arguments.length)
      return fn.apply(this, arguments);
    else if(typeof old == 'function')
      return old.apply(this, arguments);
  }
}
var ninjas = {                                                    //#1
 values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
};

addMethod(ninjas, "find", function(){                             //#2
  return this.values;
});

addMethod(ninjas, "find", function(name){                         //#3
  var ret = [];
  for (var i = 0; i < this.values.length; i++)
    if (this.values[i].indexOf(name) == 0)
      ret.push(this.values[i]);
  return ret;
});

addMethod(ninjas, "find", function(first, last){                 //#4
  var ret = [];
  for (var i = 0; i < this.values.length; i++)
    if (this.values[i] == (first + " " + last))
      ret.push(this.values[i]);
  return ret;
});

assert(ninjas.find().length == 3,                                //#5
       "Found all ninjas");
assert(ninjas.find("Sam").length == 1,
       "Found ninja by first name");
assert(ninjas.find("Dean", "Edwards").length == 1,
       "Found ninja by first and last name");
assert(ninjas.find("Alex", "Russell", "Jr") == null,
       "Found nothing");
*/

//5.1
/*
var outerValue = 'ninja';                                       //#1

function outerFunction() {
  assert(outerValue == "ninja","I can see the ninja.");         //#2
}

outerFunction();  
*/
//5.2
/*
var outerValue = 'ninja';

var later;                                                   //#1

function outerFunction() {
  var innerValue = 'samurai';                                //#2

  function innerFunction() {                                 //#3
    assert(outerValue,"I can see the ninja.");               //#3
    assert(innerValue,"I can see the samurai.");             //#3
  }                                                          //#3

  later = innerFunction;                                     //#4
}

outerFunction();                                             //#5

later();                                                        //#3
*/
//5.3
/*
var outerValue = 'ninja';
var later;

function outerFunction() {
  var innerValue = 'samurai';

  function innerFunction(paramValue) {                       //#1
    assert(outerValue,"Inner can see the ninja.");
    assert(innerValue,"Inner can see the samurai.");
    assert(paramValue,"Inner can see the wakizashi.");       //#2
    assert(tooLate,"Inner can see the ronin,");              //#2
  }

  later = innerFunction;
}

assert(!tooLate,"Outer can't see the ronin");                //#3

var tooLate = 'ronin';                                       //#4

outerFunction();
later('wakizashi');                                          //#5
*/
//5.4
/*
function Ninja() {                                            //#1

  var feints = 0;                                             //#2

  this.getFeints = function(){                                //#3
    return feints;                                            //#3
  };                                                          //#3

  this.feint = function(){                                    //#4
    feints++;                                                 //#4
  };                                                          //#4
}
var ninja = new Ninja();                                      //#5                                                //#6

ninja.feint()

assert(ninja.feints === 'unadefined',                            //#7
    "And the private data is inaccessible to us." );          //#7

assert(ninja.getFeints() == 1,                                //#8
       "We're able to access the internal feint count." );    //#8
*/
//5.9
/*
Function.prototype.bind = function(){                                     //#1
  var fn = this, args = Array.prototype.slice.call(arguments),
    object = args.shift();

  return function(){
    return fn.apply(object,
      args.concat(Array.prototype.slice.call(arguments)));
  };
};

var myObject = {};
function myFunction(){
  return this == myObject;
}

assert( !myFunction(), "Context is not set yet" );

var aFunction = myFunction.bind(myObject)
assert( aFunction(), "Context is set properly" );
assert(myFunction.call(myObject),'aa')
*/
//5.12
/*
Function.prototype.partial = function() {
  var fn = this, args = Array.prototype.slice.call(arguments);
  return function() {
    var arg = 0;
    for (var i = 0; i < args.length + arguments.length && arg < arguments.length; i++) {
      if (args[i] === undefined) {
        args[i] = arguments[arg++];
      }
    }
    return fn.apply(this, args);
  };
};

Math.maxAbove500 = Math.max.partial(500);

assert(Math.maxAbove500(3,4,1,6) == 500, "Max of 500, 3, 4, 1, 6 is 500"); //#4
assert(Math.maxAbove500(3,4,11223,1,6) == 11223, "Max of 500, 3, 4, 11223, 1, 6 is 11223");      //#4
var delay = setTimeout.partial(undefined,3000);
delay(function(){assert(true,'10秒后执行')})
*/
//5.13
/*
Function.prototype.memoized = function(key){
  this._values = this._values || {};                            //#1
  return this._values[key] !== undefined ?                      //#2
    this._values[key] :
    this._values[key] = this(key);
};

function isPrime(num) {                                         //#3
  var prime = num != 1;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

assert(isPrime.memoized(5), "The function works; 5 is prime."); //#4
assert(isPrime._values[6], "The answer has been cached.");      //#4
*/
//5.14
/*
Function.prototype.memoized = function(key){
  this._values = this._values || {};
  return this._values[key] !== undefined ?
    this._values[key] :
    this._values[key] = this.apply(this, arguments);
};

Function.prototype.memoize = function(){
  var fn = this;                                  //#1
  return function(){                              //#2
    return fn.memoized.apply(fn, arguments);
  };
};

var isPrime = (function(num) {
  var prime = num != 1;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}).memoize();
Function.prototype.formem = function(key){
  var fn = this;
  return function(){
    fn._values = fn._values || {};
    return fn._values[key] !== undefined ?
      fn._values[key] :
      fn._values[key] = fn.apply(fn, arguments);
  }
};
var isPrime2 = (function(num) {
  var prime = num != 1;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}).formem();

assert(isPrime(17),"17 is prime");                //#3
assert(isPrime2(11),'10')
*/
//test
/*
(function(){
  var numClicks = 0;
  document.addEventListener('click',function(){
    alert(++numClicks);
  },false)
})();
*/
//test2
/*
document.addEventListener('click',(function(){
  var numClicks = 0;
  return function(){
    alert(++numClicks);
  }
})(),false);
*/

//6
//6.1
/*
function Ninja(){
}                                    //#1

Ninja.prototype.swingSword = function(){              //#2
  return true;
};

var ninja1 = Ninja;                                 //#3
assert(ninja1 === undefined,
       "No instance of Ninja created.");
assert(ninja1.prototype.swingSword(),'test');

var ninja2 = new Ninja();                             //#4
assert(ninja2 &&
       ninja2.swingSword &&
       ninja2.swingSword(),
       "Instance exists and method is callable." );
*/
//6.2
/*
function Ninja(){
  this.swung = false;                                  //#1
  this.swingSword = function(){                        //#2
    return !this.swung;
  };
}

Ninja.prototype.swingSword = function(){               //#3
  return this.swung;
};

var ninja = new Ninja();                               //#4
assert(ninja.swingSword(),
       "Called the instance method, not the prototype method.");
*/
//6.3
/*
function Ninja(){                                         //#1
  this.swung = true;
}

var ninja = new Ninja();                                  //#2

Ninja.prototype.swingSword = function(){                  //#3
  return this.swung;
};

assert(ninja.swingSword(),                                //#4
       "Method exists, even out of order.");
assert(true,ninja.constructor)
assert(true,ninja.constructor)
*/
//6.4
/*
function Ninja(){
  this.swung = true;
  this.swingSword = function(){                           //#1
    return !this.swung;
  };
}

var ninja = new Ninja();

Ninja.prototype.swingSword = function(){                  //#2
  return this.swung;
};

assert(ninja.swingSword(),                                //#3
       "Called the instance method, not the prototype method.");
*/
//6.5
/*
function Ninja(){}

var ninja = new Ninja();

assert(typeof ninja == "object",                               //#1
      "The type of the instance is object.");
assert(ninja instanceof Ninja,                                 //#2
       "instance of identifies the constructor." );
assert(ninja.constructor == Ninja,                             //#3
       "The ninja object was created by the Ninja function.");
*/
//6.6
/*
function Ninja(){}
var ninja = new Ninja();
var ninja2 = new ninja.constructor();                 //#1

assert(ninja2 instanceof Ninja, "It's a Ninja!");     //#2

assert(ninja !== ninja2, "But not the same Ninja!");  //#3
*/
//6.7
/*
function Person(){}                                     //#1
Person.prototype.dance = function(){};                  //#1

function Ninja(){}                                      //#2

Ninja.prototype = { dance: Person.prototype.dance };    //#3

var ninja = new Ninja();
assert(ninja instanceof Ninja,
       "ninja receives functionality from the Ninja prototype" );
assert(ninja instanceof Person, "... and the Person prototype" );
assert(ninja instanceof Object, "... and the Object prototype" );
*/
//6.8
/*
console.log('h')
function Person(){}
Person.prototype.dance = function(){};

function Ninja(){}

Ninja.prototype = new Person();                         //#1

var ninja = new Ninja();
assert(ninja instanceof Ninja,
       "ninja receives functionality from the Ninja prototype");
assert(ninja instanceof Person, "... and the Person prototype");
assert(ninja instanceof Object, "... and the Object prototype");
assert(typeof ninja.dance == "function", "... and can dance!")
*/
/*
var count = 1;
	if (function tempFunc(){console.log('1')}) {
		count += typeof tempFunc;
	}
	console.log(count);
 function a() {}
console.log(1 + typeof a);
*/
//6.11
/*
Object.prototype.keys = function() {                    //#1
	return (function(i){
		var keys = [];
	    for (var p in i) keys.push(p);
	    return keys;
	})(this)
  };

  var obj = { a: 1, b: 2, c: 3 };                         //#2

  assert(obj.keys().length == 3,                          //#3
        "There are three properties in this object.");
*/
//6.12
/*
Object.prototype.keys = function() {
	var keys = [];
	for (var i in this)
	  if (this.hasOwnProperty(i))                       //#1
	    keys.push(i);
	return keys;
};

var obj = { a: 1, b: 2, c: 3 };

assert(obj.keys().length == 3,                        //#2
  "There are three properties in this object.");
*/
//6.13
/*
	  Number.prototype.add = function(num){                             //#1
        return this + num;
      };

      var n = 5;                                                        //#2
      assert(n.add(3) == 8,
            "It works when the number is in a variable.");

      assert((5).add(3) == 8,                                           //#3
             "Also works if a number is wrapped in parentheses.");

      assert(new Number(5).add(3) == 8, "What about a simple literal?");            //#4
*/
//6.14
/*
function MyArray() {}

MyArray.prototype = new Array();

var mine = new MyArray();
mine.push(1, 2, 3);

assert(mine.length == 3,
     "All the items are in our sub-classed array.");
assert(mine instanceof Array,
     "Verify that we implement Array functionality.");
console.log(mine.push)
*/
//6.15
/*
  function MyArray() {}                                         //#1
  MyArray.prototype.length = 0;                                 //#1

  (function() {                                                 //#2
    var methods = ['push', 'pop', 'shift', 'unshift',
      'slice', 'splice', 'join'];

    for (var i = 0; i < methods.length; i++) (function(name) {
      MyArray.prototype[ name ] = function() {
        return Array.prototype[ name ].apply(this, arguments);
      };
    })(methods[i]);
  })();

  var mine = new MyArray();                                     //#3
  mine.push(1, 2, 3);
  assert(mine.length == 3,
         "All the items are on our sub-classed array.");
  assert(!(mine instanceof Array),
         "We aren't subclassing Array, though.");
*/
//6.16
/*
function User(first, last){                         //#1
this.name = first + " " + last;
}

var user = new User("Ichigo", "Kurosaki");             //#2

assert(user, "User instantiated");                 //#3
assert(user.name == "Ichigo Kurosaki",             //#4
     "User name correctly assigned");
*/
//6.18
/*
function Test() {
return this instanceof arguments.callee;
}

assert(!Test(), "We didn't instantiate, so it returns false.");
assert(new Test(), "We did instantiate, returning true.");
*/
//6.19
/*
  function User(first, last) {
    if (!(this instanceof arguments.callee)) {             //#1
      return new User(first,last);                         //#1
    }                                                      //#1
    this.name = first + " " + last;
  }

  var name = "Rukia";

  var user = User("Ichigo", "Kurosaki");                    //#2

  assert(name == "Rukia","Name was set to Rukia.");         //#3
  assert(user instanceof User, "User instantiated");        //#3
  assert(user.name == "Ichigo Kurosaki",                    //#3
         "User name correctly assigned");                   //#3
*/
//6.20
/*
var Person = Object.subClass({                           //#1
    init: function(isDancing) {
      this.dancing = isDancing;
    },
    dance: function() {
      return this.dancing;
    }
  });

  var Ninja = Person.subClass({                            //#2
    init: function() {
      this._super(false);                                  //#3
    },
    dance: function() {
      // Ninja-specific stuff here
      return this._super();
    },
    swingSword: function() {
      return true;
    }
  });

  var person = new Person(true);                            //#4
  assert(person.dance(),                                    //#4
         "The person is dancing.");                         //#4

  var ninja = new Ninja();                                  //#5
  assert(ninja.swingSword(),                                //#5
         "The sword is swinging.");                         //#5
  assert(!ninja.dance(),                                    //#5
         "The ninja is not dancing.");                      //#5

  assert(person instanceof Person,                          //#6
         "Person is a Person.");                            //#6
  assert(ninja instanceof Ninja &&                          //#6
         ninja instanceof Person,                           //#6
         "Ninja is a Ninja and a Person.");                 //#6
(function(){
	var initializing = false;
	Object.subClass = function(properties){
		var _super = this.prototype;
		initializing = true;
		var proto = new this();
		initializing = false;

	}
})()
*/

//正则表达式
//7.2
/*
var re1 = /test/i;                           //#1

var re2 = new RegExp("test", "i");           //#2

assert(re2.toString() == "/test/i",
     "Verify the contents of the expression.");
assert(re1.test("TesT"), "Yes, it's case-insensitive.");
assert(re2.test("TesT"), "This one is too.");
assert(re1.toString() == re2.toString(),
    "The regular expressions expressions are equal.");
assert( re1 != re2, "But they are different objects.");
*/
//7.5
/*
var html = "<div class='test'><b>Hello</b> <i>world!</i></div>";

var results = html.match(/<(\/?)(\w+)([^>]*?)>/);          //#1

assert(results[0] == "<div class='test'>", "The entire match.");
assert(results[1] == "", "The (missing) slash.");
assert(results[2] == "div", "The tag name.");
assert(results[3] == " class='test'", "The attributes.");

var all = html.match(/<(\/?)(\w+)([^>]*?)>/g);              //#2

assert(all[0] == "<div class='test'>", "Opening div tag.");
assert(all[1] == "<b>", "Opening b tag.");
assert(all[2] == "</b>", "Closing b tag.");
assert(all[3] == "<i>", "Opening i tag.");
assert(all[4] == "</i>", "Closing i tag.");
assert(all[5] == "</div>", "Closing div tag.");
*/
//7.6
/*
var html = "<div class='test'><b>Hello</b> <i>world!</i></div>";
var pattern = /<(\/?)(\w+)([^>]*?)>/g, match;
var num = 0;

while ((match = pattern.exec(html)) !== null) {                  //#1
assert(match.length == 4,
      "Every match finds each tag and 3 captures.");
num++;
}

assert(num == 6, "3 opening and 3 closing tags found.");
*/
//7.8
/*
var pattern = /((?:ninja-)+)sword/;                     //1

var ninjas = "ninja-ninja-sword".match(pattern);

assert(ninjas.length == 2,"Only one capture was returned.");
assert(ninjas[1] == "ninja-ninja-",
     "Matched both words, without any extra capture.");
*/
//7.10
/*
  function compress(source) {
    var keys = {};                                     //#1

    source.replace(
      /([^=&]+)=([^&]*)/g,
      function(full, key, value) {                     //#2
        keys[key] =
          (keys[key] ? keys[key] + "," : "") + value;
        return "";
      }
    );

    var result = [];                                   //#3
    for (var key in keys) {                            //#3
      result.push(key + "=" + keys[key]);              //#3
    }                                                  //#3

    return result.join("&");                           //#4
  }

  assert(compress("foo=1&foo=2&blah=a&blah=b&foo=3") ==
         "foo=1,2,3&blah=a,b",
         "Compression is OK!");
*/
//9.1
/*
assert(eval("5 + 5") === 10,                               //#1
             "5 and 5 is 10");

assert(eval("var ninja = 5;") === undefined,               //#2
       "no value was returned" );
assert(ninja === 5, "The variable ninja was created");     //#3

(function(){
  eval("var ninja = 6;");                                  //#4
  assert(ninja === 6,                                      //#4
        "evaluated within the current scope.");            //#4
})();

assert(window.ninja === 5,                                 //#5
      "the global scope was unaffected");                  //#5
assert(ninja === 5,                                        //#5
      "the global scope was unaffected");                  //#5
*/
//9.2
/*
var ninja = eval("({name:'Ninja'})");             //#1
assert(ninja != undefined,"the ninja was created");
assert(ninja.name === "Ninja",
       "and with the expected property");

var fn = eval("false||function(){return 'Ninja';}");   //#2
assert(typeof fn === 'function',
       "the function was created");
assert(fn() === "Ninja",
       "and returns expected value" );

var ninja2 = eval("{name:'Ninja'}");               //#3
assert(ninja2 != undefined,"ninja2 was created");
assert(ninja2.name === "Ninja",
    "and with the expected property");
*/
//9.4
/*
function test(a){ return a + a; }                    //#1

assert(test.toString() ===                           //#2
       "function test(a){ return a + a; }",          //#2
       "Function decompiled");                       //#2
*/
//9.5

//function argumentNames(fn) {
//  var found = /^[\s\(]*function[^(]*\(\s*([^)]*?)\s*\)/   //#1
//              .exec(fn.toString());                       //#1
//  return found && found[1] ?                              //#2
//           found[1].split(/,\s*/) :                       //#2
//           [];                                            //#2
//}
/*
assert(argumentNames(function(){}).length === 0,          //#3
       "Works on zero-arg functions.");

assert(argumentNames(function(x){})[0] === "x",           //#4
       "Single argument working.");

var results = argumentNames(function(a,b,c,d,e){});       //#5
assert(results[0] == 'a' &&
       results[1] == 'b' &&
       results[2] == 'c' &&
       results[3] == 'd' &&
       results[4] == 'e',
       "Multiple arguments working!");
*/
//9.6
/*
 var json = '{"name":"Ninja"}';               //#1

var object = eval("(" + json + ")");         //#2

assert(object.name === "Ninja",              //#3
       "My name is Ninja!");                 //#3
*/
//9.7
/*
var base2 = {};
base2.namespace =                                          //#1
  "var Base=base2.Base;var Package=base2.Package;" +
  "var Abstract=base2.Abstract;var Module=base2.Module;" +
  "var Enumerable=base2.Enumerable;var Map=base2.Map;" +
  "var Collection=base2.Collection;var RegGrp=base2.RegGrp;" +
  "var Undefined=base2.Undefined;var Null=base2.Null;" +
  "var This=base2.This;var True=base2.True;var False=base2.False;" +
  "var assignID=base2.assignID;var detect=base2.detect;" +
  "var global=base2.global;var lang=base2.lang;" +
  "var JavaScript=base2.JavaScript;var JST=base2.JST;" +
  "var JSON=base2.JSON;var IO=base2.IO;var MiniWeb=base2.MiniWeb;" +
  "var DOM=base2.DOM;var JSB=base2.JSB;var code=base2.code;" +
  "var doc=base2.doc;";

assert(typeof This === "undefined",                          //#2
       "The This object doesn't exist." );

eval(base2.namespace);                                       //#3

assert(typeof This === "function",                           //#4
       "And now the namespace is imported." );
assert(typeof Collection === "function",
       "Verifying the namespace import." );
*/
//10.1
/*
var use = "other";                                               //#1

var katana = {                                                   //#2
  isSharp: true,
  use: function(){
    this.isSharp = !this.isSharp;
  }
};

with (katana) {                                                  //#3

  assert(use !== "other" && typeof use == "function",            //#4
        "use is a function from the katana object.");
  assert(this !== katana,
        "context isn't changed; keeps its original value");

}

assert(use  === "other",                                         //#5
       "outside the with use is unaffected.");
assert(typeof isSharp === "undefined",
       "outside the with the properties don't exist.");
*/
//10.2
var katana = {                                            //#1
  isSharp: true,
  use: function(){
    this.isSharp = !this.isSharp;
  }
};

with (katana) {
  isSharp = false;                                        //#2

  assert(katana.isSharp === false,                        //#3
      "properties can be assigned");

  cut = function(){                                       //#4
    isSharp = false;
  };

  assert(typeof katana.cut == "function",                 //#5
      "new properties can be created on the scoped object");
  assert(typeof window.cut == "function",
      "new properties are created in the global scope");
}