const express = require("express");
const app = express();
const ejs = require("ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("예지야많이사랑한다🖤🖤🖤🖤🖤🖤🖤")
});


app.listen(4000, () => console.log("server!!!!!!!!!!!!!"));
