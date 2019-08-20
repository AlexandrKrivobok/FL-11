function create(proto) {
    // eslint-disable-next-line no-empty-function
    function Constr() {}

    Constr.prototype = proto;

    return new Constr();
}

/* ------------------------- tests ------------------------- */

const obj1 = { prop: 5 };
const obj2 = create(obj1);

console.log(Object.getPrototypeOf(obj2) === obj1); // => true
console.log(obj2.prop); // => 5