//Third Party Modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

//ES Modules fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//instantiate app-server
const app = express();

//custom middleware
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