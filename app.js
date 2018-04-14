const express = require('express');
const app = express();

console.log('Hallo!!!');
app.get('/', (req, res) => { 
    res.send('Hello World!!!...');
    console.log('get');
});

app.get('/test', (req, res) => {
    console.log(req);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));