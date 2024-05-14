//Called Local Module
const {a, add} = require('./local1')
const {a: a2, add: add2} = require('./local2'); //change value name using type alias (:)

const sum = add(100,300);
console.log('2 value of sum = ', sum);
console.log('a value is form local1 file -> ', a)
console.log('3 values of sum -> ', add2(10, 20, 30));
console.log('a2 value is from local2 file -> ', a2)


// Called Building Module
const path = require('path');
console.log('path is -> ',path.dirname("C:/Next Level 2 of programing hero course start/Node/LocalModuel/index.js"))
console.log('path is -> ',path.parse("C:/Next Level 2 of programing hero course start/Node/LocalModuel/index.js"))
