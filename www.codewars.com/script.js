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

/*
2016-09-13
description:
数独游戏
https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript
*/
/*
function doneOrNot(board){
  //your code here
  function render(arr){
    arr.forEach(function(each,index){
      arr[index] = false;
    });
  }
  var arr = new Array(10);
  for(var i = 0;i < 10; i++)
    arr[i] = false;
  //try 1
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      if(arr[board[i][j]]){
        return "Try again!";
      }
      arr[board[i][j]] = true;
    }
    render(arr);
  }
  //try 2
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      if(arr[board[j][i]]){
        return "Try again!";
      }
      arr[board[j][i]] = true;
    }
    render(arr);
  }
  //try 3
  for(var i = 0; i < 9; i +=3){
    for(var j = 0; j < 9; j +=3){
      for(var k = 0; i < 3; i++){
        for(var m = 0; m < 3; m++){
          if(arr[board[i+k][j+m]])
            return "Try again!";
          arr[board[i+k][j+m]] = true;
        }
      }
      render(arr);
    }
  }
  return 'Finished!';
}
log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 0, 0, 4, 8, 1, 1, 7, 9]]));
*/
/*
function removeNb (n) {
  var sum = (1+n)*n/2+1;
  var b;
  var back = [];
  for(var i = 2; i <= n+1; i++){
    b = sum / i;
    if(b%1 == 0 && b>=2 &&b<=n+1){
      back.push([i-1,b-1]);
    }
  }
  return back;
}
log(removeNb(26))
log(removeNb(100))
*/

