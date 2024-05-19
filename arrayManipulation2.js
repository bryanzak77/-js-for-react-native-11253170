function processArray(arr){
  var result = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      result.push(arr[i] * arr[i]); 
      else {
        result.push(arr[i] * 3);
      }
    }
  }
  return result;
}
function processArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i] * arr[i]);
    } else {
      result.push(arr[i] * 3);
    }
  }
  return result;
}

function formatArrayStrings(strArr, numArr) {
  if (strArr.length !== numArr.length) {
    return "Arrays must have the same length";
  }

  const formattedStrings = [];

  for (let i = 0; i < strArr.length; i++) {
    const str = strArr[i];
    const num = numArr[i];

    if (num % 2 === 0) {
      formattedStrings.push(str.toUpperCase());
    } else {
      formattedStrings.push(str.toLowerCase());
    }
  }

  return formattedStrings;
}