const EventEmitter = require('events');

const MyEmitter = new EventEmitter();
MyEmitter.on("birthday", () => {
    console.log("HAPPY BIRTHDAY TO YOU")
})

MyEmitter.on('birthday', (param1) => {
    console.log(`I will provide a ${param1}`)
})

MyEmitter.emit('birthday', 'mobile')
// console.log(MyEmitter)