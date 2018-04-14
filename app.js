const express = require('express');
const app = express();

console.log('Hallo Chiel!!!');
app.get('/', (req, res) => { 
    res.send('YESS IT WORKS, GREAT AS');
    console.log('get');
});

app.get('/test', (req, res) => {
    console.log(req);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

