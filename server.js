const express = require("express");
const app = express();
const ejs = require("ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{

    let ip = req.ip

    console.log(ip);

    res.render("index",{data:ip})
});


app.listen(3000,()=>console.log("server start"));