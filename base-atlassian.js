function convert(input) {
  let output = [];
  let codes = ['0', 'a', 't', 'l', 's', 'i', 'n'];
  
  while (input > 0) {
    output.push(codes[input % 7]);
    input = parseInt(input / 7)
  }
  
  return output.reverse().join('');
}

module.exports = { convert }
