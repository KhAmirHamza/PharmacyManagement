const express = require('express');

const app = express();
const { ifError } = require("assert");
const { json } = require("body-parser");
app.use(express.json());

var storage, path;
path = require('path');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Method', 'GET, PUT, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});


const medicineController = require('./medicine/medicineController');


app.use("/api/medicine", medicineController);





app.get('/get', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Success");
})

app.get('/app-ads.txt', function (req, res) {

    var fs = require('fs');
    var ads = fs.readFileSync('app-ads.txt', 'utf8')
    //console.log(ads);
    res.send(ads)
    res.end();
})

//For Cpanel...
//app.listen(3000);

//For Cloud Hosting...
const PORT = process.env.PORT || 5000;
app.listen(PORT, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is running on port :' + PORT);
    }
});