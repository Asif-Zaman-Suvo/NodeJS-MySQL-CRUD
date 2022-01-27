const mysql = require('mysql');
const express = require('express')
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpassword@123',
    database: 'EmployeeDB',
    multipleStatements: true
})

mysqlConnection.connect((err) => {
    if (!err) console.log("DB connection successful");

    else
        console.log('DB connection failed \n Error :' + JSON.stringify(err, undefined, 2))


})


app.listen(3000, () => console.log('Express server running on port no:3000'));

app.get('/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM Employee', (err, rows, fields) => {
        if (!err)
            res.send(rows);

        else console.log(err);
    })
});




