const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // Handling POST request for /home
    if (url == '/home' && method == 'POST') {
        let body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);

            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>hello home after post</h1>');
            res.end();
        });
    }

    // Handling GET request for /home
    else if (url == '/home' && method == 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>hello home before post</h1>');
        res.end();
    }

    // Handling POST request for /user
    else if (url == '/user' && method == 'POST') {
        let body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);

            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>hello user after post</h1>');
            res.end();
        });
    }

    // Handling GET request for /user
    else if (url == '/user' && method == 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>hello user before post</h1>');
        res.end();
    }

    // Handling unknown routes
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
