var http = require('http'); // Import Node.js core module
const fs = require('fs')

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request       
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });   
        let content = fs.readFileSync('hello.txt','utf8')    
        let lines = content.split('\n');
        let list = '<ul>';
        for(i=0;i<lines.length;i++){
            let id= lines[i].split(';')[0];
            let name = lines[i].split(';')[1];
            list += '<li>' + id + '-' + name  + '</li>';
        }  
        list += '</ul>';
        // set response content  
        let a1 = '<br><a href="/student">Student</a>';  
        let a2 = '<br><a href="/admin">Admin</a>';  
        res.write(`<html><body><p style="color:red">This is home Page 123.</p>${a1} ${a2} ${list}</body></html>`);
        res.end();    
    }
    else if (req.url == "/student") {      
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();   
    }
    else if (req.url == "/admin") {       
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();   
    }
    else
        res.end('Invalid Request!');
});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')