/*
Weight for weight
https://www.codewars.com/kata/weight-for-weight/train/javascript
*/
/*
function orderWeight(strng) {
    // your code
    if(!strng)
      return ""
    return strng.split(" ")
           .map((item)=>{return [item.split("").reduce((p,n)=>{return parseInt(p) + parseInt(n)}),item,item.length]})
           .sort((a,b)=>{
             if(a[0]==b[0]){
               var aa = a[1].split("");
               var bb = b[1].split("");
               var length = aa.length-bb.length?bb.length:aa.length;
               var i = 0;
               while(i<length){
                 if(aa[i] != bb[i])
                   return aa[i]-bb[i];
                 i++;
               }
               return aa[length]?1:-1;
             }
             return a[0]-b[0]
           })
           .map((item)=>{return item[1]})
           .join(" ")
}
log(orderWeight(""))
log(orderWeight("103 123 4444 99 2000"))
log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))
log(orderWeight("80544 70 237271 120 157406 103 91957 195 343509 50 349976 88 493574 100 257088 56 484113 174 205183 192 54"))
log(orderWeight("462623 20 470670 114 327537 136 368135 200 28811 24 17708 138 156955 63 424042 82 145165 127 458231 47 15"))
*/
/*
Convert string to camel case
https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript
*/
/*
function toCamelCase(str){
  var regex = /[^a-zA-Z](\w)/g;
  var match;
  var list=[];
  while((match=regex.exec(str))!==null){
    list.push(match[1]);
  }
  list = list.map(function(item){
    return item.toUpperCase();
  });
  list.forEach((item)=>{str = str.replace(/[^a-zA-Z](\w)/,item)});
  return str;
}

*/
//good ways
/*
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
log(toCamelCase('a_bb-cc-dd'))
log(toCamelCase('the_stealth_warrior'))
*/
/*
2016-09-19
Palindrome chain length
http://www.codewars.com/kata/palindrome-chain-length/train/javascript
*/
/*
var palindromeChainLength = function(n) {
  var m = parseInt((""+n).split("").reverse().join(""));
  return m == n ? 0 : 1 + palindromeChainLength(m + n)
};
log(palindromeChainLength(87))
*/
/*
2016-09-20
Adding Big Numbers
https://www.codewars.com/kata/adding-big-numbers/train/javascript
*/
/*
function add(a, b) {
  var list_a = a.split("").reverse().join("").split("")
  var list_b = b.split("").reverse().join("").split("")
  var list = list_a.length > list_b.length ? list_a : list_b;
  var length = list_a.length > list_b.length ? list_b.length : list_a.length;
  var i = 0;
  for(; i < length; i++){
    list[i] = Number(list_a[i]) + Number(list_b[i]);
  }
  for(let j = i; j < list.length; j++){
    list[j] = Number(list[j]);
  }
  for(let i = 0; i < list.length; i++){
    if(list[i] >=10){
      if(i == list.length-1){
        list.push(1)
        list[i] -= 10;
      }else{
        list[i+1]++;
        list[i] -= 10;
      }
    }
  }
  return list.reverse().join("");
}
log(add("99","9"))
*/
/*
best answer
the the the
*/
/*
function add (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}
log(add("4","777"))
*/
/*
https://www.codewars.com/kata/sum-the-array/javascript
*/
//Your code goes here
/*
Array.prototype.sum = function(){
  return this.reduce((p,n)=>{
    return p+n;
  });
}
log([1,2,3].sum())
*/
/*
Strings Mix
https://www.codewars.com/kata/strings-mix/train/javascript
*/
/*
function mix(s1, s2) {
    var dict = {},
        dict2 = {};
    var l1 = s1.toLowerCase().replace(/[^a-zA-Z]+/g, "").split("").filter((value)=>{
        dict[value]=~~dict[value]+1;
        return dict[value] - 1 <= 0;
    }).filter((value)=>{
        return dict[value]>1
    });
    l1.sort((a,b)=>{return dict[b] - dict[a]});
    l1.sort((a,b)=>{
        if(dict[a]==dict[b])
            return a-b;
    })
    var l2 = s2.toLowerCase().replace(/[^a-zA-Z]+/g, "").split("").filter((value)=>{
        dict2[value]=~~dict2[value]+1;
        return dict2[value] - 1 <= 0;
    }).filter((value)=>{
        return dict2[value]>1
    });
    l2.sort((a,b)=>{return dict2[b] - dict2[a]});
    l2.sort((a,b)=>{
        if(dict2[a]==dict2[b]){
            return a-b;
        }
    })
    var str = ""
    while(l1.length||l2.length){
        if(~~dict[l1[0]]>=~~dict2[l2[0]]){
            var dele = l1.shift()
            if(dict2[dele] == dict[dele])
                str+="/=:"
            else
                str+="/1:";
            for(let i = 0; i < dict[dele];i++){
                str+=dele;
            }
            for(let i = 0;i<l2.length;i++)
                if(l2[i] == dele){
                    l2.splice(i,1)
                    break;
                }
        }
        else if(~~dict[l1[0]] < ~~dict2[l2[0]]){
            var dele = l2.shift();
            str+="/2:";
            for(let i = 0;i<l1.length;i++){
                if(l1[i] == dele){
                    l1.splice(i,1)
                    break;
                }
            }
            for(let i = 0;i<dict2[dele];i++)
                str+=dele;
        }
    }
    return str.replace(/^\//,"")
}
log(mix("Are they here", "yes, they are here"))
*/
/*
2016-09-24
Roman Numerals Decoder
https://www.codewars.com/kata/roman-numerals-decoder/train/javascript
*/
/*
function solution(roman){
  // complete the solution by transforming the 
  // string roman numeral into an integer  
  var list = "MDCLXVI".split("");
  var numlist = "1000.500.100.50.10.5.1".split(".");
  var dict = {};
  list.forEach((value,index)=>{
  	dict[value] = numlist[index];
  });
  var sum = 0;
  var roman_list = roman.split("");
  for(var i = 0; i < roman_list.length; i++){
  	sum += ~~dict[roman_list[i]];
  	if(i != 0 && ~~dict[roman_list[i]] > ~~dict[roman_list[i-1]]){
  		sum -= 2*(~~dict[roman_list[i-1]]);
  	}
  }
  return sum;
}
log(solution("VII"))
*/
/*
Undo/Redo
https://www.codewars.com/kata/undo-slash-redo/train/javascript
*/
/*
function undoRedo(object) {
	return {
		dolist : [],
		undolist : [],
		set: function(key, value) {
			this.dolist.push([key,object[key]]);
			this.undolist = [];
			object[key] = value;
		},
		get: function(key) {
			return object[key];
		},
		del: function(key) {
			this.dolist.push([key,object[key]]);
			this.undolist = [];
			delete object[key];
		},
		undo: function() {
			if(!this.dolist.length)
				throw new Error("can't")
			else{
				var dodo = this.dolist.pop();
				this.undolist.push([dodo[0],object[dodo[0]]]);
				if(dodo[1] != undefined)
					object[dodo[0]] = dodo[1];
				else{
					delete object[dodo[0]]
				}
			}
		},
		redo: function() {
			if(!this.undolist.length)
				throw new Error("can't")
			else{
				var redo = this.undolist.pop();
				this.dolist.push([redo[0],object[redo[0]]]);
				if(redo[1] != undefined)
					object[redo[0]] = redo[1];
				else{
					delete object[redo[0]]
				}
			}
		}
	};
}

var obj = {
	x : 1,
	y : 2
}
var test = undoRedo(obj);
test.get("x")
test.del("x")
test.undo();
*/
/*
 * base64
 *  
 */
 /*
//Extend the String object with toBase64() and fromBase64() functions
// private method for UTF-8 encoding  
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function _utf8_encode(string) {  
    string = string.replace(/\r\n/g,"\n");  
    var utftext = "";  
    for (var n = 0; n < string.length; n++) {  
        var c = string.charCodeAt(n);  
        if (c < 128) {  
            utftext += String.fromCharCode(c);  
        } else if((c > 127) && (c < 2048)) {  
            utftext += String.fromCharCode((c >> 6) | 192);  
            utftext += String.fromCharCode((c & 63) | 128);  
        } else {  
            utftext += String.fromCharCode((c >> 12) | 224);  
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
            utftext += String.fromCharCode((c & 63) | 128);  
        }  

    }  
    return utftext;  
}  

// private method for UTF-8 decoding  
function _utf8_decode(utftext) {  
    var string = "";  
    var i = 0;  
    var c = c1 = c2 = 0;  
    while ( i < utftext.length ) {  
        c = utftext.charCodeAt(i);  
        if (c < 128) {  
            string += String.fromCharCode(c);  
            i++;  
        } else if((c > 191) && (c < 224)) {  
            c2 = utftext.charCodeAt(i+1);  
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
            i += 2;  
        } else {  
            c2 = utftext.charCodeAt(i+1);  
            c3 = utftext.charCodeAt(i+2);  
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
            i += 3;  
        }  
    }  
    return string;  
}
function encode(input){
    var output = "";  
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
    var i = 0;  
    input = _utf8_encode(input);  
    while (i < input.length) {  
        chr1 = input.charCodeAt(i++);  
        chr2 = input.charCodeAt(i++);  
        chr3 = input.charCodeAt(i++);  
        enc1 = chr1 >> 2;  
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
        enc4 = chr3 & 63;  
        if (isNaN(chr2)) {  
            enc3 = enc4 = 64;  
        } else if (isNaN(chr3)) {  
            enc4 = 64;  
        }  
        output = output +  
        _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
        _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
    }  
    return output;
}
function decode(input){
    var output = "";  
    var chr1, chr2, chr3;  
    var enc1, enc2, enc3, enc4;  
    var i = 0;  
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
    while (i < input.length) {  
        enc1 = _keyStr.indexOf(input.charAt(i++));  
        enc2 = _keyStr.indexOf(input.charAt(i++));  
        enc3 = _keyStr.indexOf(input.charAt(i++));  
        enc4 = _keyStr.indexOf(input.charAt(i++));  
        chr1 = (enc1 << 2) | (enc2 >> 4);  
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
        chr3 = ((enc3 & 3) << 6) | enc4;  
        output = output + String.fromCharCode(chr1);  
        if (enc3 != 64) {  
            output = output + String.fromCharCode(chr2);  
        }  
        if (enc4 != 64) {  
            output = output + String.fromCharCode(chr3);  
        }  
    }  
    output = _utf8_decode(output);  
    return output;  
}
String.prototype.toBase64 = function(){
  return encode(this);
}
String.prototype.fromBase64 = function(){
  return decode(this);
}
log("this is a string!!".toBase64());
log('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64());
*/
//base answer
/*
String.prototype.toBase64 = function() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var encoded = '';
  
  for(var i=0; i < this.length; i+=3) {
    var c1 = this.charCodeAt(i), 
        c2 = this.charCodeAt(i+1), 
        c3 = this.charCodeAt(i+2);
    encoded += chars[(c1 & 0xFC) >> 2];
    encoded += chars[((c1 & 0x03) << 4) | ((c2 & 0xF0) >> 4)];
    encoded += chars[((c2 & 0x0F) << 2) | ((c3 & 0xC0) >> 6)];
    encoded += chars[c3 & 0x3F];
  }
  
  return encoded;
};

String.prototype.fromBase64 = function() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var decoded = '';
  
  for(var i=0; i < this.length; i+=4) {
    var c1 = chars.indexOf(this[i]), 
        c2 = chars.indexOf(this[i+1]), 
        c3 = chars.indexOf(this[i+2]),
        c4 = chars.indexOf(this[i+3]);
    decoded += String.fromCharCode(((c1) << 2) | ((c2 & 0x30) >> 4));
    decoded += String.fromCharCode(((c2 & 0x0F) << 4) | ((c3 & 0xFC) >> 2));
    decoded += String.fromCharCode(((c3 & 0x03) << 6) | c4);
  }
  
  return decoded;
};
log("this is a string!!".toBase64());
log('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64());
*/
/*
 * http://www.codewars.com/kata/a-chain-adding-function/train/javascript
 * add(3)(4)(5) == 12 => true
*/
function add(n){
  var fn = function(x) {
    return add(n + x);
  };
  
  fn.valueOf = function() {
    return n;
  };
  
  return fn;
}