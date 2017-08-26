function Node(value, next) {
  return { value, next }
}

function List(...items) {
  let head = Node(items[0], null)
  for (let i = 1, node = head; i < items.length; i++) {
    node.next = Node(items[i], null);
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

module.exports = { List, find }