const connect = require('connect');

const app = connect();

function helloWorld(req, res, next){
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello from NodeJs Application');
}

function byeWorld(req, res, next){
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Hello from NodeJs Application as html</h1>');
}

function sayWorld(req, res, next){
    res.setHeader('Content-type','application/json');
    res.end('{“message”: “Hello from NodeJS Application as json”}');
             
}

app.use('/html',byeWorld);
app.use('/json',sayWorld);
app.use('/',helloWorld);

app.listen(3000);

console.log('Server at running at http://localhost:3000');