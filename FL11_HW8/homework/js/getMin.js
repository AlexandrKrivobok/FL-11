function getMin(...arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (result > arr[i]) {
        result = arr[i]
      }
    }
    return result;
}

console.log(getMin(1, 2, -10000, 10));