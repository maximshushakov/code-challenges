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

`lookAndSay(1)  = 11`   because it reads off 'one 1'

`lookAndSay(11) = 21`   because it reads off 'two 1'

`lookAndSay(21) = 1211` because it reads off 'one 2, one 1'

`lookAndSay(digits, n)` n times recursion of `lookAndSay`

Solution in [look-say.js](https://github.com/mshushakov/FE-challenges/blob/master/look-say.js)

```javascript
// should return 111221
lookAndSay(1211)

// should return 312211
lookAndSay(111221)

// should return 1211 because 21 => 1211
lookAndSay(11, 2)

// should return 22 because 22 => always 22
lookAndSay(22, 100)
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

// should return sansalita
convert(24659559)
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
