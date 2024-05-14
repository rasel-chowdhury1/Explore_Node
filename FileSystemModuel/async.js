//building module of node js
const fs = require('fs');

// reading text way to asynchrously
const readingText = fs.readFile('./texts/write.txt','utf-8',(err, data) => {
    if(err){
        throw Error('faceing error file')
    }
    else{
        console.log(data)

        fs.writeFile('./texts/write2.txt',data+'added data from write.txt file','utf-8', (err) =>{
            if(err){
                throw Error('facing error when write text')
            }
            console.log('successfull writed')
        })
        console.log('asynchrously')
    }
});
console.log(readingText)