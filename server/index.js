const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const massive = require('massive');
require('dotenv').config();

const app = express();
massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
})


app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: 'asdf',
    resave: false,
    saveUninitialized: false
}))




app.get('/api/products', (req, res) => {
    req.app.get('db').get_products().then(products => {
        res.status(200).send(products);
    }).catch((err) => {console.log(err)})
})


app.get('/api/product/:id', (req, res) => {
    req.app.get('db').get_product([req.params.id]).then(product => {
        res.send(product[0]);
    }).catch((err) => {console.log(err)})
})

app.get('/api/cart', (req, res)=>{
    res.json(req.session.cart)
})

app.post('/api/addtocart', (req, res)=>{
    console.log(req.body);
    if (!req.session.cart) {
        req.session.cart = [];
    }
    req.session.cart.push(req.body)

        res.json(req.session.cart)

})


const port = 3030;
app.listen(port, function(){
    console.log(`Running on port ${port}`);
})