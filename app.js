const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb/bread');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('Connected to database');
});

const productSchema = mongoose.Schema({
    name: String,
    price: Number
});

const productCollection = mongoose.model('products', productSchema);

let product = new productCollection({ name: 'Product 1', price: 1000 });

product.save(function (err, product) {
    if (err) return console.error(err);
    console.log('First record saved');
})

app.get('/', (req, res) => { 
    res.send('Hello World!!!...');
    console.log('get');
});

app.get('/test', (req, res) => {
    console.log(req);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));