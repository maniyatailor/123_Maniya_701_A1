const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Server is running...');
});
server.listen(3002, () => {
    console.log('Server started on http://localhost:3002');
});
