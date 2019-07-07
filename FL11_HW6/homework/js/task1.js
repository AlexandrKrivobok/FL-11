let ax = prompt('введите координату Х точки а');
let ay = prompt('введите координату Y точки а');
let bx = prompt('введите координату Х точки b');
let by = prompt('введите координату Y точки b');
let cx = prompt('введите координату Х точки c');
let cy = prompt('введите координату Y точки c');
const divider = 2;

if (typeof +ax === 'number' &&
    typeof +ay === 'number' &&
    typeof +bx === 'number' &&
    typeof +by === 'number' &&
    typeof +cx === 'number' &&
    typeof +cy === 'number') {
    if ((+ax + +bx) / divider === +cx && (+ay + +by) / divider === +cy) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('incorrect input, all inputed vallues should be NUMBERS, pls try again ^_^)');
}


