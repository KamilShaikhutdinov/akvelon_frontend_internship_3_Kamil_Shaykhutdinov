//task 3.3

function getUniqueWords(arr) {
  let result = [];
  let array = arr.split(" ");
  for (let str of array) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result.join(' ');
}

console.log("Unique words")
console.log(getUniqueWords("easy come easy go"))
console.log(getUniqueWords("first things first"))
console.log(getUniqueWords("")) 
