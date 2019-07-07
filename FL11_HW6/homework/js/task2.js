let a = prompt('введите длину стороны а');
let b = prompt('введите длину стороны b');
let c = prompt('введите длину стороны c');

if (typeof +a === 'number' &&
    typeof +b === 'number' &&
    typeof +c === 'number') {
    let A = +a;
    let B = +b;
    let C = +c;
    if (A + B > C && A + C > B && C + B > A) {
        if (A === B && B === C) {
            console.log('Eequivalent triangle');
        } else if (A === B || B === C || C === A) {
            console.log('Isosceles triangle'); 
        } else {
            console.log('Normal triangle');
        }
    } else {
        console.log('Triangle doesn’t exist');
    }
}




