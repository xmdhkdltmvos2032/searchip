const express = require("express");
const app = express();
const ejs = require("ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    let ip = req.connection.remoteAddress;

    if (ip && ip.includes('::ffff:')) {
        ip = ip.replace('::ffff:', '');
    }

    res.render("index", { data: ip });
});


app.listen(3000, () => console.log("server!!!!!!!!!!!!!"));
