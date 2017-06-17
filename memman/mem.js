const FILL_SIZE = 1e6;

let start = +new Date;


// Scenario One - progressively fill an object by FILL_SIZE random numbers
let o = {};
for ( let i = 0; i < 1e6; ++i) {
    o[i] = Math.random();
}
let stop_obj = +new Date;
console.log(`Filling ES5 object with ${FILL_SIZE} random numbers took ${stop_obj-start} ms.`);


// Scenario Two - progressively fill a map by FILL_SIZE random numbers
let m = new Map();
for ( let i = 0; i < 1e6; ++i) {
    m.set(i, Math.random());
}
let stop_map = +new Date;
console.log(`Filling ES6 Map with ${FILL_SIZE} random numbers took ${stop_map-stop_obj} ms.`);


// Scenario Three - progressively fill a map by FILL_SIZE random numbers
let arr = new Float32Array();
for ( let i = 0; i < 1e6; ++i) {
    arr[i] = Math.random();
}
let stop_arr = +new Date;
console.log(`Filling Float Array with ${FILL_SIZE} random numbers took ${stop_arr-stop_map} ms.`);


// Scenario Four - dynamically extending an object by approx. FILL_SIZE random numbers while traversing it
for ( let key in o ) {
    o['bla'+key] = Math.random() * o[key];
}
let stop_o_dyn = +new Date;
console.log(`Filling object with ${FILL_SIZE} additional random numbers while traversing it took ${stop_o_dyn-stop_arr} ms.`);


// Scenario Four - dynamically extending an object by approx. FILL_SIZE random numbers while traversing it
for ( let key of m.keys() ) {
    m.set('bla'+key, Math.random() * m.get(key));
}
let stop_o_map = +new Date;
console.log(`Filling map with ${FILL_SIZE} additional random numbers while traversing it took ${stop_o_map-stop_o_dyn} ms.`);