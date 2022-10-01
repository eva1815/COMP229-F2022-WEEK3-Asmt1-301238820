
//Index controller
export function helloWorld(req, res, next){
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello Hello World from controller');
};
