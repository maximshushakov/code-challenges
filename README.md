# FE challenges
Solutions for some of FE coding challenge

### 1. Find a list
Implement an `indexOf` like function for lists

```javascript
function Node(value, next) {
  this.value = value;
  this.next = next;
}

function List(...items) {
  let head = new Node(items[0], null)
  for (let i = 1, node = head; i < items.length; i++) {
    node.next = new Node(items[i], null);
    node = node.next;
  }
  return head;
}

function find(a,b) {
  let cur = a;
  let temp = b;
  let index = -1;
  let i = 0;
  
  do {
    if (cur.value === temp.value) {
      let temp1 = cur.next, temp2 = temp.next;
      let match = true;
      
      while(temp2) {
        if (!temp1 || temp1.value !== temp2.value) {
          match = false;
          break;
        }
        temp1 = temp1.next;
        temp2 = temp2.next;
      }
      
      if (match) {
        index = i;
        break;
      }
    }
    
    cur = cur.next;
    i++;
  }
  while (cur);
    
  return index;
}

// Sample Input 1
var list1 = List(1,2,2,3);
var list2 = List(2,3);

console.log(find(list1,list2)); // 1

// Sample Input 2
list1 = List(1,2,3);
list2 = List(3,2);

console.log(find(list1,list2)); // -1

// Sample Input 3
list1 = List(1,2,3,1,3,2);
list2 = List(3,2);

console.log(find(list1,list2)); // 4
```

### 2. Look And Say
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

### 3. Base Atlassian
Implement a function that converts an integer to base 7 and returns encoded string:

```javascript
function convert(input) {
  let output = [];
  let codes = ['0', 'a', 't', 'l', 's', 'i', 'n'];
  
  while (input > 0) {
    output.push(codes[input % 7]);
    input = parseInt(input / 7)
  }
  
  return output.reverse().join('');
}

// Sample Input 1
console.log(convert(7)) // a0

// Sample Input 2
console.log(convert(7792875)) // atlassian
```
