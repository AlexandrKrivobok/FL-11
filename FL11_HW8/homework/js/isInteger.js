function isInteger(val) {
    return (val ^ 0) === val;
}

console.log(isInteger(5.1));
console.log(isInteger(5));