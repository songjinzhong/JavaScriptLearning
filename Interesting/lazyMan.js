var _ = function(name){
  var self = this;
  self.name = name;
  self.tasks = [];
  var fn = (function(self){
    return function(){
      console.log('Hi this is ' + self.name);
      self.next();
    }
  })(self);
  self.tasks.push(fn);
  setTimeout(function(){
    self.next();
  }, 0)
}
_.prototype.next = function(){
  var fn = this.tasks.shift();
  fn && fn();
}

_.prototype.eat = function(time){
  var self = this;
  var fn = (function(time){
    return function(){
      console.log('eat at ' + time);
      self.next()
    }
  })(time);
  self.tasks.push(fn);
  return self;
}

var LazyMan = function(name){
  return new _(name)
}