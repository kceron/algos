// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charsObj = {};
  let max = 0;
  let maxChar = "";

  for(let char of str){
    if (charsObj[char]){
      charsObj[char] += 1
    } else {
      charsObj[char] = 1
    }
  }
  // to iterate over objs we use for in
  // where char is each key
  for(let char in charsObj){
    if(charsObj[char] > max){
      max = charsObj[char]
      maxChar = char
    }
  }
  return maxChar;
}

maxChar('beeeenn');

module.exports = maxChar;

  // for(let char of str){
  //   chars[char] = chars[char] + 1 || 1;
  // }
