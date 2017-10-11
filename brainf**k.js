function brainfuck(code, input){
  const data = (input) ? input.split('').map(char => char.charCodeAt(0)) : [];
  const stack = [];
  const memory = [];
  
  const jumps = code.split('').reduce((jumps, command, index)=> {
    if (command === '[') jumps.stack.push(index);
    else if (command === ']') jumps[jumps.stack.pop()] = index;
    return jumps;
  }, { stack: [] });

  const commands = {
    ',': function() { memory[pointer] = (data.length) ? data.shift() : 0 },
    '.': function() { output += String.fromCharCode(memory[pointer]); },
    '>': function() { pointer++ },
    '<': function() { pointer-- },
    '+': function() { memory[pointer] = ++memory[pointer] & 0xFF },
    '-': function() { memory[pointer] = --memory[pointer] & 0xFF },
    '[': (cpos) => { 
      if (!memory[pointer]) return jumps[cpos];
      else stack.push(cpos);
    },
    ']': (cpos) => {
      if (memory[pointer]) return stack[stack.length - 1];
      else stack.pop()
    }
  }
  
  let pointer = 0, cpos = 0, output = '';
  
  for (; cpos < code.length; cpos++) {
    const command = code[cpos];

    if (!memory[pointer]) memory[pointer] = 0;
    cpos = commands[command](cpos) || cpos;

  }
  
  return output;
}

module.exports = { brainfuck }