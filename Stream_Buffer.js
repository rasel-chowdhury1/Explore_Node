const http = require('http');
const fs = require('fs');


// Creating a server using raw node.js
const server = http.createServer();

//Listener
server.on('request', (req, res) => {
    console.log(req.url, req.method);
    if(req.url=== '/readText' && req.method === 'GET');

        //streaming file reading
       const readStream = fs.createReadStream(process.cwd()+'./FileSystemModuel/texts/read.txt');
       console.log('read stream file -> ',readStream)
       readStream.on('data', (buffer) => {
        res.write(buffer)
       })

       readStream.on('énd', () => {
        res.end('hello world from stream_buffer file')
       })
    
    // 
})

server.listen(5000, ()=>{
    console.log(`Listening server on port 5000`)
})