const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');
router.post("/get", (req, res) => {
    const statement = "select * from  amazonuser where email=? and password=?";
    const { email, password } = req.body;
    db.query(statement, [email, password], (err, result) => {
        res.send(result);
    });
});
router.post("/register", (req, res) => {
    const statement = "insert into amazonuser(email, type, phone, password) values(?,?,?,?)";
    const { email, type, phone, password } = req.body;
    db.query(statement, [email, type, phone, password], (err, result) => {
        res.send(result);
        console.log(result.insertId);
    });
});
module.exports = router;
