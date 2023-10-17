const bcrypt = require("bcrypt");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const salt = 10;

const {PythonShell} =require('python-shell');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "project-cos20049-authentication"

});

db.query("DROP TABLE IF EXISTS authentication;")

db.query("CREATE TABLE `authentication` (`name` VARCHAR(20) NOT NULL , `email` VARCHAR(30) NOT NULL , `password` TEXT(50) NOT NULL , `userID` INT NOT NULL AUTO_INCREMENT , PRIMARY KEY (`userID`), UNIQUE (`email`)) ENGINE = InnoDB;")

db.query("DROP TABLE IF EXISTS reports;")

db.query("CREATE TABLE `reports` (`reportID` INT NOT NULL AUTO_INCREMENT , `userID` INT NOT NULL , `reportText` TEXT NOT NULL , `reportAnalysis` TEXT NOT NULL , `date` DATETIME on update CURRENT_TIMESTAMP NOT NULL , PRIMARY KEY (`reportID`)) ENGINE = InnoDB;")



app.post('/signup', (req, res) => {

    const sql = "INSERT INTO authentication (`name`, `email`, `password`) VALUES (?);"

    const password = req.body.password;

    bcrypt.hash(password.toString(), salt, (err, hash) => {

        if (err) {
            console.log(err);
        }

        let values = [

            req.body.name,
            req.body.email,
            hash
    
        ]

        //const replace_values = [":", ";", ",", "*", "'", "#", "\r", "\n", "x00", "x1a", '"']

        //replace_values.forEach(element => {

            //values[0] = values[0].replaceAll(element, "")
            //values[1] = values[1].replaceAll(element, "")
            //values[2] = values[2].replaceAll(element, "")

        //})

        db.query(sql, [values], (err, data) => {

            if (err) {
                return res.json("Error");
            }

            return res.json(data);

        })

    })

})

app.post('/login', (req, res) => {

    const sql = "SELECT * FROM authentication WHERE `email` = ?;";

    let email = req.body.email

    //const replace_values = [":", ";", ",", "*", "'", "#", "\r", "\n", "x00", "x1a", '"']

    //replace_values.forEach(element => {

        //email = email.replaceAll(element, "")

    //})

    db.query(sql, [email], (err, data) => {

        if (err) {

            return res.json(err);

        }

        if (data.length > 0) {

            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {

                if (err) {
                    return res.json(err);
                }

                if (response) {

                    console.log("success")
                    return res.json("Success");

                }

                return res.json("Hash failure")

            })


        } else {

            return res.json("Fail");

        }

    })

})

app.get('/login/:email', (req, res) => {

    const sql = "SELECT userID FROM authentication WHERE `email` = ?;";

    let email = req.params.email

    //const replace_values = [":", ";", ",", "*", "'", "#", "\r", "\n", "x00", "x1a", '"']

    //replace_values.forEach(element => {

        //email = email.replace(element, "")

    //})

    db.query(sql, [email], (err_, data_) => {


        if (err_) {

            return res.json("Error");

        }

       if (data_.length > 0) {

            return res.json('/dashboard/' + data_[0].userID);

       } else {

            return res.json(data_[0].id);

       }

    }) 

})

app.get('/dashboard/:USERID', (req, res) => {

    const sql_get_report_ids = "SELECT reportID, date FROM reports WHERE `UserID` = ?;";

    let userid = req.params.USERID

    //const replace_values = [":", ";", ",", "*", "'", "#", "\r", "\n", "x00", "x1a", '"']

    //replace_values.forEach(element => {

        //userid = userid.replace(element, "")

    //})

    db.query(sql_get_report_ids, [userid], (err__, data__) => {

        if (err__) {

            return res.json("ERROR");

        }

        if (data__.length > 0) {

            return data__;

        } else {

            return res.json("zero length");

        }

    })

});

app.post('/dashboard/:USERID/new'), (req, res) => {

    const sql_input_report_assessment = "INSERT INTO reports (`rserID`, `reportText`, `reportAnalysis`) VALUES (?);"

    let options = {

        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        args: [''] //An argument which can be accessed in the script using sys.argv[1]

    };
     
 
    PythonShell.run('run_slither.py', options, function (err, result){

        if (err) throw err;

        console.log('result: ', result.toString());

        let values = [

            req.params.USERID,
            report_text,
            report_analysis
        
        ]

        db.query(sql_input_report_assessment, [values], (err, data) => {

            if (err) {
    
                return res.json(err);
    
            }
    
            return res.json(["Success", req.params.USERID]);
    
        })

    });

}

app.listen(8081, () => {

    console.log("listening");

})