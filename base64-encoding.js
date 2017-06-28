String.prototype.toBase64 = function() {
  const CODES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  const chunks = this.match(/.{1,3}/g);
  
  const parse = (chunk) => {
    return chunk.split('').reduce((sum, item, index) => {
      return sum + (item.charCodeAt() << (2 - index) * 8);
    }, 0)
  }
  
  const encode = (pattern) => {
    return (
        CODES[pattern >> 18 & 0x3F]
      + CODES[pattern >> 12 & 0x3F]
      + CODES[pattern >>  6 & 0x3F || 64]
      + CODES[pattern       & 0x3F || 64]
    )
  }
  
  return chunks.reduce((output, chunk) => output + encode(parse(chunk)), '')
}

String.prototype.fromBase64 = function() {
  const CODES = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  const chunks = this.match(/.{1,4}/g);
  
  const parse = (chunk) => {
    return chunk.split('').reduce((sum, item, index) => {
      const code = CODES.indexOf(item);
      return (code < 64) ? sum + (code << ((3 - index) * 6)) : sum
    }, 0)
  }
  
  const decode = (pattern) => {
    return (
        String.fromCharCode((pattern >> 16) & 0xFF)
      + String.fromCharCode((pattern >> 8) & 0xFF)
      + String.fromCharCode((pattern) & 0xFF)
    ).replace(/\u0000/g, '');
  }
  
  return chunks.reduce((output, chunk) => output + decode(parse(chunk)), '')
}
