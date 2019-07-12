function getMin(...arr) {
    let result = arr.reduce((minVal, currentNum) => {
        if (minVal > currentNum) {
            minVal = currentNum;
        }
        return minVal;
    });
    return result;
}

console.log(getMin(1, 2, -10000, 10));