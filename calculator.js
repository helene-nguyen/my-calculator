//!import express module
const express = require('express');
const req = require('express/lib/request');
const app = express();
//!import body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));


const port = 3000;

//^HOMEPAGE
//&another way to send files without using the get method for homepage
app.use(express.static(__dirname + '/public'));
app.use(express.static('public/css'));
/* app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});*/
//&send CSS
/*app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/style.css");
  }); */

app.post('/', (req, res) => {
    //give an object
    console.log(req.body);

    //!be careful, body parse into a string 
    let num1 = parseInt(req.body.num1, 10);
    let num2 = parseInt(req.body.num2, 10);

    let result = num1 + num2;

    res.send(`The result is ${result}`)
});

//^BMI CALCULATOR
app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/public/html/bmiCalculator.html')
})

app.post('/bmicalculator', (req, res) => {
    console.log(req.body);
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);

    let bmiCalculate = weight / (height * height);

    res.send(`Your BMI is ${bmiCalculate}`);
})

app.listen(port, () => {
    console.log(`Running server on http://localhost:${port}..`);
});