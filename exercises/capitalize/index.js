// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArr = str.split(' ')
  const resultStr = []

  for (let elem of strArr) {
    resultStr.push(elem[0].toUpperCase() + elem.slice(1));
  }
  return resultStr.join(' ');
}

module.exports = capitalize;
