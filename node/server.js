
const http = require('http');
const {spawn} = require('child_process');
const { strict } = require('assert');

const hostname = '127.0.0.1';
const port = 3001;
const cmd = 'pwd';

const server = http.createServer((req, res) => {

     const child = spawn(cmd, {shell: true});
     child.on('exit', function(code, signal){
         console.log('child process exited with ' + `code: ${code} & signal: ${signal}`);
     });


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Remote-Agent v0.0.1 is running...');
});

server.listen(port, hostname, () => {
    console.log(`Remote-Agent Server is running at http://${hostname}:${port}/`);
});
