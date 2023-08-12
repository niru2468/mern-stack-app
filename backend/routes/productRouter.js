const express = require('express');
const router = express.Router();
const db = require('../db/dbConnect');
router.get("/get", (req, res) => {
    const statement = "select * from amazonproducts";
    db.query(statement, (err, results, fields) => {
        res.send(results);
    });
});
router.post("/add", (req, res) => {
    const statement = "insert into amazonproducts values(?,?,?,?,?)";
    const { id, product_category, product_name, product_details, product_price } = req.body;
    db.query(statement, [id, product_category, product_name, product_details, product_price], (err, result) => {
        res.send(result);
        console.log(results.insertId);
    });
});
router.put("/update/:id", (req, res) => {
    const statement = "update amazonproducts set product_category = ?, product_name=?, product_details=?, product_price=? where id=?";
    const { product_category, product_name, product_details, product_price } = req.body;
    const { id } = req.params;
    db.query(statement, [product_category, product_name, product_details, product_price, id], (err, result) => {
        res.send(result);
    });
});
router.delete("/delete/:id", (req, res) => {
    const statement = "delete from amazonproducts where id=?";
    const { id } = req.params;
    db.query(statement, [id], (err, result) => {
        res.send(result);
    });
});

module.exports = router;
