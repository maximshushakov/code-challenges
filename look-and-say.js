function lookAndSay(digits, counts = 1) {
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
  
  return (counts > 1) ? lookAndSay(result, --counts) : result;
}

module.exports = { lookAndSay }