const express = require('express')
const app = express()
const port=3000;
app.use(express.static('./static'));


app.get('/gethello', (req, res) => 
    res.send('Hello NodeJs! here i am responsing at gethello'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))