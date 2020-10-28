const express = require('express');
const moment = require ('moment');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const plaid = require('plaid');
const {PLAID_CLIENT_ID, PLAID_SECRET} = require('./key');

const client = new plaid.Client({
        clientID: PLAID_CLIENT_ID,
        secret: PLAID_SECRET,
        env: plaid.environments.sandbox
});

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect('mongodb://192.168.86.119:9090/users?authSource=admin', {user: "root", pass:"example"})

const db = mongoose.connection;
let userSchema = mongoose.Schema({
        email: String,
        password: String,
        transactions: Array,
        items: Array
    });

let User = mongoose.model('User', userSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {

app.get('/', (req, res) => {
        res.send('Hello world!!!');
    });

app.post('/register', (req, res) => {
        let {email, password } = req.body;
        let newUser = new User({email, password});

        newUser.save((err, user) => { res.send({message:`User created with ID: ${user._id}`})});
    });

app.post('/login', (req, res) => {
        let {email, password } = req.body;
        User.findOne({email, password}, (err, doc) => {
            if (err){
                res.sendStatus(400);
                return;
            }
            res.send({id:doc._id})

            });
    });

app.post('/create_link_token', (req, res) => {
        let {uid} = req.body;
        User.findById(uid, (err, doc) => {
            if (err){
                res.sendStatus(400);
                return;
            }
            let userId = doc._id;

            client.createLinkToken({
                user: {
                        client_user_id: userId
                    },
                client_name: 'Lint',
                products: ['transactions'],
                country_codes: ['US'],
                language: 'en'
                }, (err, linkTokenResponse) => {
                    res.json({link_token: linkTokenResponse.link_token});
                    });

            });
    });

app.post('/get_access_token', (req, res) => {
        let {public_token, uid} = req.body;

        client.exchangePublicToken(public_token, (err, response) => {
                if (err)
                    return res.json({error: "Oops"});

                let {access_token, item_id} = response;

                User.findByIdAndUpdate(uid, { $addToSet: {items: {access_token: access_token, item_id: item_id}}}, (err, data) => {
                console.log("Getting transactions");
                let today = moment().format('YYYY-MM-DD');
                let past = moment().subtract(30, 'days').format('YYYY-MM-DD');
                client.getTransactions(access_token, past, today, (err, response) => {
                res.send({transactions: response.transactions});
                User.findByIdAndUpdate(uid, { $addToSet: {transactions: response.transactions}}, (err, data) => {
                    });
                    });
                    });
            });
    });

app.post('/transactions', (req, res) => {
        let {uid} = req.body;

        User.findById(uid, (err, doc) => {
                //console.log(doc.transactions);
                res.send({transactions : doc.transactions});
            });
    });

app.post('/accounts', (req, res) => {
        let {uid} = req.body;

        User.findById(uid, (err, doc) => {
                res.send({accounts : doc.items});
            });
    });

app.listen(port, () =>{
        console.log(`Listending on port ${port}`);
    });
    });

