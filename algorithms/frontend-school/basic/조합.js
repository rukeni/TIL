// 조합
function combination (arr, grab) {
  let result = [];
  function combine(arr, temp, grab) {
    if (temp.length === grab) {
      result.push(temp);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i]) === -1) {
          combine(arr, temp + arr[i], grab);
        }
      }
    }
  }
  function reverse(str) {
    return str.split("").reverse().join("");
  }
  combine(arr, "", grab);
  return result;
}

combination([1,2,3], 2)