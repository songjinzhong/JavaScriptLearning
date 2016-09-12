/*
2016-09-12
description:
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
*/
/*
function list(names){
  //your code here
  var data = '';
  names.forEach(function(item,index){
  	if(index == names.length -2){
  		data += item.name + ' & ';
  	}else if(index == names.length - 1){
  		data += item.name;
  	}else{
  		data += item.name + ', ';
  	}
  });
  return data;
}
log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
*/
//try again
/*
function list(names){
	//code here
	return names.reduce(function(pre,now,index){
		if(index == 0){
			return pre + now.name;
		}
		else if(index == names.length - 1){
			return pre + ' & ' + now.name;
		}
		else{
			return pre + ', ' + now.name;	
		}
	},'');
}
log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
log(list([]))
*/

/*
description
Sum of Digits / Digital Root
*/
/*
function digital_root(n) {
  // ...
  if(n<10)
  	return n;
  var sum = 0;
  while(n>=10){
  	sum += n % 10;
  	n = parseInt(n / 10);
  }
  sum += n;
  return digital_root(sum);
}
log(digital_root(41235))
*/
//try again
/*
function digital_root(n) {
  return (n -1) % 9 + 1;
}
log(digital_root(9))
*/

/*
description
Pyramid Slide Down
*/
/*
function longestSlideDown (pyramid) {
  if(!longestSlideDown.cache)
  	longestSlideDown.cache=[]
  var index = arguments[1]||0;
  var index2 = arguments[2]||0;
  if(index ==0 && index2 == 0)
  	longestSlideDown.cache=[]
  if(index >= pyramid.length)
  	return 0;
  if(!longestSlideDown.cache[index])
  	longestSlideDown.cache[index]=[]
  if(longestSlideDown.cache[index][index2])
	return longestSlideDown.cache[index][index2]
  var max =pyramid[index][index2];
  if(!longestSlideDown.cache[index+1])
  	longestSlideDown.cache[index+1]=[]
  if(!longestSlideDown.cache[index+1][index2])
  	longestSlideDown.cache[index+1][index2] = longestSlideDown(pyramid,index+1,index2);
  if(!longestSlideDown.cache[index+1][index2+1])
  	longestSlideDown.cache[index+1][index2+1] = longestSlideDown(pyramid,index+1,index2+1);
  return longestSlideDown.cache[index][index2] = max + Math.max(longestSlideDown.cache[index+1][index2],longestSlideDown.cache[index+1][index2+1])
}
log(longestSlideDown([[3],[7, 4],[2, 4, 6],[8, 5, 9, 3]]));
*/

/*
description
sum and length
*/
/*
function sumLength (arr){
  var z = 0;
  var f = 0;
  var b = false;
  arr.forEach(function(item,index){
    if(item>0){
      z +=item;
    }else if(item<0){
      f += 1;
    }else{
      if(b){
        b = false;
      }else{
        f += 1;
        b = true;
      }
    }
  });
  return ''+z+' '+f;
}
*/
