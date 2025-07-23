const express = require('express');
const app = express();
const port = 3002;   // Your changed port

app.get('/', (req, res) => {
  res.send('Problem 8 Server Running on Port 3002!');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
