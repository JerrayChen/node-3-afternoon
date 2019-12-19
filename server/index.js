require('dotenv').config();

const express = require('express');
const app = express();
const massive = require('massive');
const { SERVER_PORT,CONNECTION_STRING } = process.env;
const pController = require('./controller/products_controller');
app.use(express.json());

massive(CONNECTION_STRING).then( db =>{
    console.log("Database connected.");
    app.set('db',db);
}).catch(err=>console.log(err));

app.get('/api/products', pController.getAll);
app.get('/api/products/:product_id', pController.getOne);
app.put('/api/products/:product_id', pController.update);
app.post('/api/products', pController.create);
app.delete('/api/products/:product_id', pController.deleteProduct);

app.listen(SERVER_PORT, () => { console.log("Server is listening to port", SERVER_PORT) });