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

db.query("CREATE TABLE `reports` (`reportID` INT NOT NULL AUTO_INCREMENT , `userID` INT NOT NULL , `name` TEXT NOT NULL, `date` DATETIME on update CURRENT_TIMESTAMP NOT NULL , PRIMARY KEY (`reportID`)) ENGINE = InnoDB;")

db.query("DROP TABLE IF EXISTS error_instances;")

db.query("CREATE TABLE `error_instances` (`reportID` INT NOT NULL, `position` TEXT(30) NOT NULL, `error` TEXT(30) NOT NULL);")

db.query("DROP TABLE IF EXISTS errors;")

db.query("CREATE TABLE `errors` (`error` TEXT(30) NOT NULL, `reccomendation` TEXT(100) NOT NULL, UNIQUE(error);")

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

    const sql_get_report_ids = "SELECT reportID, userID, date FROM reports WHERE `userID` = ?;";

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

            console.log(data__)

            return data__;

        } else {

            return res.json("zero length");

        }

    })

});

app.post('/dashboard/:USERID/new'), (req, res) => {

    const sql_reports_query = "INSERT INTO reports (`userID`, `name`, `reportText`, `reportAnalysis`) VALUES (?);"

    const sql_error_instances_query = "INSERT INTO error_instances (`reportID`, `position`, `error`) VALUES (?);"

    const sql_errors_query = "INSERT INTO errors (`error`, `reccomendation`) VALUES (?);"

    const sql_get_report_id = "SELECT reportID WHERE `userID` = ? AND `name` = ?;"

    let options = {

        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        args: [''] //An argument which can be accessed in the script using sys.argv[1]

    };

    console.log("B")
     
 
    PythonShell.run('run_slither.py', options, function (err, result){

        if (err) throw err;

        console.log('result: ', result.toString());

        result = result.toString()

        fullSummary_array = []
        fullPosition_array = []

        instance_array = []
        error_array = []

        while (True) {

            // line = readline + remove whitespace

            if (line == "Summary") {

                while (True) {

                    // line = readline + remove whitespace

                    if (line.length > 2) {

                        if (line.substring(0.2) == " - ") {

                            fullSummary_array.push(line)

                        } else {

                            break

                        }

                    }

                }

            }

        }

        while (True) {

            // line = readline + remove whitespace

            if (req.body.name == line.substring(0, filename.length)) {

                pullPosition_array.push(line.substring(req.body.name.length + 1).split("-"))

            }

            // if end of file, break and close file

        }

        fullSummary_array.forEach(summary_line => {

            // error_name = grab x where "[x]"

            split_line = summary_line.split(" ")

            // num results = grab x where "(x "

            error_impact = split_line[2].substring(1, split_line[2].length - 2)

            for (let i = 0; 1 < num_results; i++) {

                instance_array.push([null, error_name])

            }

            error_array.push([error_name, error_impact])

        })

        fullPosition_array.forEach((element, index) => {

            instance_array[index][0] = element

        })



        let reports_values = [

            req.params.USERID,
            req.body.name
        
        ]

        db.query(sql_reports_query, [reports_values], (err, data) => {

            if (err) {
    
                return res.json(err);
    
            }
    
            return res.json(["Success", req.params.USERID]);
    
        })

        db.query(sql_get_report_id, [req.params.USERID, req.body.name], (err, data) => {

            instance_array.forEach((element) => {

                db.query(sql_error_instances_query, [data[0], element[0], element[1]], (err, data) => {



                })

            })

        })

        // db.query(sql_errors_query, [error_array[0], error_array[1], reccomendation], (err, data => {

        // })

    });

}

app.listen(8081, () => {

    console.log("listening");

})