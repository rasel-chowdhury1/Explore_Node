// build in module of node js
const fs = require('fs');

// console.log('fs data -> ',fs)

//reading a file texts way to synchronous
const readingText = fs.readFileSync('./texts/read.txt', 'utf-8');
// console.log('Reading Text => ', readingText)

//writeing a file texts way to synchronous
const writeText = fs.writeFileSync('./texts/write.txt', 'hello world from bangladesh' + 'writing mr.x')
console.log(writeText)