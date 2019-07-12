function addOne(a) {
    return a + 1;
}

function pipe(num, ...functions) {
    let result = num;
    for (let i = 0; i < functions.length; i++) {
        result = functions[i](result);
    }
    return result;
}

console.log(pipe(1, addOne, addOne));