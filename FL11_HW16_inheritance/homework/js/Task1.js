function assign (resultObj, ...sourceObjs) {
    sourceObjs.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
            resultObj[key] = obj[key];
        })
    });
    return resultObj;
}

/* ------------------------- tests ------------------------- */

const defaults = { a: 123, b: 777 };
const options = { a: 456 };
const configs = assign({}, defaults, options); // => {a: 456, b: 777}

console.log(configs);