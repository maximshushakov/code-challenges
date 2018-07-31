function lookAndSay(digits, counts = 1) {
  if (!digits || counts < 1) return null;
  digits = String(digits);
  
  let result = "", counter = 1, previous = digits[0];
  
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] !== previous) {
      result += (counter + previous);
      previous = digits[i];
      counter = 0;
    } 
    counter++;
  }
  
  result += (counter + previous);
  
  let temp;
  while (--counts) {
    temp = lookAndSay(result)
    if (temp === result) return result;
    result = temp;
  }
  return result;
}

module.exports = { lookAndSay }
