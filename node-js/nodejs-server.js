const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>welcome to index page</h2>");
    } else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>welcome to about page</h2>");
    } else if (url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>welcome to contact page</h2>");
    } 

    res.end();
});

const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
});
