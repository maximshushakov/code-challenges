# Code challenges
Solutions for some coding challenges

### 4. Base64 Encoding

Extend the String object with methods that convert the value of the String to and from Base64 using the ASCII character set.

Solution in [base64-encoding.js](https://github.com/mshushakov/FE-challenges/blob/master/base64-encoding.js)

```javascript
// should return 'dGhpcyBpcyBhIHN0cmluZw=='
'this is a string'.toBase64(); 

// should return 'this is a string'
'dGhpcyBpcyBhIHN0cmluZw=='.fromBase64();
```

### 3. Look And Say
Implement a function that reads off the digits of the input:

`LookAndSay(1)  = 11`   because it reads off 'one 1'

`LookAndSay(11) = 21`   because it reads off 'two 1'

`LookAndSay(21) = 1211` because it reads off 'one 2, one 1'

`LookAndSay(digits, n)` n times recursion of `LookAndSay`

```javascript
function LookAndSay(digits, counts = 1) {
  digits = String(digits);
  
  let result = "", counter = 1, previous = digits[0];
  
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] === previous) {
      counter++;
      continue;
    } 
    
    result += (counter + previous);
    
    previous = digits[i];
    counter = 1;
  }
  
  result += (counter + previous);
  
  return (counts > 1) ? LookAndSay(result, --counts) : result;
}

// Sample Input 1
console.log(LookAndSay(1211)) // 111221

// Sample Input 2
console.log(LookAndSay(111221)) // 312211

// Sample Input 3
console.log(LookAndSay(11, 2)) // 21 => 1211
```

### 2. Base Atlassian
Implement a function that converts an integer to base 7 and returns encoded string based on next codes:
['0', 'a', 't', 'l', 's', 'i', 'n']

Solution in [base-atlassian.js](https://github.com/mshushakov/FE-challenges/blob/master/base-atlassian.js)

```javascript
// should return a0
convert(7)

// should return atlassian
convert(7792875)
```

### 1. Find in a list
Implement basic List data structure and an `indexOf` like function for searching index of

Solution in [list-find.js](https://github.com/mshushakov/FE-challenges/blob/master/list-find.js)

```javascript
// should return 1
find(List(1,2,3), List(2,3))

// should return -1
find(List(1,2,3), List(3,2))

// should return 4
find(List(1,2,3,1,3,2), List(3,2))
```
