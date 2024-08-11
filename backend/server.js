const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // This middleware is necessary to parse JSON bodies

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bisu_ojt"
});

app.get('/', (req, res) => {
    return res.json("FROM BACKEND");
});

app.get('/admin', (req, res) => {
    const sql = "SELECT * FROM administrator";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post('/create', (req, res) => {
    const sql = "INSERT INTO administrator (`admin_user`, `admin_password`, `admin_name`) VALUES (?)";
    const values = [
        req.body.user,
        req.body.pass,
        req.body.name,
    ];
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("User created successfully");
    });
});

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE administrator SET `admin_user`= ?, `admin_password`=?, `admin_name`=? WHERE admin_id = ?";
    const id = req.params.id;
    const values = [
        req.body.user,
        req.body.pass,
        req.body.name,
    ];
    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json(err);
        return res.json("Updated successfully");
    });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

