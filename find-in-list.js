
function List(first, ...rest) {
  const head = { value: first };
  
  rest.reduce((node, value) => 
    node.next = { value }, head);
    
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