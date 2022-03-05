// 순열

function permutation(arr) {
  let result = [];
  function permute(arr, temp, grab) {
    if (temp.length === grab) {
      result.push(temp);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i]) === -1) {
          permute(arr, temp + arr[i], arr.length);
        }
      }
    }
  }
  permute(arr, "", arr.length);
  return result;
}
permutation([1,2,3,4])
