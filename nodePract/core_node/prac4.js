const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let path = "./view/";
    if(req.url=="/"){
        path = path + "index.html";
    }else if(req.url=="/about"){
        path = path + "about.html";
    }else{
        path = path + "error.html";
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }else{
            res.end(data);
        }
    })
})

server.listen(4000, () => {
    console.log("server running .....");
})